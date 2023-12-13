import { createElement } from 'react';
import { useRestyle } from '@shopify/restyle';
import { transformExtendedPropsToStyles } from './util';
import { restyleFunctions, type RestyleProps } from './functions';

import type { RestyleExtendedProps } from './type';
import type { ComponentPropsWithRef, ElementType } from 'react';
import type { UtilsTheme } from '../../theme';

type FinalProps<T extends UtilsTheme> = Omit<RestyleProps<T>, 'alignItems' | 'flexDirection' | 'justifyContent' | 'borderRadius'> &
  RestyleExtendedProps;

export const createRestyleComponent = <E extends ElementType, T extends UtilsTheme>(
  Component: E,
  theme: T
): React.FC<FinalProps<T> & ComponentPropsWithRef<E>> => {
  return (props) => {
    const { fill, absoluteFill, fullSize, center, ...restyleProps } = props;

    const extendedStyles = transformExtendedPropsToStyles({ fill, absoluteFill, fullSize, center });

    const { style, ...rest } = useRestyle(restyleFunctions(theme) as any, restyleProps);

    const newStyle = [extendedStyles, style];
    const restyledProps = { style: newStyle, ...rest };

    const finalProps = { ...extendedStyles, ...restyledProps };

    return createElement(Component, finalProps);
  };
};
