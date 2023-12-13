import { type UtilsLayout } from './layout';
import { type UtilsTextVariants } from './font';
import { createTheme, createBox, createText, ThemeProvider, useTheme, type BaseTheme } from '@shopify/restyle';

export * from './font';
export * from './colors';
export * from './layout';
export * from './metrics';

type UtilsTheme<T extends UtilsTextVariants = UtilsTextVariants> = BaseTheme & {
  layout: UtilsLayout;
  textVariants: T;
};

export { type UtilsTheme, createBox, createText, createTheme, ThemeProvider, useTheme as useShopifyTheme };
