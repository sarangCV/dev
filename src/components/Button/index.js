import React, {useState} from 'react';
import {
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import PropTypes from 'prop-types';
import Colors from 'constants/Colors';
import {Family, FontSize, IconSize} from 'constants/Fonts';
import ButtonTypes from 'constants/ButtonTypes';
import {_Button, _Text, _StatusBg} from 'styles';
import ButtonSizes from 'constants/ButtonSizes';
import {Input, Button as NewButton} from 'react-native-elements';
import {scaleSize} from 'utils/';
import {Rounded, Spacing} from 'constants/Layout';
import {WINDOW_HEIGHT} from 'utils/';

const Button = ({
  children,
  doAction,
  type,
  containerStyle,
  size = ButtonSizes.REGULAR,
  status,
  paymentStatus,
  disable,
  textStyle,
}) => {
  const [feedback, setFeedback] = useState(false);

  const setButtonStyle = () => {
    if (type === ButtonTypes.SECONDARY) {
      return styles(feedback, size, status).secondary;
    } else if (type === ButtonTypes.PLAIN) {
      return styles(feedback).plain;
    } else if (type === ButtonTypes.STATUS) {
      return styles(feedback, size, status, paymentStatus).status;
    } else if (type === ButtonTypes.STATUS_VARIANT) {
      return styles(feedback, size, status, paymentStatus).statusVariant;
    }
    return styles(feedback).primary;
  }

  const setTextStyle = () => {
    if (type === ButtonTypes.SECONDARY) {
      return styles(feedback, size).secondaryText;
    } else if (type === ButtonTypes.PLAIN) {
      return styles(feedback, size, status).plainText;
    } else if (type === ButtonTypes.STATUS) {
      return styles(feedback, size, status).statusText;
    } else if (type === ButtonTypes.STATUS_VARIANT) {
      return styles(feedback, size, status).statusVariantText;
    }
    return styles(feedback, size).primaryText;
  }

  return (
    <Pressable
      disable={disable}
      style={[setButtonStyle(), containerStyle]}
      onPress={doAction}
      onPressIn={() => {
        setFeedback(true);
      }}
      onPressOut={() => {
        setFeedback(false);
      }}>
      <Text style={[setTextStyle(), textStyle]}>{children}</Text>
    </Pressable>
  );
}

Button.propTypes = {
  children: PropTypes.string.isRequired,
};

const styles = (feedback, size, status, paymentStatus) =>
  StyleSheet.create({
    primary: {
      ..._Button(size),
      backgroundColor: feedback ? Colors.btnSkyBlueBg : Colors.btnSkyBlueBg,
    },
    primaryText: {
      ..._Text(
        size === ButtonSizes.REGULAR ? FontSize.medium : FontSize.xs,
        size === ButtonSizes.REGULAR ? Family.bold : Family.medium,
        Colors.textLight,
      ),
      textAlign: 'center',
    },
    secondaryText: {
      ..._Text(
        size === ButtonSizes.REGULAR ? FontSize.medium : FontSize.xs,
        size === ButtonSizes.REGULAR ? Family.bold : Family.medium,
        Colors.textLight,
      ),
      textAlign: 'center',
    },
    secondary: {
      ..._Button(size),
      backgroundColor:
        status === 'fine' ? Colors.bgGreenVariant : Colors.greenBg,
    },
    plain: {
      ..._Button(size),
      backgroundColor: feedback ? Colors.btnSkyBlueBg : Colors.btnSkyBlueBg,
    },
    plainText: {
      ..._Text(
        FontSize.medium,
        (status === 'no' && Family.bold) || Family.medium,
        (status === 'btCancel' && Colors.lightGrey) ||
          (status === 'no' && Colors.textDark) ||
          (status === 're-no' && Colors.primary) ||
          Colors.btnCancel,
      ),
      textAlign: 'center',
    },
    status: {
      ..._Button(size),
      ..._StatusBg(status, paymentStatus),
    },
    statusVariant: {
      ..._Button(size),
      ..._StatusBg(status, paymentStatus),
    },
    statusText: {
      ..._Text(
        size === ButtonSizes.SMALL ? FontSize.tiny : FontSize.medium,
        size === ButtonSizes.SMALL ? Family.medium : Family.bold,
        Colors.textLight,
      ),
      textAlign: 'center',
      // textTransform:
      //   status !== 'Infringement' && status !== 'Joint Inspection Report'
      //     ? 'uppercase'
      //     : 'none',
    },
    statusVariantText: {
      ..._Text(FontSize.regularVariant, Family.bold, Colors.textLight),
      textAlign: 'center',
    },
  });

export default Button;

const CheckBoxTouchableButton = props => {
  const {children, toggleChecked} = props;
  return (
    <TouchableOpacity
      onPress={() => {
        toggleChecked();
      }}>
      {children}
    </TouchableOpacity>
  );
}
const TouchableOpacityButton = props => {
  const {children, executefn} = props;
  return (
    <TouchableOpacity
      onPress={() => {
        executefn();
      }}>
      {children}
    </TouchableOpacity>
  );
}
const SignInButton = props => {
  const {title, pressEventFunction} = props;
  return (
    <NewButton
      title={title}
      buttonStyle={Styles.SignInButtonStyle}
      onPress={() => {
        pressEventFunction();
      }}
    />
  );
}

const ForgotPasswordButton = props => {
  const {pressEventFunction, children} = props;
  return (
    <TouchableWithoutFeedback
      onPress={() => {
        pressEventFunction();
      }}>
      {children}
    </TouchableWithoutFeedback>
  );
}
const SendButtonForgotPassword = props => {
  const {title, pressEventFunction} = props;
  return (
    <NewButton
      title={title}
      buttonStyle={Styles.sendButtonForgotPasswordStyle}
      titleStyle={Styles.sendButtonForgotPasswordTitleStyle}
      onPress={() => {
        pressEventFunction();
      }}
    />
  );
}

const TouchableWithoutFeedbackButton = props => {
  const {children, pressEventFunction} = props;
  return (
    <TouchableWithoutFeedback
      onPress={() => {
        pressEventFunction();
      }}>
      {children}
    </TouchableWithoutFeedback>
  );
}

const OverlayButton = props => {
  const {title, backgroundColor, onPressEvent} = props;
  return (
    <View>
      <NewButton
        title={title}
        buttonStyle={{
          height: WINDOW_HEIGHT * 0.075,
          backgroundColor: backgroundColor,
          borderRadius: Rounded.xs,
        }}
        titleStyle={{
          fontFamily: Family.robotoBold,
          fontSize: FontSize.smallVariantPlus,
        }}
        onPress={() => onPressEvent()}
      />
    </View>
  );
}
OverlayButton.defaultProps = {
  backgroundColor: Colors.notification_time_color,
};

const DialogOptionsButton = props => {
  const { title, titleColor, buttonColor, buttonClick } = props

  return (
    <View>
      <NewButton
        title={title}
        buttonStyle={{
          height: WINDOW_HEIGHT * 0.075,
          width: 80,
          backgroundColor: buttonColor,
          borderRadius: Rounded.xs,
        }}
        titleStyle={{
          fontFamily: Family.robotoBold,
          fontSize: FontSize.smallVariantPlus,
          color: titleColor,
        }}
        onPress={() => buttonClick()}
      />
    </View>
  );
}
const Styles = StyleSheet.create({
  SignInButtonStyle: {
    padding: scaleSize(13),
    borderRadius: scaleSize(14),
    marginBottom: scaleSize(10),
    fontFamily: Family.robotoBold,
    fontSize: FontSize.smallVariant,
    backgroundColor: Colors.loginButtonBgColor,
  },
  sendButtonForgotPasswordStyle: {
    padding: scaleSize(15),
    marginBottom: scaleSize(10),
    borderRadius: scaleSize(6),
    backgroundColor: Colors.notification_time_color,
  },
  sendButtonForgotPasswordTitleStyle: {
    fontSize: FontSize.smallVariantPlus,
  },
});

export {
  SignInButton,
  CheckBoxTouchableButton,
  SendButtonForgotPassword,
  ForgotPasswordButton,
  TouchableOpacityButton,
  TouchableWithoutFeedbackButton,
  OverlayButton,
  DialogOptionsButton,
};
