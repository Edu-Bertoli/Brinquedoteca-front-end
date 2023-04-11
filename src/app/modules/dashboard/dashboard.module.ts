import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EstoqueComponent } from './submodules/estoque/estoque.component';



@NgModule({
  declarations: [
    EstoqueComponent
  ],
  imports: [
    CommonModule
  ]
})
export class DashboardModule { }
