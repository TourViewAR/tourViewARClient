import React from "react";
import { ScrollView, View, StyleSheet, Image } from "react-native";

import TourContainer from "./TourContainer";
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
  Button,
  Title
} from "native-base";

import {
  selectUserName,
  selectUserProfilePic
} from "../redux/user/user.selectors";

const Profile = props => {
  return (
    <Container style={{ width: "100%", height: "100%" }}>
      <Header>
        <Left>
          <Button
            hasText
            transparent
            onPress={() => {
              props.navigate("REACT_NATIVE_HOME");
            }}
          >
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
            style={localStyles.profileImg}
            source={{
              uri: `https://breakdownservices.s3.amazonaws.com/media/photos/20181/341794/9082DC9E-111F-4F77-9736BC2CCAFB0CA5.jpg`
            }}
          />
          <Text>{props.selectUserName}</Text>
          <ScrollView style={localStyles.container}>
            {/* {props.map((prop, i) => (
            <TourContainer key={i} tour={prop} />
          ))} */}
            <TourContainer />
            <TourContainer />
            <TourContainer />
            <TourContainer />
            <TourContainer />
            <TourContainer />
            <TourContainer />
            <TourContainer />
            <TourContainer />
            <TourContainer />
            <TourContainer />
            <TourContainer />
            <TourContainer />
          </ScrollView>
        </View>
      </Content>
    </Container>
  );
};

const localStyles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 15
  },
  profileImg: {
    marginTop: 30,
    width: 60,
    height: 60,
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
    selectUserName: selectUserName(state)
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
