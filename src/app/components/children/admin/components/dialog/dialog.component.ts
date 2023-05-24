import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { WorkerComponent } from '../../pages/worker/worker.component';
import { MatButtonModule } from '@angular/material/button';
import { WorkerService } from '../../services/worker.service';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss'],
  standalone: true,
  imports: [MatDialogModule, MatButtonModule],
})
export class DialogComponent {
  constructor(public dialogRef: MatDialogRef<WorkerComponent>,
              @Inject(MAT_DIALOG_DATA) public data: string,
              private _workerService: WorkerService) {

  }

  public onNoClick(): void {
    this.dialogRef.close();
  }

  public onYesClick(): void {
    this._workerService.deleteWorkerFromDB(this.data);
    this.dialogRef.close();
  }
}
