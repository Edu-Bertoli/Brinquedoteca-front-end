import { HttpClient } from '@angular/common/http';
import { Component, Inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { NotificationService } from '../../dashboard/lib/notification-service';

@Component({
  selector: 'app-dialog-pendencias-parte2',
  templateUrl: './dialog-pendencias-parte2.component.html',
  styleUrls: ['./dialog-pendencias-parte2.component.css']
})
export class DialogPendenciasParte2Component {
  momentform!: FormGroup
  id!: number
  constructor(
    public dialogRef: MatDialogRef<DialogPendenciasParte2Component>,
    @Inject(MAT_DIALOG_DATA) public data: any, private http: HttpClient , private notifyService: NotificationService
  ) {}
  POSTS: any[] = []
  POST: any[] = []

  showToastSuccess (){
    this.notifyService.showSuccess('', '')
  }
  showToastFail (){
    this.notifyService.showFail('', '')
  }
  ngOnInit(): void {

    this.data
    this.POSTS.push(this.data)
    const teste = this.data.event[0].event.id

    this.id = parseInt(teste)
    console.log(this.id)
    console.log(this.POSTS)
      this.momentform = new FormGroup({
        id_estoque: new FormControl(this.id, [Validators.required]),
        status: new FormControl('', [Validators.required])
      })
    
  }
  openDialog() {
    this.dialogRef.close();
  }
 

  onsubmit(){
    console.log(this.momentform.value)
    this.http.post('http://localhost:3000/pendencias', this.momentform.value).subscribe({next: (res: any) => {
       this.showToastSuccess()
       this.openDialog()
       setTimeout(() => {
        window.location.reload()
 
       }, 1000)
    }, error:(res: any) => {
      this.showToastFail()
      console.log(res)
    }
  })
  }
}
