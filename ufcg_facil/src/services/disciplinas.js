import { DomParser } from 'react-native-html-parser';

const capturarDisciplinas = async (cookieAuth) => {
  const baseUrl = "https://pre.ufcg.edu.br:8443/ControleAcademicoOnline/Controlador";
  const comando = `${baseUrl}?command=AlunoTurmasListar`;

  try {
    const response = await fetch(comando, {
      method: 'GET',
      headers: {
        'Cookie': cookieAuth
      },
      credentials: 'include'
    });

    if (!response.ok) {
      throw new Error(`Erro HTTP: ${response.status}`);
    }

    return await response.text();
  } catch (error) {
    console.error("Erro na solicitação autenticada:", error);
    throw error;
  }
};

const extraiDisciplinas = async (cookieAuth) => {
  const dadosHtml = await capturarDisciplinas(cookieAuth);
  console.log(dadosHtml);

  // Faz o parse do HTML usando DomParser
  const parser = new DomParser();
  const dom = parser.parseFromString(dadosHtml, 'text/html');
  const table = dom.getElementsByTagName('table')[0];

  if (!table) {
    console.error('Erro: Nenhuma tabela encontrada');
    return null;
  }

  let disciplinas = [];
  const linhas = table.getElementsByTagName('tr');

  for (let i = 0; i < linhas.length; i++) {
    const linha = linhas[i];
    const celulas = linha.getElementsByTagName('td');
    const linhaDados = {};

    if (celulas.length > 1) {
      linhaDados.codigo = celulas[1].textContent.trim();
      linhaDados.nome = celulas[2].textContent.trim();
      linhaDados.turma = celulas[3].textContent.trim();
      linhaDados.horario = celulas[4].textContent.trim();

      disciplinas.push(linhaDados);
    }
  }

  return disciplinas;
};

export default extraiDisciplinas;
