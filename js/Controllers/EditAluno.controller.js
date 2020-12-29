class EditAlunoController {
  constructor (model, view, service) {
    this.model = model
    this.view = view
    this.service = service
    this.view.render(model)
  }

  edit (aluno, nome) {
    aluno.nome = nome

    const notas = {}
    const materasRow = Array.from(this.view.container.querySelectorAll('[data-materia]'))
    console.log(materasRow)

    materasRow.forEach(row => {
      const notasRow = Array.from(row.querySelectorAll('[data-trimestre]'))
      console.log(notasRow)

      notas[row.getAttribute('data-materia')] = notasRow.map(nota => {
        if (!nota.value) { nota.value = 0 }
        return parseFloat(nota.value)
      })
    })
    console.log(notas)
    aluno.notas = notas

    this.service.edit(aluno)
  }
}
