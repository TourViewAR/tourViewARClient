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
  Title,
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
      <Container style={{ width: "100%", height: "100%" }}>
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
          <Body>
            <Title>Take Photo</Title>
          </Body>
          <Right />
        </Header>
        <View style={styles.container}>
          <Text style={{ color: "#3FA4F0" }} onPress={this.takePhoto}>
            Take Photo
          </Text>
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
// jshint esversion:6
import React from "react";
import { StyleSheet, View } from "react-native";
import ImagePicker from "react-native-image-picker";
import { connect } from "react-redux";
import { navigate } from "../redux/render/render.action";
import { selectTourName } from '../redux/tour/tour.selectors';
import {selectUserId} from '../redux/user/user.selectors';
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
import axios from "axios";
class UseCamera extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      canTakeImage: false
    }
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
        // alert(JSON.stringify(source));
        axios.get(`http://tourviewarserver.herokuapp.com/api/getpresignedurl/panoimages`)
        .then(results => {
          const xhr = new XMLHttpRequest();
          xhr.open(
            "PUT", results.data.presignedUrl
          );
          xhr.onreadystatechange = function() {
            if (xhr.readyState === 4) {
              console.log(xhr.status);
              console.log(xhr);
              if (xhr.status === 200) {
                alert("Image successfully uploaded to S3");
                axios.post(`http://tourviewarserver.herokuapp.com/api/newtour`, {
                  id: results.data.id,
                  img_url: results.data.publicUrl,
                  tour_name: this.props.selectTourName,
                  id_user: this.props.selectUserId
                })
                .then(results => this.props.navigate('CREATE_AR_SCENE'))
                .catch(err => alert(err));
              } else {
                alert("Error while sending the image to S3");
              }
            }
          };
          xhr.setRequestHeader("Content-Type", "image/jpeg");
          xhr.send({ uri: source.uri, type: "image/jpeg", name: "cameratest.jpg" });
        })
        .catch(err => alert(JSON.stringify(err)));
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
          <Text style={{ color: "#3FA4F0" }} onPress={this.takePhoto}>
            Take A Photo
          </Text>
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
​
const mapStateToProps = state => {
  return {
    selectTourName: selectTourName(state),
    selectUserId: selectUserId(state)
  };
};
​
const mapDispatchToProps = dispatch => {
  return {
    navigate: render => dispatch(navigate(render))
  };
};
​
export default connect(mapStateToProps, mapDispatchToProps)(UseCamera);