import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { CadastroComponent } from './Cadastro.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    CadastroComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule
  ],
  exports: [
    CadastroComponent
  ]
})
export class CadastroModule { }


