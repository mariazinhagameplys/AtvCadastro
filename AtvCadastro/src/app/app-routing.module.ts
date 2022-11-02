import { Route, RouterModule } from "@angular/router";
import { CadastroComponent } from "./Cadastro/Cadastro.component";
import { ConsultaComponent } from "./Consulta/Consulta.component";
import { TesteComponent } from "./Teste/Teste.component";
import {NgModule} from "@angular/core";
import { AppComponent } from "./app.component";


const routes: Route[] = [
	{
		path: 'cadastro',
		component: CadastroComponent
	},
    {
		path: 'consulta',
		component: ConsultaComponent
	},
    {
		path: 'teste',
		component: TesteComponent
	}
]

@NgModule({
	imports: [
		RouterModule.forRoot(routes)
	],
	exports:[
		RouterModule	
	]
})

export class AppRoutingModule{} 

