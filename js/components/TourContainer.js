import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  TouchableHighlight,
  Button
} from 'react-native';

import { ViroARSceneNavigator } from "react-viro";

var InitialARScene = require("../HelloWorldSceneAR.js");


class TourContainer extends Component {
  constructor() {
    super()
    this.state = {
      navigator: "PROFILE",
    }
  }

  render() {
    if (this.state.navigator === "PROFILE") {
      return (
        <View style={localStyles.tourContainer} >
          <Image style={localStyles.icon} source={{uri: "https://cdn.villaway.com/202303/images/55397fcfe4b08b8483a50794/tn_90lpzueywp_202303.jpg"}} />
          <Text>{`experience name placeholder`}</Text>
          <Text>{`experience details placeholder`}</Text>
          <Button style={localStyles.button} onPress={() => this.setState({navigator: "AR"})} title="VIEW EXPERIENCE" />
        </View>
      );
    } else if (this.state.navigator === "AR") { // this should pass upwards to the Profile container so that it overtakes the entire page instead of rendering in context of the other experience pods
      return (
        <ViroARSceneNavigator
          initialScene={{ scene: InitialARScene }}
        />
      );
    }
  }
};


var localStyles = StyleSheet.create({
  tourContainer: {
    flex: 1,
    width: 300,
    margin: 5,
    flexDirection: "column",
    alignItems: "flex-start",
    borderStyle: "solid",
    borderColor: "black",
    borderRadius: 3,
    backgroundColor: "#d3d3d3"
  },
  icon: {
    width: 50,
    height: 50
  },
  button: {
    marginTop: 5
  }
});

export default TourContainer;