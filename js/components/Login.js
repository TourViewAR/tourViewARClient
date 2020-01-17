import React, { Component } from "react";

import {
  StyleSheet,
  View,
  TextInput,
  Image,
  AppRegistry,
  PixelRatio,
  TouchableHighlight
} from "react-native";

import {
  Container,
  Header,
  Content,
  Form,
  Item,
  Input,
  Label,
  Title,
  Button,
  Text,
  Left,
  Body,
  Right
} from "native-base";

import { ViroVRSceneNavigator, ViroARSceneNavigator } from "react-viro";

import { connect } from "react-redux";

import { selectLogOutRender } from "../redux/render/render.selectors";

import { renderLogOut, renderLogIn } from "../redux/render/render.action";

import HomePage from "./Homepage";

import Signup from "./Signup";

import Profile from "./Profile";

import ImageUpload from "./ImagePicker";

var sharedProps = {
  apiKey: "API_KEY_HERE"
};

// Sets the default scene you want for AR and VR
var InitialARScene = require("../HelloWorldSceneAR.js");
// var InitialVRScene = require('./js/HelloWorldScene');

var UNSET = "UNSET";
var VR_NAVIGATOR_TYPE = "VR";
var AR_NAVIGATOR_TYPE = "AR";
var REACT_NATIVE_SIGNUP = "SIGNUP";
var REACT_NATIVE_HOME = "REACT_NATIVE_HOME";
var PROFILE = "PROFILE";
var IMAGE_UPLOAD = "IMAGE_UPLOAD";

// This determines which type of experience to launch in, or UNSET, if the user should
// be presented with a choice of AR or VR. By default, we offer the user a choice.
var defaultNavigatorType = UNSET;

class Login extends Component {
  constructor() {
    super();

    this.state = {
      navigatorType: defaultNavigatorType,
      sharedProps: sharedProps
    };
    this._getExperienceSelector = this._getExperienceSelector.bind(this);
    this._getARNavigator = this._getARNavigator.bind(this);
    // this._getVRNavigator = this._getVRNavigator.bind(this);
    this._getReactNativeHome = this._getReactNativeHome.bind(this);
    this._getExperienceButtonOnPress = this._getExperienceButtonOnPress.bind(this);
    this._getProfilePage = this._getProfilePage.bind(this);
    this._getImageUpload = this._getImageUpload.bind(this);
    this._exitViro = this._exitViro.bind(this);
  }
  render() {
    if (
      this.props.selectLogOutRender === true &&
      this.state.navigatorType === UNSET
    ) {
      return this._getExperienceSelector();
    // } else if (this.state.navigatorType == VR_NAVIGATOR_TYPE) {
    //   return this._getVRNavigator();
    } else if (this.state.navigatorType === AR_NAVIGATOR_TYPE) {
      return this._getARNavigator();
    } else if (this.props.selectLogOutRender === false) {
      return this._getReactNativeHome();
    } else if (this.state.navigatorType === REACT_NATIVE_SIGNUP) {
      return this._getReactNativeSignup();
    } else if (this.state.navigatorType === PROFILE) {
      return this._getProfilePage();
    } else if (this.state.navigatorType === IMAGE_UPLOAD) {
      return this._getImageUpload();
    }
  }

