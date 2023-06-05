import { HttpClient } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { NotificationService } from '../../dashboard/lib/notification-service';

@Component({
  selector: 'app-diallog-reserva-parte2',
  templateUrl: './diallog-reserva-parte2.component.html',
  styleUrls: ['./diallog-reserva-parte2.component.css']
})
export class DiallogReservaParte2Component {
  momentform!: FormGroup
  id!: number
  constructor(
    public dialogRef: MatDialogRef<DiallogReservaParte2Component>,
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
    console.log(this.id)
    this.momentform = new FormGroup({
      id_brinquedo: new FormControl(this.id, [Validators.required]),
      RA: new FormControl('', [Validators.required])
    })

  }
  openDialog() {
    this.dialogRef.close();
  }
 
  devolução(){
    this.http.post('http://localhost:3000/fazer/reserva', this.momentform.value).subscribe({next: (res: any) => {
      this.notifyService.showSuccess('', '')
      this.openDialog()
      setTimeout(() => {
        window.location.reload()
 
       }, 1000)

    }, error:(res: any) => {
      this.notifyService.showFail('', '')
    }})
    }

  onsubmit(){
    this.devolução()
  }
}
