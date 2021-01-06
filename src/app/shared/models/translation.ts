import { Language } from "./language";

export interface Translation {
  text: string;
  langCodeId: number;
  langCode: string;
  languages: Language[];
}
