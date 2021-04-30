import { computed, makeAutoObservable, observable } from 'mobx';
import { defaultLanguage, messages } from '../i18n';
import { ELanguage } from '../i18n/types';

export default class CommonStore {
  public language: ELanguage = ELanguage.ZH_CN;

  public constructor() {
    makeAutoObservable(this, {
      language: observable,
      localMessages: computed,
    });
  }

  public setLanguage(text: ELanguage) {
    this.language = text;
  }

  get localMessages() {
    return messages[this.language] || messages[defaultLanguage];
  }
}
