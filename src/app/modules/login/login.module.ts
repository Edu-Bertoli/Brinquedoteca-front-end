import { NgModule, forwardRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import {FormsModule, NG_VALUE_ACCESSOR, ReactiveFormsModule} from '@angular/forms'
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from './token-user.interceptor';

@NgModule({
  declarations: [
    LoginComponent,
    
    
  ],
  providers:[
    { 
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: forwardRef(() => LoginComponent),
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }
  
  ],
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
})
export class LoginModule {}
