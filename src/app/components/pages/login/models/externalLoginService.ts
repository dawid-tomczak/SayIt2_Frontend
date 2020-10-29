export enum ExternalLoginItemType {
  Facebook,
  Google,
  Microsoft
}

export class ExternalLoginItem {
  readonly backgroundColor: string;
  readonly iconPath: string;
  // to add in constructor switch case when implemented
  readonly apiUrl = 'not implemented';
  readonly altText: string;

  constructor(readonly type: ExternalLoginItemType) {
    switch (+type) {
      case ExternalLoginItemType.Facebook: {
        this.backgroundColor = '#1878F3';
        break;
      }
      case ExternalLoginItemType.Microsoft: {
        this.backgroundColor = '#545454';
        break;
      }
      case ExternalLoginItemType.Google: {
        this.backgroundColor = '#F4F6F5';
        break;
      }
      default: {
        this.backgroundColor = '#FFFFFF';
      }
    }

    this.iconPath = `assets/svg/external-logos/${ExternalLoginItemType[type]}.svg`;
    this.altText = ExternalLoginItemType[type];
  }
}
