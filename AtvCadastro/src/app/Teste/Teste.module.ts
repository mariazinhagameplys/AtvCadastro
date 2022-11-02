import { NgModule } from '@angular/core';
import { TesteComponent } from './Teste.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    TesteComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule
  ],
  exports:[
    TesteComponent
  ]
  
})
export class TesteModule { }
