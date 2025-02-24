import {Platform, StyleSheet} from 'react-native';
import Colors from 'constants/Colors';
import {Family, FontSize} from 'constants/Fonts';
import {
  Spacing,
  Rounded,
  Elevation,
  HeaderHeight,
  NotificationBadge,
  ButtonOffset,
  Border,
} from 'constants/Layout';
import {scaleSize} from 'utils/index';
import ButtonSizes from 'constants/ButtonSizes';
import HeaderTypes from 'constants/HeaderTypes';

const _Button = (size = ButtonSizes.REGULAR) => ({
  paddingHorizontal: Spacing.small,
  paddingVertical: size === ButtonSizes.REGULAR ? Spacing.small : Spacing.xs,
  borderRadius: size === ButtonSizes.REGULAR ? Rounded.small : Rounded.xs,
  justifyContent: 'center',
});

const _Text = (size, font, color) => ({
  fontSize: size,
  color: color,
  fontFamily: font,
});

const _TextInput = type => ({
  fontFamily: Family.regular,
  // fontSize: FontSize.medium,
  fontSize: FontSize.smallVariantPlus,
  color: Colors.textDark,
  paddingVertical: Spacing.xs,
  paddingHorizontal: Spacing.xsVariant2,
  ..._Border(type),
});

const _Border = type => ({
  borderWidth:
    (type === 'ins-remark' && scaleSize(0.3)) ||
    (type !== 'ins-remark' && Border.medium),
  borderRadius: Rounded.xs,
});

const _PlaceholderTextColor = (inverted = false) =>
  inverted ? Colors.placeholderTextColorInverted : Colors.placeholderTextColor;

const _Wrapper = {
  backgroundColor: Colors.CardBackgroundColor,
  flex: 1,
};

const _Container = (horizontalOffset = false) => ({
  backgroundColor: Colors.white,
  borderTopLeftRadius: Rounded.xlarge,
  borderTopRightRadius: Rounded.xlarge,
  flex: 1,
  paddingTop: Spacing.xlarge,
  paddingHorizontal: horizontalOffset ? Spacing.large : 0,
});

const _SceneTitle = (inverted = false) => ({
  ..._Text(
    FontSize.large,
    Family.regular,
    inverted ? Colors.textLight : Colors.textDark,
  ),
});

// const _Shadow = {
//   backgroundColor: Colors.cardBg,
//   ...Platform.select({
//     ios: {
//       shadowColor: Colors.shadowColor,
//       shadowOffset: {
//         width: 0,
//         height: scaleSize(10),
//       },
//       shadowOpacity: 0.1,
//       shadowRadius: scaleSize(5),
//     },
//     android: {
//       shadowColor: Colors.androidShadowColor,
//       elevation: Elevation.regular,
//     },
//   }),
// };

const _Badge = {
  borderRadius: Rounded.xs,
  alignSelf: 'flex-start',
  paddingHorizontal: Spacing.xs,
  paddingVertical: Spacing.tiny,
};

const _Row = {
  flexDirection: 'row',
};

const _Column = {
  flexDirection: 'column',
};

const _Fill = {
  flex: 1,
};

const _Header = headerType => ({
  height: HeaderHeight,
  backgroundColor: Colors.headerBg,
  paddingHorizontal:
    headerType === HeaderTypes.TAB_VIEW ? Spacing.large : Spacing.regular,
  alignItems: 'center',
});

const _NotificationBadge = {
  width: NotificationBadge.width,
  height: NotificationBadge.height,
  borderRadius: NotificationBadge.borderRadius,
};

const _InputIcon = {
  position: 'absolute',
  top: 0,
  left: 0,
  bottom: 0,
  alignItems: 'center',
  justifyContent: 'center',
};

const _CalendarItem = {
  width: scaleSize(28),
  height: scaleSize(28),
  alignItems: 'center',
  justifyContent: 'center',
  marginBottom: Spacing.small,
  marginHorizontal: Spacing.xs,
  borderWidth: Border.thin,
  borderRadius: Rounded.xsVariant,
};

