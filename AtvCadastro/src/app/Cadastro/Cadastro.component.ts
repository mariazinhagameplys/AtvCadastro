import { Component } from '@angular/core';

@Component({
  selector: 'cadastro',
	templateUrl: './Cadastro.component.html',
  styleUrls: ['./Cadastro.component.css']
})


export class CadastroComponent{
  email: string;
  nome: string;
  estado: string;
  cidade: string;
  bairro:string;
  senha: string;
  idade: string;
  genero: string;
  imagem: string;

  craftingTable(){
     const pessoas: Object[] = JSON.parse(localStorage.getItem('pessoas')) || []
      
      pessoas.push({
        nome: this.nome,
        email: this.email,
        estado: this.estado,
        cidade: this.cidade,
        bairro: this.bairro,
        idade: this.idade,
        genero: this.genero,
        senha: this.senha,
        imagem: this.imagem
      })
      localStorage.setItem('pessoas', JSON.stringify(pessoas))
}
}