import { Component } from '@angular/core';
import { JsonPipe } from '@angular/common';


@Component({
  selector: 'consulta',
  templateUrl: './Consulta.component.html',
  styleUrls: ['./Consulta.component.css']
})
export class ConsultaComponent {
  title = 'AtvCadastro';

  ngOnInit(): void {
  }
  
  pessoas: Object[] = JSON.parse(localStorage.getItem("pessoas")) || []

}

