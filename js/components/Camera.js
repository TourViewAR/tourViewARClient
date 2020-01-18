// jshint esversion:6
import React from "react";
import { StyleSheet, View } from "react-native";
import ImagePicker from "react-native-image-picker";
import { connect } from "react-redux";
import { navigate } from "../redux/render/render.action";
import {
  Container,
  Header,
  Content,
  Text,
  Left,
  Body,
  Right,
  Button
} from "native-base";
class UseCamera extends React.Component {
  constructor(props) {
    super(props);
  }
  takePhoto = () => {
    let options = {
      storageOptions: {
        cameraRoll: true,
        skipBackup: true,
        path: "images"
      }
    };
    ImagePicker.launchCamera(options, response => {
      if (response.didCancel) {
        console.log("User cancelled image picker");
      } else if (response.error) {
        console.log("ImagePicker Error: ", response.error);
      } else {
        const source = { uri: response.uri };
        console.log("response", JSON.stringify(response));
        alert(JSON.stringify(source));
      }
    });
  };
  render() {
    return (
      <Container style={{ width: 400, height: 700 }}>
        <Header>
          <Left>
            <Button
              hasText
              transparent
              onPress={() => {
                this.props.navigate("REACT_NATIVE_HOME");
              }}
            >
              <Text>Back</Text>
            </Button>
          </Left>
          <Body />
          <Right />
        </Header>
        <View style={styles.container}>
          <Text
            title="Take A Photo"
            style={{ color: "#3fa4f0" }}
            onPress={this.takePhoto}
          ></Text>
        </View>
      </Container>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});

const mapDispatchToProps = dispatch => {
  return {
    navigate: render => dispatch(navigate(render))
  };
};

export default connect(null, mapDispatchToProps)(UseCamera);
