import { NgModule } from "@angular/core";
import { ControleUsuarioComponent } from "./controle-usuario.component";
import { RouterModule } from "@angular/router";
import { AppComponent } from "src/app/app.component";
import { CommonModule } from "@angular/common";



@NgModule({
    declarations:[
    ],
    imports:[
    RouterModule,
    CommonModule
    ],
     bootstrap:[AppComponent]

})


export class ControleUsuarioModule{

}