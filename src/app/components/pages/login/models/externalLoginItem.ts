export type ExternalLoginItemType = 'Facebook' | 'Google' | 'Microsoft';

export class ExternalLoginItem {
  readonly backgroundColor: string;
  readonly iconPath: string;
  // to add in constructor switch case when implemented
  readonly apiUrl = 'not implemented';

  constructor(readonly type: ExternalLoginItemType) {
    switch (type) {
      case 'Facebook': {
        this.backgroundColor = '#1878F3';
        break;
      }
      case 'Microsoft': {
        this.backgroundColor = '#545454';
        break;
      }
      case 'Google': {
        this.backgroundColor = '#F4F6F5';
        break;
      }
      default: {
        this.backgroundColor = '#FFFFFF';
      }
    }

    this.iconPath = `assets/svg/external-logos/${type}.svg`;
  }
}
