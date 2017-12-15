import React from 'react'
import {
  Text,
  View,
  TouchableOpacity,
  Animated
} from 'react-native';

export const SkipButton = ({
  styles, onSkipBtnClick, isSkipBtnShow,
  leftTextColor,
  skipBtnLabel,
  skipFadeOpacity
}) => {
  return (
    <View style={styles.btnContainer}>
    <Animated.View style={[styles.full, { height: 0 }, {
      opacity: skipFadeOpacity,
      transform: [{
        translateX: skipFadeOpacity.interpolate({
          inputRange: [0, 1],
          outputRange: [0, 15],
        }),
      }],
    }]}
    >
      <TouchableOpacity
        style={styles.full}
        onPress={isSkipBtnShow ? () => onSkipBtnClick() : null}>
        <Text style={[styles.controllText, { color: leftTextColor, paddingLeft:0, paddingRight:20 }]}>
          {skipBtnLabel}
        </Text>
      </TouchableOpacity>
    </Animated.View>
    </View>
  )
}

export default SkipButton
