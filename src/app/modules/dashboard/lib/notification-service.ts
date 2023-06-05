import { Injectable } from '@angular/core';
import { NgToastService } from 'ng-angular-popup';
  
import { ToastrService } from 'ngx-toastr';

const options= { positionClass:'toast-custom' };
  
@Injectable({
  providedIn: 'root'
})


export class NotificationService {
  
  
  constructor(private toastr: NgToastService) {
    
   }
  
    showSuccess(message: string | undefined, title: string | undefined){
      this.toastr.success({detail:"SUCESSO!",summary:'Criado com sucesso',duration:5000})
  }
  
  showSuccessEmprestimo(message: string | undefined, title: string | undefined){
    this.toastr.success({detail:"EMPRÉSTIMO FEITO!",summary:'Emprestado com sucesso',duration:5000})
}
  showFail(message: string | undefined, title: string | undefined){
    this.toastr.error({detail:"ERRO!",summary:'Não foi criado com sucesso',duration:5000 })
}
showFailEmprestimo(message: string | undefined, title: string | undefined){
  this.toastr.error({detail:"EMPRÉSTIMO NÃO FEITO!",summary:'Não foi possivel realizar o empréstimo',duration:5000 })
}
showSuccessDevolução(message: string | undefined, title: string | undefined){
  this.toastr.success({detail:"DEVOLUÇÃO FEITA!",summary:'Devolvido com sucesso',duration:5000})
}
showFailDevolução(message: string | undefined, title: string | undefined){
  this.toastr.error({detail:"DEVOLUÇÃO NÃO FEITA!",summary:'Se atente aos campos',duration:5000 })
}

showSuccessUser(message: string | undefined, title: string | undefined){
  this.toastr.success({detail:"USUÁRIO CRIADO!",summary:'Criado com sucesso',duration:5000})
}
showFailUser(message: string | undefined, title: string | undefined){
  this.toastr.error({detail:"USUÁRIO NÃO CRIADO!",summary:'Não foi possivel criar',duration:5000 })
}

showSuccessUserChanges(message: string | undefined, title: string | undefined){
  this.toastr.success({detail:"USUÁRIO ATUALIZADO!",summary:'Atualizado com sucesso',duration:5000})
}
showFailUserChanges(message: string | undefined, title: string | undefined){
  this.toastr.error({detail:"USUÁRIO NÃO ATUALIZADO !",summary:'Não foi possivel atualizar',duration:5000 })
}
}