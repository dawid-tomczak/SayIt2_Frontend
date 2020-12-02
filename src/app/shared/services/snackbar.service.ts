import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material';

@Injectable({
  providedIn: 'root'
})
export class SnackbarService {

  constructor(private snackBar: MatSnackBar) { }

  showSnackbar(message: string, durationInMs: number = 4000) {
    this.snackBar.open(message, null, {
      duration: durationInMs
    });
  }
}
