/*This is an example of Image Picker in React Native*/
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

class ImageUpload extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filePath: {}
    };
  }

  chooseFile = () => {
    // var options = {
    //   title: 'Select Image',
    //   customButtons: [
    //     { name: 'customOptionKey', title: 'Choose Photo from Custom Option' },
    //   ],
    //   storageOptions: {
    //     skipBackup: true,
    //     path: 'images',
    //   },
    // };
    const options = {};
    ImagePicker.launchImageLibrary(options, response => {
      console.log("Response = ", response);
      const xhr = new XMLHttpRequest();
      xhr.open(
        "PUT",
        "https://panoimages.s3.us-west-1.amazonaws.com/images/myimage.jpg?AWSAccessKeyId=AKIAS6MTBGTIAQR7KBXB&Content-Type=image%2Fjpeg&Expires=1579115713&Signature=xY92PSgj0T%2BLNQEhkZdihJQJqq0%3D"
      );
      xhr.onreadystatechange = function() {
        if (xhr.readyState === 4) {
          console.log(xhr.status);
          console.log(xhr);
          if (xhr.status === 200) {
            console.log("Image successfully uploaded to S3");
          } else {
            console.log("Error while sending the image to S3");
          }
        }
      };
      xhr.setRequestHeader("Content-Type", "image/jpeg");
      xhr.send({ uri: response.uri, type: "image/jpeg", name: "myimage.jpg" });
    });

    // You can also display the image using data:
    // let source = { uri: 'data:image/jpeg;base64,' + response.data };
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
          <Text onPress={this.chooseFile} style={{ color: "#3fa4f0" }}>
            Choose File
          </Text>
        </View>
      </Container>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    color: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});

const mapDispatchToProps = dispatch => {
  return {
    navigate: render => dispatch(navigate(render))
  };
};

export default connect(null, mapDispatchToProps)(ImageUpload);
