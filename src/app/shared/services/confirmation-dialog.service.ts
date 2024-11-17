import { Component, inject, Injectable } from '@angular/core';
import { MatDialog, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-confirmation-dialog',
  template: `
    <h2 mat-dialog-title>Deletar produto</h2>
  <mat-dialog-content>
    Tem certeza que deseja deletar esse produto?
  </mat-dialog-content>
  <mat-dialog-actions align="end">
    <button mat-button (click)="onNo()">Não</button>
    <button mat-raised-button color="accent" (click)="onYes()" cdkFocusInitial>Sim</button>
  </mat-dialog-actions>
  `,
  standalone: true,
  imports: [MatButtonModule, MatDialogModule],
})

export class ConfirmationDialogComponent {
  matDialogRef = inject(MatDialogRef);

  onNo(){
    this.matDialogRef.close(false);
  }

  onYes(){
    this.matDialogRef.close(true);
  }

}

@Injectable({
  providedIn: 'root'
})
export class ConfirmationDialogService {
  productsService: any;
  products: any;

  constructor() {}

  matDialog = inject(MatDialog);

  openDialog(): Observable<boolean> {
    return this.matDialog
    .open(ConfirmationDialogComponent)
    .afterClosed()
  }
}
