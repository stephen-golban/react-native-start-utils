import { getKeys } from '../util';
import { type ViewStyle } from 'react-native';
import { type UtilsTheme } from './../../../theme';
import { createRestyleFunction, type RNStyleProperty } from '@shopify/restyle';

const borderProperties = {
  bw: 'borderWidth',
  bs: 'borderStyle',
  btw: 'borderTopWidth',
  blw: 'borderLeftWidth',
  brw: 'borderRightWidth',
  bbw: 'borderBottomWidth',
} as const;

const borderRadiusProperties = {
  br: 'borderRadius',
  btlr: 'borderTopLeftRadius',
  btrr: 'borderTopRightRadius',
  bblr: 'borderBottomLeftRadius',
  bbrr: 'borderBottomRightRadius',
} as const;

const borderColorProperties = {
  bc: 'borderColor',
  btc: 'borderTopColor',
  blc: 'borderLeftColor',
  brc: 'borderRightColor',
  bbc: 'borderBottomColor',
} as const;

export const createRestyleBorder = <T extends UtilsTheme>(theme: T) => [
  ...getKeys(borderProperties).map((property) => {
    const styleProperty = borderProperties[property] as RNStyleProperty;
    return createRestyleFunction({
      property,
      styleProperty,
    });
  }),
  ...getKeys(borderColorProperties).map((property) => {
    const styleProperty = borderColorProperties[property] as RNStyleProperty;

    return createRestyleFunction({
      property,
      styleProperty,
      themeKey: 'colors',
    });
  }),
  ...getKeys(borderRadiusProperties).map((property) => {
    const styleProperty = borderRadiusProperties[property] as RNStyleProperty;

    return createRestyleFunction({
      property,
      styleProperty,
      transform: ({ value }: any) => (typeof value === 'number' ? value : theme.borderRadii![value as keyof typeof theme.borderRadii]),
    });
  }),
];

export type BorderProps<T extends UtilsTheme> = {
  [Key in keyof typeof borderProperties]?: ViewStyle[(typeof borderProperties)[Key]];
} & {
  [Key in keyof typeof borderColorProperties]?: keyof T['colors'];
} & {
  [Key in keyof typeof borderRadiusProperties]?: keyof T['borderRadii'];
};
