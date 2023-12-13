import { Alert, Platform } from 'react-native';

import { MMKV_KEY } from '../constants';
import { remove } from '../storage';

type TypesBase = 'bigint' | 'boolean' | 'function' | 'number' | 'object' | 'string' | 'symbol' | 'undefined';

export const onShowErrorBase = (msg: string) => {
  Alert.alert(msg);
};

export const onCheckType = (source: any, type: TypesBase): source is TypesBase => {
  return typeof source === type;
};

export const checkKeyInObject = (T: Record<string, unknown>, key: string) => {
  return Object.keys(T).includes(key);
};

export const propsToStyle = (arrStyle: Array<any>) => {
  return arrStyle.filter((x) => x !== undefined && !Object.values(x).some((v) => v === undefined));
};

export const execFunc = <Fn extends (...args: any[]) => any>(func?: Fn, ...args: Parameters<Fn>) => {
  if (onCheckType(func, 'function')) {
    func(...args);
  }
};

export const isIos = Platform.OS === 'ios';

export const logout = () => {
  // dispatch(appActions.logout());

  remove(MMKV_KEY.APP_TOKEN);
};

export const sleep = (ms: number = 1000) => new Promise((r) => setTimeout(r, ms));
