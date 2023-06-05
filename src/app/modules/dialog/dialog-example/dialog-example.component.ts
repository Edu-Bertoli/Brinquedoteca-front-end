import { Component, ViewChild, Inject, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Scrollbar } from 'smooth-scrollbar/scrollbar';
import { TableVirtualScrollDataSource } from 'ng-table-virtual-scroll';

@Component({
  selector: 'app-dialog-example',
  templateUrl: './dialog-example.component.html',
  styleUrls: ['./dialog-example.component.css'],
})
export class DialogExampleComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<DialogExampleComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
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
}
