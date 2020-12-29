class AlunosView {
  constructor (table, materias) {
    this.tableList = table
    this.tableHeader = this.tableList.querySelector('thead')
    this.tableBody = this.tableList.querySelector('tbody')
    this.materias = materias

    this.renderHeader()
  }

  // inserir no thead a propriedade nome e cada uma das materias
  renderHeader () {
    const htmlHeader = document.createElement('tr')
    htmlHeader.innerHTML = '<td>Nome</td>'

    const htmlHeaderMaterias = this.materias.map(materia => {
      return `<td>${materia}</td>`
    }).join('')

    htmlHeader.innerHTML += htmlHeaderMaterias
    this.tableHeader.appendChild(htmlHeader)
  }

  // percorrer cada aluno gerar um html para incluir no tbody
  render (alunos) {
    this.tableBody.innerHTML = ''
    alunos.forEach(aluno => {
      const htmlBody = document.createElement('tr')
      let htmlMedias = `<td><a href="edit.html?id=${aluno._id}">${aluno.nome}</a></td>`
      let encontrado = false

      this.materias.forEach(materia => {
        if (materia in aluno.notas) {
          encontrado = true
        }
      })

      if (encontrado) {
        this.materias.forEach(materia => {
          htmlMedias += `<td>
          ${aluno.media[materia] !== undefined
            ? aluno.media[materia]
            : `<a href= "edit.html?id=${aluno._id}">incluir nota </a>`
          }
          </td>`
        })
      } else {
        htmlMedias += `<td colspan="${this.materias.length}">
          <a href= "edit.html?id=${aluno._id}">incluir notas </a>
        </td>`
      }

      htmlBody.innerHTML = htmlMedias
      this.tableBody.appendChild(htmlBody)
    })
  }
}
