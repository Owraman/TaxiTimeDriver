import React, {
  Component
} from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  TouchableHighlight,
  Alert,
  Image
} from 'react-native';
import Modal from 'react-native-modalbox';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {
  StackNavigator,
} from 'react-navigation';
import CustomButton from './CustomButton'
import AndroidKeyboardAdjust from 'react-native-android-keyboard-adjust';

type Props = {};
export default class Login extends Component < Props > {
  constructor(props) {
    super(props);
//    this.hideSplashScreen = this.hideSplashScreen.bind(this);
    this.routToMainPage = this.routToMainPage.bind(this);
//    this.loginAsync = this.loginAsync.bind(this);
    this.validateLogin = this.validateLogin.bind(this);
    this.state = {
      userName: null,
      password: null,
      isLoading: false
    }
  }
  render() {
      return (
        <View style={styles.container}>
          <Modal
           style={[styles.modal, styles.modal1]}
           ref={"modal1"}
           swipeToClose={this.state.swipeToClose}
           position={"bottom"}
           >
             <Text style={styles.modalText}>لطفا نام کاربری را وارد نمایید</Text>
         </Modal>
         <Modal
          style={[styles.modal, styles.modal1]}
          ref={"modal2"}
          swipeToClose={this.state.swipeToClose}
          position={"bottom"}
          >
            <Text style={styles.modalText}>لطفا رمز عبور را وارد نمایید</Text>
         </Modal>
         <View style={{...StyleSheet.absoluteFillObject,backgroundColor:'white'}}></View>
         {/* <Image source={require('.././assets/origami_logo.png')}/> */}

          <View style={styles.inputsContainer}>
          <TextInput style={styles.inputs}
            placeholder={'نام کاربری'}
            placeholderTextColor={'gray'}
            onChangeText={(userName) => this.setState({userName})}
            value={this.state.userName}
            >
          </TextInput>
          <MaterialIcons
            style={styles.inputIcons}
          name = {'person'}
          color={'gray'}
          size={24}
          />
        </View>

          <View style={styles.inputsContainer}>

          <TextInput style={styles.inputs}
            placeholder={' رمز عبور'}
            placeholderTextColor={'gray'}
            onChangeText={(password) => this.setState({password})}
            value={this.state.password}
            secureTextEntry = {true}
            >
          </TextInput>
          <MaterialIcons
            style={styles.inputIcons}
          name = {'vpn-key'}
          color={'gray'}
          size={24}
          />
          </View>

            <CustomButton
            onSelect = {this.validateLogin.bind(this)}
            text={'ورود'}
            color = {'gray'}
            textColor = {'white'}
            underlay = {'#31347d'}
            />
            <Image style={{width:240,height:240}}
               source={require('.././assets/mapss.png')}
               overflow ={'hidden'}
             />

        </View>
      );
  }
  validateLogin() {
    if (this.state.userName !== null) {
      if (this.state.password !== null) {
        this.setState({
          isLoading: true
        })
        //  this.loginAsync();
        this.routToMainPage();
      } else {
        this.refs.modal2.open();
      }
    } else {
      this.refs.modal1.open();
    }
  }
  routToMainPage() {
    this.props.navigation.navigate('MainComponent')
  }
  componentDidMount() {
    AndroidKeyboardAdjust.setAdjustNothing();
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  inputs: {
    fontFamily: "font",
    flex: 1,
    margin: 16,
textAlign: 'right'

  },
  inputsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',


  },
  inputIcons: {
    marginRight: 16,
  },
  modal: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 150,

  },
  modalText: {
    fontFamily: "font",

  }

});
