import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { DialogReservadosParte2Component } from '../dialog-reservados-parte2/dialog-reservados-parte2.component';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { NotificationService } from '../../dashboard/lib/notification-service';

@Component({
  selector: 'app-dialog-reservados',
  templateUrl: './dialog-reservados.component.html',
  styleUrls: ['./dialog-reservados.component.css']
})
export class DialogReservadosComponent {
  constructor(
    public dialogRef: MatDialogRef<DialogReservadosComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any, private dialog: MatDialog, private http: HttpClient, private notifyService: NotificationService
  ) {}
  POSTS: any[] = []
  POST: any[] = []
  id: any
  ra: any
  momentform!: FormGroup

  ngOnInit(): void {

    this.data
    this.POSTS.push(this.data)

   console.log(this.POSTS)
    this.id = this.data.event.id_estoque
    this.ra = this.data.event.RA
    this.momentform = new FormGroup({
      id_estoque: new FormControl(this.id, [Validators.required]),
      RA: new FormControl(this.ra, [Validators.required])
    })
  }
  openDialog() {
    this.dialogRef.close();
  }
  showToastSuccess (){
    this.notifyService.showSuccessEmprestimo('', '')
  }
  showToastFail (){
    this.notifyService.showFailEmprestimo('', '')
  }
  onclick() {
    this.http.post('http://localhost:3000/fazer/emprestimo', this.momentform.value).subscribe({next: (res: any) => {
       this.showToastSuccess()
       console.log(res)
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
