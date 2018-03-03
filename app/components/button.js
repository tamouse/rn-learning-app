import PropTypes from "prop-types";
import React from "react";
import { capitalize as C } from "lodash";
import { Text, TouchableOpacity, StyleSheet } from "react-native";

export default class Button extends React.Component {
  static propTypes = {
    ...TouchableOpacity.propTypes,
    accessibilityLabel: PropTypes.string,
    disabled: PropTypes.bool,
    buttonType: PropTypes.string
  };

  render() {
    let buttonProps = {
      accessible: true,
      accessibilityLabel: this.props.accessibilityLabel,
      accessibilityTraits: "button",
      accessibilityComponentType: "button",
      disabled: this.props.disabled
    };

    if (!this.props.disabled) {
      [
        "onPress",
        "onPressIn",
        "onPressOut",
        "onLongPress",
        "delayPressIn",
        "delayPressOut",
        "delayLongPress"
      ].map(prop => {
        buttonProps[prop] = this.props[prop];
      });
    }

    let buttonStyle = [
      styles.button,
      this.props.disabled
        ? styles.buttonDisabled
        : styles[`button${C(this.props.buttonType)}`]
    ];

    let textStyle = [
      styles.text,
      this.props.disabled ? styles.textDisabled : null
    ];

    return (
      <TouchableOpacity {...buttonProps} style={buttonStyle}>
        <Text style={textStyle}>
          {this.props.children.length > 0 ? this.props.children : `Click Me`}
        </Text>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  text: {
    color: `#fafafa`,
    fontSize: 17,
    fontWeight: `bold`,
    textAlign: `center`
  },
  textDisabled: {
    color: `#aaa`
  },
  button: {
    flexDirection: `row`,
    justifyContent: `space-between`,
    alignItems: `center`,
    borderRadius: 5,
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: 25,
    paddingRight: 25
  },
  buttonPrimary: {
    backgroundColor: `#007bff`
  },
  buttonSuccess: {
    backgroundColor: `#28a745`
  },
  buttonDisabled: {
    backgroundColor: `#6c757d`
  }
});
