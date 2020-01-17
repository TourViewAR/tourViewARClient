import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  TouchableHighlight,
} from 'react-native';

class TourContainer extends Component {
  constructor() {
    super();
    this.state = {

    }
  }

  render() {
    return (
      <View style={localStyles.tourContainer}>
        <Image style={localStyles.icon} source={require("")} />
        <Text>{`experience name placeholder`}</Text>
        <Text>{`experience details placeholder`}</Text>
      </View>
    )
  }
}

var localStyles = styleSheet.create({
  tourContainer: {
    flex: 1,
    margin: 5,
    flexDirection: "column",
    alignItems: "left",
    borderStyle: "solid",
    borderColor: "black",
    borderRadius: 3,
    backgroundColor: "purple"
  },
  icon: {
    width: 50,
    height: 50
  }
});

export default TourContainer;