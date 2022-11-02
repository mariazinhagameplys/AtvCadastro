import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { CadastroComponent } from "./Cadastro/Cadastro.component";
import { ConsultaComponent } from "./Consulta/Consulta.component";
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { ConsultaModule } from './Consulta/Consulta.module';
import { CadastroModule } from './Cadastro/Cadastro.module';
import { FormsModule } from '@angular/forms';
import { TesteModule } from './Teste/Teste.module';
import { DivisorModule } from './Divisor/divisor.module';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule,
    AppRoutingModule,
    ConsultaModule,
    CadastroModule,
    DivisorModule,
    TesteModule    
  ],
  declarations: [
    AppComponent,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
