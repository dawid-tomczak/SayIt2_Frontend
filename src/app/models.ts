export class Translation {
  id: number;
  translationEN: string;
  translationPL: string;
  meaningEN: string;
  meaningPL: string;
  categoryId: number;
}

export class Category {
  id: number;
  name: string;
  materialIconName: string;
}

export class QuizQuestion {
  id: number;
  translationId: number;
  learningTypeId: number;
  option1: string;
  option2: string;
  option3: string;
}

export class LearningType {
  id: number;
  name: string;
  description: string;
}

export class BackgroundShape {
  name: 'rectangle' | 'circle' | 'line' | 'zig';
  positionPercentageX: number;
  positionPercentageY: number;
  scaleThreshold: number;
  xMovingPercentageThreshold: number;
  yMovingPercentageThreshold: number;
  rotate: number;
  color: 'purple' | 'pink' | 'green';
}
