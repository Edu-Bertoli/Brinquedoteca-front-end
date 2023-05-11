import { NgModule, forwardRef } from "@angular/core";

import { CommonModule } from "@angular/common";
import { FormsModule, NG_VALUE_ACCESSOR, ReactiveFormsModule } from "@angular/forms";
import { CadastroAlunoComponent } from "./cadastro-aluno.component";



@NgModule({
    declarations:[
    ],
    imports: [CommonModule, FormsModule, ReactiveFormsModule],
    providers:[
        { 
            provide: NG_VALUE_ACCESSOR,
            multi: true,
            useExisting: forwardRef(() => CadastroAlunoComponent),
          }
    ]
})


export class cadastroAlunoModule{

}
