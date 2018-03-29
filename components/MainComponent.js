import React, {
  Component
} from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
} from 'react-native';

type Props = {};

export default class Login extends Component < Props > {
  //ConstructorSection__________________________________________________________
  render() {
    //ViewsSection______________________________________________________________

    return (
      <View style={styles.container}>
        <Text>this is MainComponent</Text>
      </View>
    );
  }
}
  //EventsSection_______________________________________________________________

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});