const commonStyles = StyleSheet.create({
  marg_bt_10: {
    marginBottom: scaleSize(5),
  },
  column: {
    ..._Column,
  },
  row: {
    ..._Row,
    alignItems: 'center',
  },
  row_top: {
    ..._Row,
    alignItems: 'flex-start',
  },
  middle: {
    alignItems: 'center',
  },
  fill: {
    ..._Fill,
  },
  error: {
    color: Colors.errorText,
    fontSize: FontSize.smallVariant,
    paddingTop: Spacing.tinyVariant,
  },
  errorInverted: {
    color: Colors.errorTextInverted,
    fontSize: FontSize.smallVariant,
    paddingTop: Spacing.tinyVariant,
  },
  ratingText: {
    ..._Text(FontSize.small, Family.semibold, Colors.badgeSecondaryText),
    marginRight: Spacing.tiny,
  },
  ratingContainerStyle: {
    ..._Row,
    alignItems: 'center',
  },
  ratingTextLg: {
    ..._Text(FontSize.regular, Family.semibold, Colors.badgeSecondaryText),
    marginRight: Spacing.tinyVariant,
  },
  buttonOffset: {
    height: ButtonOffset,
    width: '100%',
  },
  floatingButtonContainer: {
    position: 'absolute',
    left: Spacing.regular,
    bottom: Spacing.regular,
    right: Spacing.regular,
  },
  container: {
    ..._Fill,
    backgroundColor: '#fff',
  },
});

const _StatusBg = (status, paymentStatus) => ({
  backgroundColor:
    (status === 'Vacant Ready' && Colors.bgLightGreen) ||
    (status === 'Reserved' && Colors.bgLightRed) ||
    (status === 'Occupied' && Colors.bgLightBlue) ||
    (status === 'Vacant Dirty' && Colors.bgYellow) ||
    (status === 'Out Of Order' && Colors.bgGrey) ||
    (status === 'Expired' && Colors.btnDangerBg) ||
    (status === 'post' && Colors.bgLightSkyBlue) ||
    (status === 'Verified' && Colors.bgLightGreen) ||
    (status === 'Onboarded' && Colors.bgLightBlue) ||
    (status === 'Pending' && Colors.bgPending) ||
    (status === 'Safe Keeping' && Colors.bgLightGreen) ||
    (status === 'Returned' && Colors.bgLightBlue) ||
    (status === 'p-Returned' && Colors.bgLightRed) ||
    (status === 'Signature Pending' && Colors.bgLightRed) ||
    (status === 'Report Generated' && Colors.bgLightGreen) ||
    (status === 'Run' && Colors.bgLightBlue) ||
    (status === 'Joint Inspection Report' && Colors.bgLightGreen) ||
    (status === 'Infringement' && paymentStatus === 'true'
      ? Colors.bgLightGreen
      : Colors.bgLightRed),
});

