import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { EmitterService } from 'src/app/shared/emitter.service';

@Component({
  selector: 'app-dialog-response-saved',
  templateUrl: './dialog-response-saved.component.html',
  styleUrls: ['./dialog-response-saved.component.css']
})
export class DialogResponseSavedComponent implements OnInit {

  constructor(
    public emitterService: EmitterService,
    private dialogRef: MatDialogRef<DialogResponseSavedComponent>,
  ) { }

  ngOnInit(): void {
  }

  agree() {
    this.emitterService.isLanguageChanged.emit(true);
    this.dialogRef.close();
  }

}