  // Presents the user with a choice of an AR or VR experience
  _getExperienceSelector() {
    return (
      <Container style={{ width: 400, height: 700 }}>
        <Header>
          <Left />
          <Body>
            <Title>Tour AR</Title>
          </Body>
          <Right />
        </Header>
        <View style={{ alignItems: "center" }}>
          <Image
            source={require("../res/logo.png")}
            style={{ height: 200, width: 200 }}
          />
        </View>
        <Content>
          <Form>
            <Item floatingLabel>
              <Label>Username</Label>
              <Input />
            </Item>
            <Item floatingLabel last>
              <Label>Password</Label>
              <Input />
            </Item>
          </Form>
          <Button block light style={{ marginBottom: 30 }}>
            <Text>Login</Text>
          </Button>
          <View style={styles.outer}>
            <TouchableHighlight
              style={styles.buttons}
              onPress={this._getExperienceButtonOnPress(AR_NAVIGATOR_TYPE)}
              underlayColor={"#68a0ff"}
            >
              <Text style={styles.buttonText}>AR</Text>
            </TouchableHighlight>

            <TouchableHighlight
              style={styles.buttons}
              onPress={this.props.renderLogIn}
              underlayColor={"#68a0dd"}
            >
              <Text style={styles.buttonText}>HOMEPAGE</Text>
            </TouchableHighlight>

            <TouchableHighlight
              style={styles.buttons}
              onPress={this._getExperienceButtonOnPress(REACT_NATIVE_SIGNUP)}
              underlayColor={"#68a0dd"}
            >
              <Text style={styles.buttonText}>SIGN UP</Text>
            </TouchableHighlight>

            <TouchableHighlight
              style={styles.buttons}
              onPress={this._getExperienceButtonOnPress(PROFILE)}
              underlayColor={"#68a0dd"}
            >
              <Text style={styles.buttonText}>PROFILE</Text>
            </TouchableHighlight>

            <TouchableHighlight
              style={styles.buttons}
              onPress={this._getExperienceButtonOnPress(IMAGE_UPLOAD)}
              underlayColor={"#68a0dd"}
            >
              <Text style={styles.buttonText}>UPLOAD IMAGE</Text>
            </TouchableHighlight>

          </View>
        </Content>
      </Container>
    );
  }

  // Returns the ViroARSceneNavigator which will start the AR experience
  _getARNavigator() {
    return (
      <ViroARSceneNavigator
        {...this.state.sharedProps}
        initialScene={{ scene: InitialARScene }}
      />
    );
  }

  // Returns the ViroSceneNavigator which will start the VR experience
  // _getVRNavigator() {
  //   return (
  //     <ViroVRSceneNavigator
  //       {...this.state.sharedProps}
  //       initialScene={{ scene: InitialVRScene }}
  //       onExitViro={this._exitViro}
  //     />
  //   );
  // }

  _getReactNativeHome() {
    return <HomePage />;
  }

  _getReactNativeSignup() {
    return <Signup />;
  }

  _getProfilePage() {
    return <Profile />;
  }

  _getImageUpload() {
    return <ImageUpload />;
  }

  // This function returns an anonymous/lambda function to be used
  // by the experience selector buttons
  _getExperienceButtonOnPress(navigatorType) {
    return () => {
      this.setState({
        navigatorType: navigatorType
      });
    };
  }

  // This function "exits" Viro by setting the navigatorType to UNSET.
  _exitViro() {
    this.setState({
      navigatorType: UNSET
    });
  }
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    backgroundColor: "#68a0dd"
  },
  logoContainer: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20
  },
  title: {
    color: "black",
    borderWidth: 1,
    borderColor: "#000",
    margin: 10
  },
  viroContainer: {
    // flex: 1,
    backgroundColor: "white"
  },
  outer: {
    // flex: 1,
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: "white"
  },
  homepage: {
    // flex: 1,
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: "#68a0cf"
  },
  titleText: {
    paddingTop: 30,
    paddingBottom: 20,
    color: "black",
    textAlign: "center",
    fontSize: 25
  },
  buttonText: {
    color: "#fff",
    textAlign: "center",
    fontSize: 15
  },
  buttons: {
    height: 60,
    width: 120,
    paddingTop: 20,
    paddingBottom: 20,
    marginTop: 10,
    marginBottom: 10,
    backgroundColor: "#68a0cf",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#fff"
  },
  exitButton: {
    height: 50,
    width: 100,
    paddingTop: 10,
    paddingBottom: 10,
    marginTop: 10,
    marginBottom: 10,
    backgroundColor: "#68a0cf",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#fff"
  }
});

const mapDispatchToProps = dispatch => {
  return {
    renderLogOut: () => dispatch(renderLogOut()),
    renderLogIn: () => dispatch(renderLogIn())
  };
};

const mapStateToProps = state => {
  return {
    selectLogOutRender: selectLogOutRender(state)
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);