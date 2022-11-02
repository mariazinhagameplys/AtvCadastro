import { NgModule } from '@angular/core';
import { ConsultaComponent } from './Consulta.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    ConsultaComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule
  ],
  exports:[
    ConsultaComponent
  ]
  
})
export class ConsultaModule { }
