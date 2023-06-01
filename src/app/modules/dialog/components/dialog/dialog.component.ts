import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { WorkerService } from '../../../../components/children/admin/services/worker.service';
import { IDialogInterface } from '../../../../interfaces/dialog.interface';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss'],
})
export class DialogComponent {
  constructor(public dialogRef: MatDialogRef<DialogComponent>,
              @Inject(MAT_DIALOG_DATA) public data: IDialogInterface,
              private _workerService: WorkerService) {

  }

  public onNoClick(): void {
    this.dialogRef.close();
  }

  public onYesClick(): void {
    this.data.callbackMethod();
    this.dialogRef.close();
  }
}
