import React from "react";
import { TouchableHighlight, Image, } from "react-native";
import PropTypes from "prop-types";
import styles from "./styles";

export default function BackButton(props) {
  return (
    <TouchableHighlight onPress={props.onPress} style={styles.btnContainer} underlayColor="rgba(0,0,0,0.06)" hitSlop={{ top: 8, bottom: 8, left: 8, right: 8 }}>
      <Image source={require("../../../assets/icons/backArrow.png")} style={styles.btnIcon} />
    </TouchableHighlight>
  );
}

BackButton.propTypes = {
  onPress: PropTypes.func,
  source: PropTypes.number,
  title: PropTypes.string,
};
