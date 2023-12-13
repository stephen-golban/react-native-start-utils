const UTILS_SPACING = {
  zero: 0,
  xs: 4,
  sm: 8,
  md: 16,
  lg: 24,
  xl: 32,
  xxl: 48,
  xxxl: 64,
  huge: 80,
  xhuge: 96,
  xxhuge: 128,
};

const UTILS_RADII = { ...UTILS_SPACING, round: 999 };
const UTILS_Z_INDICES = { ...UTILS_SPACING, '-999': -999, 999: 999 };

export { UTILS_SPACING, UTILS_RADII, UTILS_Z_INDICES };
export type UtilsRadiis = typeof UTILS_RADII;
export type UtilsRadii = keyof UtilsRadiis | number;
export type UtilsSpacings = typeof UTILS_SPACING;
export type UtilsSpacing = keyof UtilsSpacings | number;
export type UtilsZIndices = typeof UTILS_Z_INDICES;
