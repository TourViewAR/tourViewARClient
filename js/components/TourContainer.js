import React, { Component } from "react";
import {
  Text,
  View,
  StyleSheet,
  Image,
  TouchableHighlight,
  Button
} from "react-native";

import {
  ViroARSceneNavigator,
  Viro360Image,
  ViroAmbientLight,
  ViroARScene,
  ViroNode,
  ViroSpotLight,
  ViroUtils,
} from "react-viro";

var InfoElement = require("../custom_controls/InfoElement");
let polarToCartesian = ViroUtils.polarToCartesian;
var slutWindowCard = require("../res/infocard_slut.png");
var InitialARScene = require("../HelloWorldSceneAR.js");

class TourContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      navigator: "PROFILE"
    };
  }

  render() {
    if (this.state.navigator === "PROFILE") {
      return (
        <View style={localStyles.tourContainer}>
          <Image
            style={localStyles.icon}
            source={{
              uri:
                `${this.props.tour.pic_url}`
            }}
          />
          <Text>{`${this.props.tour.tour_name}`}</Text>
          <Button
            style={localStyles.button}
            onPress={() => this.setState({ navigator: "AR" })}
            title="VIEW EXPERIENCE"
          />
        </View>
      );
    } else if (this.state.navigator === "AR") {
      // this should pass upwards to the Profile container so that it overtakes the entire page instead of rendering in context of the other experience pods
      return <ViroARSceneNavigator initialScene={{ scene: InitialARScene }}/>
    }
  }
}

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
