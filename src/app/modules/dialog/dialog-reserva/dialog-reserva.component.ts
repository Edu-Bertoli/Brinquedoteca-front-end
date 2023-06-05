import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { DiallogReservaParte2Component } from '../diallog-reserva-parte2/diallog-reserva-parte2.component';
enum FormaDeEntrada {
  Doacao = 'Doação'
}
@Component({
  selector: 'app-dialog-reserva',
  templateUrl: './dialog-reserva.component.html',
  styleUrls: ['./dialog-reserva.component.css']
})
export class DialogReservaComponent implements OnInit{
  constructor(
    public dialogRef: MatDialogRef<DialogReservaComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any, private dialog: MatDialog
  ) {}
  POSTS: any[] = []
  POST: any[] = []

  ngOnInit(): void {

    this.data
    this.POSTS.push(this.data)
   console.log(this.POSTS)
    
 
  }
  openDialog() {
    this.dialogRef.close();
  }

  onclick(){
    
    this.dialog.open(DiallogReservaParte2Component, {
      hasBackdrop: true,

      data:{
        event: this.POSTS
        
      }
    });
  }
  }

