import {
  opacity,
  shadow,
  position,
  composeRestyleFunctions,
  backgroundColorShorthand,
  type ShadowProps,
  type OpacityProps,
  type PositionProps,
  type BackgroundColorShorthandProps,
} from '@shopify/restyle';

import { layout, type LayoutProps } from './layout';
import { createRestyleBorder, type BorderProps } from './border';
import { createRestyleSpacing, type SpacingProps } from './spacing';
import type { UtilsTheme } from '../../../theme';

type RestyleProps<T extends UtilsTheme> = LayoutProps &
  SpacingProps<T> &
  BorderProps<T> &
  ShadowProps<T> &
  OpacityProps<T> &
  PositionProps<T> &
  BackgroundColorShorthandProps<T>;

const restyleFunctions = (theme: UtilsTheme) =>
  composeRestyleFunctions<UtilsTheme, RestyleProps<UtilsTheme> | any>([
    layout,
    shadow,
    opacity,
    position,
    backgroundColorShorthand,
    createRestyleBorder(theme),
    createRestyleSpacing(theme),
  ]);

export { restyleFunctions };
export type { RestyleProps };
