import {scaleSize} from 'utils';

const Spacing = {
  xstiny: scaleSize(1),
  tiny: scaleSize(2),
  tinyVariant: scaleSize(4),
  xs: scaleSize(6),
  xsVariant: scaleSize(8),
  xsVariant2: scaleSize(10),
  small: scaleSize(12),
  smallVariant: scaleSize(14),
  regular: scaleSize(16),
  medium: scaleSize(18),
  mediumLarge: scaleSize(19),
  mediumLarge1: scaleSize(20),
  large: scaleSize(24),
  mediumLarge2: scaleSize(25),
  largeVariant2: scaleSize(26),
  xlargeXVariant3: scaleSize(28),
  xlarge: scaleSize(30),
  xlargeVariant: scaleSize(34),
  xlargeXVariant: scaleSize(46),
  xxlarge: scaleSize(48),
  xxlarge1: scaleSize(50),
  xxlarge2: scaleSize(55),
  xxxlarge: scaleSize(72),
  largeVariant: scaleSize(96),
  largeVariant1: scaleSize(80),
  largeVariantPlus: scaleSize(140),
  ExtralargeVariantPlus: scaleSize(1500),
};

const Rounded = {
  tinyVariant: scaleSize(2),
  tiny: scaleSize(3),
  xsVariant: scaleSize(4),
  xs: scaleSize(5),
  small: scaleSize(8),
  smallVariant: scaleSize(10),
  smallVariant1: scaleSize(12),
  regular: scaleSize(16),
  regular1: scaleSize(18),
  medium: scaleSize(20),
  large: scaleSize(24),
  xlarge: scaleSize(30),
  xxlarge: scaleSize(70),
  xxlarge1: scaleSize(65),
  extra: scaleSize(100),
};

const Elevation = {
  regular: scaleSize(10),
};

const TabBarHeight = scaleSize(60);

const HeaderHeight = scaleSize(60);

const ButtonOffset = scaleSize(54);

const chatEntryViewHeight = scaleSize(62);

const NotificationBadge = {
  width: scaleSize(16),
  height: scaleSize(16),
  offsetTop: scaleSize(5),
  offsetRight: scaleSize(5),
  borderRadius: scaleSize(8),
};

const Border = {
  thin: scaleSize(1),
  thinVariant: scaleSize(1.5),
  medium: scaleSize(2),
  think: scaleSize(5),
};

const CarouselThumbnailWidth = scaleSize(48);

const SwipeHandle = {
  width: scaleSize(24),
  height: scaleSize(3),
  radius: scaleSize(3),
  offsetTop: scaleSize(15),
};

const ProfileAvatar = {
  width: scaleSize(70),
  height: scaleSize(70),
  radius: scaleSize(35),
};

const ChatAvatar = {
  width: scaleSize(55),
  height: scaleSize(55),
  radius: scaleSize(30),
};

export {
  Spacing,
  Rounded,
  TabBarHeight,
  Elevation,
  HeaderHeight,
  NotificationBadge,
  Border,
  ButtonOffset,
  CarouselThumbnailWidth,
  chatEntryViewHeight,
  SwipeHandle,
  ProfileAvatar,
  ChatAvatar,
};