// TODO: Common styles for subscribers component
const subscriberStyles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: '#F4F6F9',
    marginBottom: 10,
    borderRadius: scaleSize(10),
  },
  innerWrapperTop: {
    flexDirection: 'row',
    paddingTop: scaleSize(16),
    paddingBottom: scaleSize(14),
    paddingHorizontal: scaleSize(16),
  },
  detailsWrapper: {
    flexDirection: 'row',
    // backgroundColor: 'red',
    flex: 3,
  },
  profileImageWrapper: {
    marginRight: scaleSize(15),
    // backgroundColor: 'pink',
  },
  profileImage: {height: scaleSize(50), width: scaleSize(50)},
  userDetailWrapper: {
    justifyContent: 'center',
    // backgroundColor: 'yellow',
    flex: 2,
  },
  userNameWrapper: {
    flexDirection: 'row',
    marginBottom: scaleSize(5),
    alignItems: 'center',
  },
  userText: {
    fontFamily: Family.semibold,
    fontSize: FontSize.regular,
    color: Colors.userText,
    marginRight: scaleSize(3),
  },
  userSubText: {
    color: Colors.userSubText,
    fontFamily: Family.semibold,
    fontSize: FontSize.xs,
  },
  userOnlineIcon: {
    height: scaleSize(6),
    width: scaleSize(6),
  },
  actionWrapper: {
    flex: 1.3,
    // backgroundColor: 'green',
    alignItems: 'flex-end',
  },
  threeDots: {
    height: scaleSize(16),
    width: scaleSize(16),
  },
  flashAction: {
    paddingHorizontal: scaleSize(9),
    paddingVertical: scaleSize(5),
    marginTop: scaleSize(14),
    backgroundColor: Colors.white,
    borderRadius: 5,
  },
  flashText: {
    fontFamily: Family.semibold,
    fontSize: FontSize.small,
    color: Colors.userText,
  },
  innerWrapperBottom: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: scaleSize(14),
    paddingHorizontal: scaleSize(12),
    borderTopWidth: 1,
    borderTopColor: '#DCDCDC',
    borderStyle: 'dashed',
    // backgroundColor: 'red',
  },
  expirydateWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  expiryDateLabel: {
    fontFamily: Family.regular,
    fontSize: FontSize.small,
    color: Colors.userText,
    paddingRight: scaleSize(2),
  },
  expiryDate: {
    fontFamily: Family.semibold,
    fontSize: FontSize.xs,
    color: Colors.userText,
  },
  date: {
    height: scaleSize(14),
    width: scaleSize(14),
    marginRight: scaleSize(4),
  },
  planStatus: {
    backgroundColor: '#555555',
    alignSelf: 'flex-start',
    paddingHorizontal: scaleSize(8),
    paddingVertical: scaleSize(3),
    borderRadius: 4,
  },
  planStatusText: {
    fontFamily: Family.bold,
    fontSize: FontSize.xs,
    color: Colors.white,
  },
});

// TODO: Subscriber mobile verification style
const verificationStyle = StyleSheet.create({
  bgWrapper: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  bg: {
    width: scaleSize(240),
    height: scaleSize(240),
    resizeMode: 'contain',
  },
  body: {
    marginTop: scaleSize(20),
    flex: 1,
    zIndex: 999,
    // backgroundColor: 'red',
    alignItems: 'center',
  },
  layoutBg: {
    position: 'relative',
    backgroundColor: '#F5F6F8',
    // flex: 1,
    borderTopLeftRadius: scaleSize(550),
    borderTopRightRadius: scaleSize(550),
    height: 350,
    width: 550,
    overflow: 'hidden',
    marginLeft: scaleSize(-180),
    // alignItems: 'flex-end',
  },
  content: {
    position: 'absolute',
    top: 50,
    left: 20,
    // marginLeft: 185,
    // backgroundColor: 'red',
    width: scaleSize(320),
  },
  titleWrapper: {
    paddingRight: scaleSize(65),
    marginBottom: scaleSize(10),
  },
  title: {
    ..._Text(FontSize.largeVariant12, Family.semibold, Colors.cancelBtn),
  },
  description: {
    ..._Text(FontSize.smallVariant, Family.regular, Colors.description_1),
    marginTop: scaleSize(5),
    opacity: 0.7,
    lineHeight: 22,
  },
  inputWrapper: {marginTop: scaleSize(10)},
  resendWrapper: {
    flexDirection: 'row',
    // backgroundColor: 'red',
    justifyContent: 'center',
    marginTop: scaleSize(20),
  },
  resendLabel: {
    ..._Text(FontSize.smallVariant, Family.regular, Colors.label3),
  },
  resendText: {
    ..._Text(FontSize.smallVariant, Family.regular, Colors.text_3),
    marginLeft: scaleSize(3),
  },
});

export {
  _Button,
  _Text,
  _TextInput,
  _Border,
  _PlaceholderTextColor,
  _Wrapper,
  _Container,
  _SceneTitle,
  _StatusBg,
  _Row,
  _Badge,
  _Fill,
  _Header,
  _NotificationBadge,
  _InputIcon,
  _CalendarItem,
  commonStyles,
  _Column,
  subscriberStyles,
  verificationStyle,
};
