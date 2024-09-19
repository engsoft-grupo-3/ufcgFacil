//const { JSDOM } = require('jsdom')
const {Parser} = require('htmlparser2');

export type Disciplina = {
  codigo: string;
  horario: string;
  turma: string;
  nome: string;
}

const capturarDisciplinas = async (cookieAuth) => {
  const baseUrl = "https://pre.ufcg.edu.br:8443/ControleAcademicoOnline/Controlador"
  const comando = `${baseUrl}?command=AlunoTurmasListar`

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

export default async function(cookieAuth) {
  try {
    const dadosHtml = await capturarDisciplinas(cookieAuth);
    
    let disciplinas = [];
    let currentDisciplina = {} as Disciplina;
    let isInTable = false;
    let columnIndex = 0;
    let isCollectingHorario = false;
    
    const parser = new Parser(
      {
        onopentag(name, attributes) {
          if (name === 'table') {
            isInTable = true;
          } else if (isInTable && (name === 'td' || name === 'th')) {
            columnIndex++;
            if (columnIndex === 5) {
              isCollectingHorario = true;
              currentDisciplina.horario = '';
            }
          }
        },
        ontext(text) {
          if (isInTable && columnIndex > 0) {
            const trimmedText = text.trim();
            if (trimmedText) {
              switch (columnIndex) {
                case 2:
                  currentDisciplina.codigo = trimmedText;
                  break;
                case 3:
                  currentDisciplina.nome = trimmedText;
                  break;
                case 4:
                  currentDisciplina.turma = trimmedText;
                  break;
                case 5:
                  if (isCollectingHorario) {
                    currentDisciplina.horario += trimmedText + '\n';
                  }
                  break;
              }
            }
          }
        },
        onclosetag(tagname) {
          if (tagname === 'table') {
            isInTable = false;
          } else if (tagname === 'tr' && isInTable) {
            if (Object.keys(currentDisciplina).length === 4) {
              if (currentDisciplina.horario) {
                currentDisciplina.horario = currentDisciplina.horario.trim();
              }
              disciplinas.push({ ...currentDisciplina });
              currentDisciplina = {} as Disciplina;
            }
            columnIndex = 0;
            isCollectingHorario = false;
          }
        }
      },
      { decodeEntities: true }
    );

    parser.write(dadosHtml);
    parser.end();

    disciplinas = disciplinas.slice(1)
    return disciplinas;
  } catch (error) {
    console.error('Erro ao extrair disciplinas:', error);
    return null;
  }
};