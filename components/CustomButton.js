import React from 'react'
import {
  StyleSheet,
  TouchableHighlight,
  Text,
  View
} from 'react-native';
const CustomButton = ({
  text,
  color,
  underlay,
  textColor,
  onSelect = f => f
}) =>
(<View style={styles.inputsContainer}>
  <TouchableHighlight style={[styles.loginButton,{backgroundColor: color}]}
      onPress={()=>onSelect()}
      underlayColor={underlay}>
          {textColor !== null ?
            <Text style={[{color:textColor},styles.loginButtonText]} >{text}</Text>
            :
            <Text style={[{color:'white'},styles.loginButtonText]} >{text}</Text>
          }
  </TouchableHighlight>
</View>
)
const styles = StyleSheet.create({
  loginButton: {
    flex: 1,
    margin: 16,
    backgroundColor: 'steelblue',
    height: 36,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
    borderWidth: 1,
    borderColor: 'transparent',
    flexDirection: 'column'
  },
  loginButtonText: {
    fontFamily: "Samim",
    flex: 1,
    height: 36,
    justifyContent: 'center',
    flexDirection: 'column',
    marginTop: 2
  },
  inputsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default CustomButton
