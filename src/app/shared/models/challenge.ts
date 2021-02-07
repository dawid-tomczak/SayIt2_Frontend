export interface Challenge {
  id: number;
  quizId: number;
  users: Record<string, string>;
  usersId: string[];
}
