import React, { Component } from "react";
import { ScrollView, View, StyleSheet, Image } from "react-native";
import TourContainer from "./TourContainer";
import { connect } from "react-redux";
import { navigate } from "../redux/render/render.action";
import { selectUserName, selectUserProfilePic, selectUserCreatedTours } from "../redux/user/user.selectors";
import {} from "../redux/tour/tour.selectors";
import {
  Container,
  Header,
  Content,
  Text,
  Left,
  Body,
  Right,
  Button,
  Title
} from "native-base";

class Profile extends Component {
  constructor() {
    super()
    this.state = {
      view: "MAIN"
    }
  }
  render() {
    if (this.state.view === "MAIN") {
      return (
        <Container style={localStyles.mainProfileContainer} >
          <Header>
            <Left>
            <Button hasText transparent onPress={() => { this.props.navigate("REACT_NATIVE_HOME"); }}>
                <Text>Back</Text>
              </Button>
            </Left>
            <Body>
              <Title >Profile</Title>
            </Body>
            <Right />
          </Header>
          <Content>
            <View>
            <Image
                style={localStyles.profileImgLarge}
                source={{
                  uri: `https://breakdownservices.s3.amazonaws.com/media/photos/20181/341794/9082DC9E-111F-4F77-9736BC2CCAFB0CA5.jpg`
                }}
              />
              <Text>{this.props.selectUserName}</Text>
              <Button hasText transparent onPress={() => { this.setState({view: "USER_TOURS"})}}>
                <Text>My Tours</Text>
              </Button>
              <Button hasText transparent onPress={() => {}}>
                <Text>Create Tour</Text>
              </Button>
            </View>
          </Content>
        </Container>
      )
    } else if (this.state.view === "USER_TOURS") {
      return (
        <Container style={localStyles.mainProfileContainer}>
          <Header>
            <Left>
              <Button hasText transparent onPress={() => { this.props.navigate("REACT_NATIVE_HOME"); }}>
                <Text>Back</Text>
              </Button>
            </Left>
            <Body>
              <Title>Profile</Title>
            </Body>
            <Right />
          </Header>
          <Content>
            <View>
              <Image
                style={localStyles.profileImgSmall}
                source={{
                  uri: `https://breakdownservices.s3.amazonaws.com/media/photos/20181/341794/9082DC9E-111F-4F77-9736BC2CCAFB0CA5.jpg`
                }}
              />
              <Text>{`${this.props.selectUserName}'s Tours`}</Text>
              <ScrollView style={localStyles.scrollViewContainer}>
                {this.props.selectUserCreatedTours.map((prop, i) => (
                <TourContainer key={i} tour={prop} />
              ))}
              </ScrollView>
            </View>
          </Content>
        </Container>
      );
    }
  }
};

const localStyles = StyleSheet.create({
  mainProfileContainer: {
    flex: 1,
    flexDirection: 'column',
    alignContent: 'center'
  },
  myToursContainer: {
    flex: 1,
    width: 400,
    height: 700
  },
  scrollViewContainer: {
    flex: 1,
    marginTop: 15
  },
  profileImgSmall: {
    marginTop: 30,
    width: 60,
    height: 60,
    borderRadius: 10
  },
  profileImgLarge: {
    marginTop: 30,
    width: 100,
    height: 100,
    borderRadius: 10
  }
});

const mapDispatchToProps = dispatch => {
  return {
    navigate: render => dispatch(navigate(render))
  };
};

const mapStateToProps = state => {
  return {
    selectUserProfilePic: selectUserProfilePic(state),
    selectUserName: selectUserName(state),
    selectUserCreatedTours: selectUserCreatedTours(state)
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
