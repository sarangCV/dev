import {scaleFont, scaleSize} from 'utils/';
import {moderateScale} from 'utils/index';

const Family = {
  light: 'OpenSans-Light', //300
  regular: 'OpenSans-Regular', //400
  medium: 'OpenSans-Medium', //500
  semibold: 'OpenSans-Semibold', //600
  bold: 'OpenSans-Bold', //700
  extrabold: 'OpenSans-ExtraBold', //800
  aldoFont: 'aldo_pc',
  robotoBold: 'Roboto-Bold',
  robotoBoldItalic: 'Roboto-BoldItalic',
  robotoRegular: 'Roboto-Regular',
  robotoMedium: 'Roboto-Medium',
  robotoThin: 'Roboto-Thin',
  robotoBlack: 'Roboto-Black',
  robotoLight: 'Roboto-Light',

  montserratBold: 'Montserrat-Bold',
  montserratLight: 'Montserrat-Light',
  montserratRegular: 'Montserrat-Regular',
  montserratSemiBold: 'Montserrat-SemiBold',
  montserratMedium: 'Montserrat-Medium',

  dmsansBold: 'DMSans-Bold',
  dmsansMedium: 'DMSans-Medium',
  dmsansRegular: 'DMSans-Regular',

  popinsRegular: 'Poppins-Regular',
  poppinsMedium: 'Poppins-Medium',
};

const FontSize = {
  tiny: scaleFont(8),
  tinyVariant: scaleFont(9),
  xs: scaleFont(10),
  small: scaleFont(11),
  smallVariant: scaleFont(12),
  smallVariantPlus: scaleSize(13),
  regularVariant: scaleSize(14),
  regular: scaleFont(15),
  regularVariantPlus: scaleFont(16),
  medium: scaleFont(17),
  mediumVariant: scaleFont(18),
  large: scaleFont(20),
  largeVariant12: scaleFont(22),
  largeVariant: scaleFont(24),
  largeVariantPlus: scaleFont(26),
  largeVariantXs: scaleFont(28),
  xlarge: scaleFont(30),
  xxlarge: scaleFont(42),
  xxlargeVariant: scaleFont(50),
};

const FontSizeModerate = {
  tiny: moderateScale(8),
  tinyVariant: moderateScale(9),
  xs: moderateScale(10),
  small: moderateScale(11),
  smallVariant: moderateScale(12),
  smallVariantPlus: moderateScale(13),
  regularVariant: moderateScale(14),
  regular: moderateScale(15),
  regularVariantPlus: moderateScale(16),
  medium: moderateScale(17),
  mediumVariant: moderateScale(18),
  large: moderateScale(20),
  largeVariant12: moderateScale(22),
  largeVariant: moderateScale(24),
  largeVariantPlus: moderateScale(26),
  largeVariantXs: moderateScale(28),
  xlarge: moderateScale(30),
  xxlarge: moderateScale(42),
  xxlargeVariant: moderateScale(50),
};

const IconSize = {
  regular: scaleFont(12),
  regularVariant: scaleFont(14),
  medium: scaleFont(16),
  mediumVariant: scaleSize(18),
  mediumVariant1: scaleSize(22),
  large: scaleFont(24),
  largeVariant1: scaleFont(28),
  largeVariant: scaleFont(32),
  xlarge: scaleSize(42),
  xlargeplus: scaleSize(65),
  xxlarge: scaleFont(72),
  xxlargeVarriant: scaleFont(80),
};

const Leading = {
  small: scaleSize(12),
  regular: scaleSize(16),
  large: scaleSize(24),
};

export {Family, FontSize, IconSize, Leading, FontSizeModerate};
