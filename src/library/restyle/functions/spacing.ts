import { getKeys } from '../util';
import type { UtilsTheme } from '../../../theme';
import { createRestyleFunction, type RNStyleProperty } from '@shopify/restyle';

const properties = {
  m: 'margin',
  mt: 'marginTop',
  mr: 'marginRight',
  mb: 'marginBottom',
  ml: 'marginLeft',
  mx: 'marginHorizontal',
  my: 'marginVertical',
  ms: 'marginStart',
  me: 'marginEnd',
  p: 'padding',
  pt: 'paddingTop',
  pr: 'paddingRight',
  pb: 'paddingBottom',
  pl: 'paddingLeft',
  px: 'paddingHorizontal',
  py: 'paddingVertical',
  ps: 'paddingStart',
  pe: 'paddingEnd',
  g: 'gap',
  rg: 'rowGap',
  cg: 'columnGap',
};

export const createRestyleSpacing = <T extends UtilsTheme>(theme: T) => {
  return getKeys(properties).map((property) => {
    const styleProperty = properties[property] as RNStyleProperty;

    return createRestyleFunction({
      property,
      styleProperty,
      transform: ({ value }: any) => (typeof value === 'number' ? value : theme.spacing[value as keyof typeof theme.spacing]),
    });
  });
};

export type SpacingProps<T extends UtilsTheme> = {
  [Key in keyof typeof properties]?: keyof T['spacing'];
};
