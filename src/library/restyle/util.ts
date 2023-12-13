import { UTILS_LAYOUT } from '../../theme';
import type { RestyleExtendedProps } from './type';
import type { RNStyleProperty } from '@shopify/restyle';

export const getKeys = <T extends { [key: string]: any }>(object: T) => Object.keys(object) as (keyof T)[];

export const transformExtendedPropsToStyles = (props: RestyleExtendedProps) => {
  return [
    props.fill && UTILS_LAYOUT.fill,
    props.center && UTILS_LAYOUT.center,
    props.fullSize && UTILS_LAYOUT.fullSize,
    props.absoluteFill && UTILS_LAYOUT.absoluteFill,
    props.around && UTILS_LAYOUT.justifyContentAround,
    props.between && UTILS_LAYOUT.justifyContentBetween,
  ];
};

export const transformProperty = <T extends Record<string, any>>(obj: T, property: keyof T) => {
  const value = obj[property];

  const styleProperty = (typeof value === 'boolean' ? property : value) as RNStyleProperty;
  return { property, styleProperty };
};
