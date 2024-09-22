//const { JSDOM } = require('jsdom')
const {Parser} = require('htmlparser2')
const {DOMParser} = require('xmldom')

export type Notas = {
  "E.&nbsp;final": string;
  "M.&nbsp;final": string;
  "M.&nbsp;parc": string;
  "Nota 1": string;
  "Nota 2": string;
  "Nota 3": string;
}

const capturarNotas = async (codigo, turma, cookieAuth) => {
    const baseUrl = "https://pre.ufcg.edu.br:8443/ControleAcademicoOnline/Controlador"
    const comando = `${baseUrl}?command=AlunoTurmaNotas&codigo=${codigo}&turma=${turma}&periodo=2024.1`

    try{
        const response = await fetch(comando, {
          method: 'GET',
          headers: {
            'Cookie': cookieAuth
          },
          credentials: 'include'
        })
    
        if (!response.ok) {
          throw new Error(`Erro HTTP: ${response.status}`)
        }
        return await response.text()
      }catch (error) {
        console.error("Erro na solicitação autenticada:", error)
        throw error
      }
}

const cleanHtmlContent = (htmlContent) => {
    // Remove todas as tags HTML
    let cleanContent = htmlContent.replace(/<[^>]*>/g, '');
    // Remove quebras de linha e espaços extras
    cleanContent = cleanContent.replace(/\s+/g, ' ').trim();
    // Pega apenas o primeiro texto antes de qualquer parêntese
    cleanContent = cleanContent.split('(')[0].trim();
    return cleanContent;
  };
  
export default async function extraiNotas(codigo, turma, cookieAuth)  {
  const dadosHtml = await capturarNotas(codigo, turma, cookieAuth);
  // Regex para encontrar a tabela e suas linhas
  const tableRegex = /<table[^>]*>([\s\S]*?)<\/table>/i;
  const rowRegex = /<tr[^>]*>([\s\S]*?)<\/tr>/gi;
  const headerCellRegex = /<th[^>]*>([\s\S]*?)<\/th>/gi;
  const dataCellRegex = /<td[^>]*>([\s\S]*?)<\/td>/gi;

  // Encontrar a tabela
  const tableMatch = dadosHtml.match(tableRegex);
  if (!tableMatch) {
    throw new Error('Nenhuma tabela encontrada no HTML fornecido');
  }

  const tableContent = tableMatch[1];
  const rows = tableContent.match(rowRegex);

  if (!rows || rows.length !== 2) {
    throw new Error('A tabela deve conter exatamente duas linhas (cabeçalho e dados)');
  }

  // Extrair os cabeçalhos
  let headers = [];
  let headerMatch;
  while ((headerMatch = headerCellRegex.exec(rows[0])) !== null) {
    headers.push(cleanHtmlContent(headerMatch[1]));
  }

  // Extrair os dados
  let dataCells = [];
  let dataMatch;
  while ((dataMatch = dataCellRegex.exec(rows[1])) !== null) {
    dataCells.push(cleanHtmlContent(dataMatch[1]));
  }

  headers = headers.slice(3)
  dataCells = dataCells.slice(3)
  // Criar o objeto resultado
  const result = {} as Notas;
  headers.forEach((header, index) => {
    result[header] = dataCells[index].replace(',', '.');
  });

  
  return result;
};