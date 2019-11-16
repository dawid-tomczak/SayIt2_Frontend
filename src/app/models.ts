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
