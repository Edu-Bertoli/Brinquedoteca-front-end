import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EstoqueComponent } from './estoque.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule, MatIconRegistry } from '@angular/material/icon';
import { RouterModule } from '@angular/router';

@NgModule({
  providers: [MatIconRegistry],
  declarations: [],
  imports: [CommonModule, MatFormFieldModule, MatInputModule, MatIconModule, RouterModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
})
export class EstoqueModule {
  constructor(private Icon: MatIconRegistry) {
    this.Icon.addSvgIcon('search', 'search.svg');
  }
}
