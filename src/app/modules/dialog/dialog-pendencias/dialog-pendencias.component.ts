import { HttpClient } from '@angular/common/http';
import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { NotificationService } from '../../dashboard/lib/notification-service';
import { DialogPendenciasParte2Component } from '../dialog-pendencias-parte2/dialog-pendencias-parte2.component';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-dialog-pendencias',
  templateUrl: './dialog-pendencias.component.html',
  styleUrls: ['./dialog-pendencias.component.css']
})
export class DialogPendenciasComponent {
  momentform!: FormGroup
  id!: number
  constructor(
    public dialogRef: MatDialogRef<DialogPendenciasComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any, private http: HttpClient , private notifyService: NotificationService, private dialog: MatDialog
  ) {}
  POSTS: any[] = []
  POST: any[] = []

  showToastSuccess (){
    this.notifyService.showSuccessEmprestimo('', '')
  }
  showToastFail (){
    this.notifyService.showFailEmprestimo('', '')
  }
  ngOnInit(): void {

    this.data
    this.POSTS.push(this.data)
    const teste = this.data.event.id_estoque

    this.id = parseInt(teste)

    console.log(this.POSTS)
      
    
  }

  onclick(){
    this.dialog.open(DialogPendenciasParte2Component, {
      hasBackdrop: true,

      data:{
        event: this.POSTS
        
      }
    });
  }
  }

