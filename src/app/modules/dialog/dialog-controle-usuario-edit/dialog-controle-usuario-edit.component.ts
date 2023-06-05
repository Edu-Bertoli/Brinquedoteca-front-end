import { HttpClient } from '@angular/common/http';
import { Component, Inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { NotificationService } from '../../dashboard/lib/notification-service';

@Component({
  selector: 'app-dialog-controle-usuario-edit',
  templateUrl: './dialog-controle-usuario-edit.component.html',
  styleUrls: ['./dialog-controle-usuario-edit.component.css']
})
export class DialogControleUsuarioEditComponent {

  momentform!: FormGroup
  id!: number
  constructor(
    public dialogRef: MatDialogRef<DialogControleUsuarioEditComponent>,
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
  get email(){
    return this.momentform.get('email')!
  }
  get cargo(){
    return this.momentform.get('cargo')!
  }
  ngOnInit(): void {

    this.data
    this.POSTS.push(this.data)
    console.log(this.POSTS) 
    this.id = parseInt(this.data.event[0].event.id)
    console.log(this.id)
    const a = this.data.event[0].event.email
    const b = this.data.event[0].event.Funcao
    this.momentform = new FormGroup({
      id: new FormControl(this.id, [Validators.required]),
      email: new FormControl(a),
      cargo: new FormControl(b)
    })
    console.log(a,b)
  }
  openDialog() {
    this.dialogRef.close();
  }
 
  devolução(){
    this.http.put('http://localhost:3000/User', this.momentform.value).subscribe({next: (res: any) => {
      this.notifyService.showSuccessUserChanges('', '')
      this.openDialog()
      console.log(res)
    }, error:(res: any) => {
      this.notifyService.showFailUserChanges('', '')
      console.log(res)
    }})
    }

  onsubmit(){
    this.devolução()
  }
}
