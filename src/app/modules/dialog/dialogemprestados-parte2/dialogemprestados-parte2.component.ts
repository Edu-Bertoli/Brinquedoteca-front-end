import { HttpClient } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { NotificationService } from '../../dashboard/lib/notification-service';

@Component({
  selector: 'app-dialogemprestados-parte2',
  templateUrl: './dialogemprestados-parte2.component.html',
  styleUrls: ['./dialogemprestados-parte2.component.css']
})
export class DialogemprestadosParte2Component {
  momentform!: FormGroup
  id!: number
  constructor(
    public dialogRef: MatDialogRef<DialogemprestadosParte2Component>,
    @Inject(MAT_DIALOG_DATA) public data: any, private http: HttpClient , private notifyService: NotificationService
  ) {}
  POSTS: any[] = []
  POST: any[] = []

  showToastSuccess (){
    this.notifyService.showSuccessDevolução('', '')
  }
  showToastFail (){
    this.notifyService.showFailDevolução('', '')
  }
  get status(){
    return this.momentform.get('status')!
  }

  ngOnInit(): void {

    this.data
    this.POSTS.push(this.data)
    console.log(this.POSTS) 

    this.id = parseInt(this.data.event[0].event.id)

    this.momentform = new FormGroup({
      id_emprestimo: new FormControl(this.id, [Validators.required]),
      status: new FormControl('', [Validators.required]),
      Descricao: new FormControl(null)
    })

  }
  openDialog() {
    this.dialogRef.close();
  }
 
  devolução(){
    this.http.post('http://localhost:3000/fazer/devolucao', this.momentform.value).subscribe({next: (res: any) => {
      this.notifyService.showSuccessDevolução('', '')
      this.openDialog()
      setTimeout(() => {
        window.location.reload()
 
       }, 2500)

    }, error:(res: any) => {
      this.notifyService.showFailDevolução('', '')
    }})
    }

  onsubmit(){
    this.devolução()
  }
}
