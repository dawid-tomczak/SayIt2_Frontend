import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule, MatCardModule, MatDividerModule, MatFormFieldModule, MatIconModule, MatInputModule, MatMenuModule, MatProgressBarModule, MatProgressSpinnerModule, MatRippleModule, MatSnackBarModule, MatToolbarModule } from '@angular/material';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
    MatRippleModule,
    MatProgressSpinnerModule,
    MatButtonModule,
    MatProgressBarModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatDividerModule,
    MatSnackBarModule
  ],
  exports: [
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
    MatRippleModule,
    MatProgressSpinnerModule,
    MatButtonModule,
    MatProgressBarModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatDividerModule,
    MatSnackBarModule
  ]
})
export class MaterialModule { }
