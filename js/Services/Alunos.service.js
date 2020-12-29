class AlunosService {
  constructor () {
    this.alunos = []
    this.upDateAlunosFromLocalStorage()
  }

  add (aluno) {
    if (!aluno instanceof AlunoModel) {
      throw TypeError('aluno must be instance of AlunoModel')
    }
    this.alunos.push(aluno)
    this.upDateLocalStorage()
  }

  edit (aluno) {
    aluno.generateAvarege()
    this.upDateLocalStorage()
  }

  searchById (id) {
    return this.alunos.find(aluno => aluno._id === id)
  }

  search (name) {
    return this.alunos.filter(aluno => aluno.nome.indexOf(name) >= 0)
  }

  upDateLocalStorage () {
    const alunos = JSON.stringify(this.alunos)
    localStorage.setItem('alunos', alunos)
  }

  upDateAlunosFromLocalStorage () {
    const local = localStorage.getItem('alunos')
    if (local) {
      const alunos = JSON.parse(local)
      alunos.forEach(aluno => {
        this.add(new AlunoModel (aluno))
      })
    }
  }
}
