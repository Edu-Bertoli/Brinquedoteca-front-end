import { HttpClient } from '@angular/common/http';
import { Component, Inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { NotificationService } from '../../dashboard/lib/notification-service';
import { DialogmanutencaoParte22Component } from '../dialogmanutencao-parte22/dialogmanutencao-parte22.component';

@Component({
  selector: 'app-dialog-manutencao',
  templateUrl: './dialog-manutencao.component.html',
  styleUrls: ['./dialog-manutencao.component.css']
})
export class DialogManutencaoComponent {
  momentform!: FormGroup
  id!: number
  constructor(
    public dialogRef: MatDialogRef<DialogManutencaoComponent>,
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
      this.momentform = new FormGroup({
        id_estoque: new FormControl(this.id, [Validators.required]),
        RA: new FormControl('', [Validators.required])
      })
    
  }
  openDialog() {
    this.dialogRef.close();
  }
  onclick() {
 
    this.dialog.open(DialogmanutencaoParte22Component, {
      hasBackdrop: true,

      data:{
        event: this.POSTS
        
      }
    });
  }
}
