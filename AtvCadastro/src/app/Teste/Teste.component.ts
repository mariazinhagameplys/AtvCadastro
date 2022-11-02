import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'teste',
  templateUrl: './Teste.component.html',
  styleUrls: ['./Teste.component.css']
})
export class TesteComponent implements OnInit{
  title = 'AtvCadastro';
  riscado = 'underline';
  urlImagem= "https://i.pinimg.com/736x/e6/a5/58/e6a5587a9354da7f752825512deb0634.jpg";
  
  @Input()
  write="";
  
  ngOnInit() {
    
  }
}
