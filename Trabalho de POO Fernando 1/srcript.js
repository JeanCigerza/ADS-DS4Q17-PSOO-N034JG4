class Aluno_eu {
  inicializar(ra) {
    this.ra = ra;
  }

  obterRA() {
    return this.ra;
  }
}

class AlunoEspecial extends Aluno_eu {
  inicializar(ra, motivo) {
    super.inicializar(ra);
    this.motivo = motivo;
  }

  
  obterMotivo() {
    return this.motivo;
  }
}


const meuAluno = new Aluno_eu();
meuAluno.inicializar("N034JG4");
console.log("RA do aluno: " + meuAluno.obterRA());


const alunoEspecial = new AlunoEspecial();
alunoEspecial.inicializar("N034JG4", "MENSALISTA");
console.log("RA do aluno especial: " + alunoEspecial.obterRA());
console.log("Motivo do aluno especial: " + alunoEspecial.obterMotivo());