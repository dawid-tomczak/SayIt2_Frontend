import { ChallengeStatus } from "./challenge-status.enum";

export interface ChallengeMOCK {
  id: number;
  quizId: number;
  usersId: ({ name: string, id: string })[];
  status: ChallengeStatus;
}
