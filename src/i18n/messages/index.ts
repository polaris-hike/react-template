import { ELanguage } from '../types';
import zhCN from './zh-CN.json';

export type ILocalMessages = typeof zhCN;

const messages: Record<ELanguage, ILocalMessages> = {
  [ELanguage.ZH_CN]: { ...zhCN },
};

export default messages;
