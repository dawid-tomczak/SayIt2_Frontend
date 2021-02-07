import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChallengeDialogComponent } from './components/challenge-dialog/challenge-dialog.component';
import { ChallengesTableComponent } from './components/challenges-table/challenges-table.component';
import { MaterialModule } from '../material/material.module';
import { ChallengeUsersPipe } from './pipes/challenge-users.pipe';



@NgModule({
  declarations: [
    ChallengeDialogComponent,
    ChallengesTableComponent,
    ChallengeUsersPipe
  ],
  imports: [
    CommonModule,
    MaterialModule
  ],
  entryComponents: [ChallengeDialogComponent],
  exports: [
    ChallengeDialogComponent,
    ChallengesTableComponent
  ]
})
export class ChallengesModule { }
