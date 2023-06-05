import { NgModule, forwardRef } from "@angular/core";
import { CadastroUsuarioComponent } from "./cadastro-usuario.component";
import { CommonModule } from "@angular/common";
import { FormsModule, NG_VALUE_ACCESSOR, ReactiveFormsModule } from "@angular/forms";



@NgModule({
    declarations:[
    ],
    
    imports: [CommonModule, FormsModule, ReactiveFormsModule, ],
    providers:[
        { 
            provide: NG_VALUE_ACCESSOR,
            multi: true,
            useExisting: forwardRef(() => CadastroUsuarioComponent),
          }
    ]
})


export class cadastroUsuarioModule{

}