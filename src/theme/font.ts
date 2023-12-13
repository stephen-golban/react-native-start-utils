import { StyleSheet } from 'react-native';
import { sizeScale } from '../library/scale';

type UtilsTextVariant = keyof UtilsTextVariants;
type UtilsTextVariants = ReturnType<typeof UTILS_TEXT_VARIANTS>;

const UTILS_TEXT_VARIANTS = (fontFamily?: string) => {
  const FF = fontFamily ? { fontFamily } : {};

  return StyleSheet.create({
    '10-reg': {
      ...FF,
      fontWeight: '400',
      fontSize: sizeScale(10),
    },
    '10-med': {
      ...FF,
      fontWeight: '500',
      fontSize: sizeScale(10),
    },
    '10-semi': {
      ...FF,
      fontWeight: '600',
      fontSize: sizeScale(10),
    },
    '10-bold': {
      ...FF,
      fontWeight: '700',
      fontSize: sizeScale(10),
    },

    '12-reg': {
      ...FF,
      fontWeight: '400',
      fontSize: sizeScale(12),
    },
    '12-med': {
      ...FF,
      fontWeight: '500',
      fontSize: sizeScale(12),
    },
    '12-semi': {
      ...FF,
      fontWeight: '600',
      fontSize: sizeScale(12),
    },
    '12-bold': {
      ...FF,
      fontWeight: '700',
      fontSize: sizeScale(12),
    },

    '14-reg': {
      ...FF,
      fontWeight: '400',
      fontSize: sizeScale(14),
    },
    '14-med': {
      ...FF,
      fontWeight: '500',
      fontSize: sizeScale(14),
    },
    '14-semi': {
      ...FF,
      fontWeight: '600',
      fontSize: sizeScale(14),
    },
    '14-bold': {
      ...FF,
      fontWeight: '700',
      fontSize: sizeScale(14),
    },

    '16-reg': {
      ...FF,
      fontWeight: '400',
      fontSize: sizeScale(16),
    },
    '16-med': {
      ...FF,
      fontWeight: '500',
      fontSize: sizeScale(16),
    },
    '16-semi': {
      ...FF,
      fontWeight: '600',
      fontSize: sizeScale(16),
    },
    '16-bold': {
      ...FF,
      fontWeight: '700',
      fontSize: sizeScale(16),
    },

    '18-reg': {
      ...FF,
      fontWeight: '400',
      fontSize: sizeScale(18),
    },
    '18-med': {
      ...FF,
      fontWeight: '500',
      fontSize: sizeScale(18),
    },
    '18-semi': {
      ...FF,
      fontWeight: '600',
      fontSize: sizeScale(18),
    },
    '18-bold': {
      ...FF,
      fontWeight: '700',
      fontSize: sizeScale(18),
    },

    '20-reg': {
      ...FF,
      fontWeight: '400',
      fontSize: sizeScale(20),
    },
    '20-med': {
      ...FF,
      fontWeight: '500',
      fontSize: sizeScale(20),
    },
    '20-semi': {
      ...FF,
      fontWeight: '600',
      fontSize: sizeScale(20),
    },
    '20-bold': {
      ...FF,
      fontWeight: '700',
      fontSize: sizeScale(20),
    },

    '24-reg': {
      ...FF,
      fontWeight: '400',
      fontSize: sizeScale(24),
    },
    '24-med': {
      ...FF,
      fontWeight: '500',
      fontSize: sizeScale(24),
    },
    '24-semi': {
      ...FF,
      fontWeight: '600',
      fontSize: sizeScale(24),
    },
    '24-bold': {
      ...FF,
      fontWeight: '700',
      fontSize: sizeScale(24),
    },

    '32-reg': {
      ...FF,
      fontWeight: '400',
      fontSize: sizeScale(32),
    },
    '32-med': {
      ...FF,
      fontWeight: '500',
      fontSize: sizeScale(32),
    },
    '32-semi': {
      ...FF,
      fontWeight: '600',
      fontSize: sizeScale(32),
    },
    '32-bold': {
      ...FF,
      fontWeight: '700',
      fontSize: sizeScale(32),
    },

    '40-reg': {
      ...FF,
      fontWeight: '400',
      fontSize: sizeScale(40),
    },
    '40-med': {
      ...FF,
      fontWeight: '500',
      fontSize: sizeScale(40),
    },
    '40-semi': {
      ...FF,
      fontWeight: '600',
      fontSize: sizeScale(40),
    },
    '40-bold': {
      ...FF,
      fontWeight: '700',
      fontSize: sizeScale(40),
    },

    '56-reg': {
      ...FF,
      fontWeight: '400',
      fontSize: sizeScale(56),
    },
    '56-med': {
      ...FF,
      fontWeight: '500',
      fontSize: sizeScale(56),
    },
    '56-semi': {
      ...FF,
      fontWeight: '600',
      fontSize: sizeScale(56),
    },
    '56-bold': {
      ...FF,
      fontWeight: '700',
      fontSize: sizeScale(56),
    },

    'defaults': {
      ...FF,
      fontWeight: '400',
      fontSize: sizeScale(14),
    },
  });
};

export { UTILS_TEXT_VARIANTS };

export type { UtilsTextVariant, UtilsTextVariants };
