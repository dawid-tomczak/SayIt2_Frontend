import { Pipe, PipeTransform } from '@angular/core';
import { Challenge } from 'src/app/shared/models/challenge';

@Pipe({
  name: 'challengeUsers'
})
export class ChallengeUsersPipe implements PipeTransform {

  transform(value: Challenge): string {
    const firstUserId = value.usersId[0];
    const secondUserId = value.usersId[1];

    return `${value.users[firstUserId]} VS ${value.users[secondUserId]}`;
  }
}
