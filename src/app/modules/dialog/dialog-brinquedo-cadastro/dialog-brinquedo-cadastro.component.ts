import { HttpClient } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { NotificationService } from '../../dashboard/lib/notification-service';

@Component({
  selector: 'app-dialog-brinquedo-cadastro',
  templateUrl: './dialog-brinquedo-cadastro.component.html',
  styleUrls: ['./dialog-brinquedo-cadastro.component.css']
})
export class DialogBrinquedoCadastroComponent implements OnInit {
  momentform!: FormGroup
  id!: number
  constructor(
    public dialogRef: MatDialogRef<DialogBrinquedoCadastroComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any, private http: HttpClient , private notifyService: NotificationService
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
 

  onsubmit(){
    console.log(this.momentform.value)
    this.http.post('http://localhost:3000/fazer/emprestimo', this.momentform.value).subscribe({next: (res: any) => {
       this.showToastSuccess()
       this.openDialog()
       setTimeout(() => {
        window.location.reload()
 
       }, 1000)
    }, error:(res: any) => {
      this.showToastFail()
    }
  })
  }
}
