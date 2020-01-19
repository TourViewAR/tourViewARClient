import React, { Component } from "react";
import { Image, StyleSheet } from "react-native";
import { connect } from "react-redux";

import { selectNavigator } from "../redux/render/render.selectors";

import { navigate } from "../redux/render/render.action";
import {
  Container,
  Header,
  Content,
  Footer,
  FooterTab,
  Button,
  Text,
  Left,
  Body,
  Right,
  Title,
  View,
  Thumbnail,
  CardItem,
  Badge,
  Icon
} from "native-base";

// import Icon from "react-native-vector-icons/MaterialIcons";

// Icon.loadFont();

const HomePage = props => {
  return (
    <Container style={{ width: 400, height: 700 }}>
      <Header>
        <Left />
        <Body>
          <Title>Tour AR</Title>
        </Body>
        <Right />
      </Header>
      <Content>
        <View style={{ alignItems: "center", marginBottom: 30 }}>
          <Image
            style={{ width: 250, height: 250, justifyContent: "center" }}
            source={require("../res/logo.png")}
          ></Image>
        </View>
        <CardItem>
          <Body style={{ alignItems: "center" }}>
            <View>
              <Thumbnail large source={require("../res/aaron.jpg")}></Thumbnail>
              <Text>Senior Aaron</Text>
            </View>
          </Body>
        </CardItem>
        <View style={{ marginTop: 50 }}>
          <Button
            block light style={styles.button}
            onPress={() => {
              props.navigate("SEARCH_PAGE")
            }}
            full
          >
            <Text>Search</Text>
          </Button>
          <Button
            block
            style={styles.button}
            onPress={() => {
              props.navigate("LOGIN_PAGE");
            }}
            full
          >
            <Text>Log Out</Text>
          </Button>
        </View>
      </Content>
      <Footer style={{ height: 80 }}>
        <FooterTab>
          <Button
            vertical
            onPress={() => {
              props.navigate("PROFILE");
            }}
          >
            <Text>Profile</Text>
          </Button>
          <Button
            vertical
            onPress={() => {
              props.navigate("AR");
            }}
          >
            <Text>My AR</Text>
          </Button>
          <Button
            vertical
            onPress={() => {
              props.navigate("CAMERA_PAGE");
            }}
          >
            <Text>Take a Photo</Text>
          </Button>
          <Button
            vertical
            onPress={() => {
              props.navigate("IMAGE_UPLOAD");
            }}
          >
            <Text>Upload Image</Text>
          </Button>
        </FooterTab>
      </Footer>
    </Container>
  );
};

let styles = StyleSheet.create({
  buttonView: {
    flex: 1,
    justifyContent: "space-around"
  },
  button: { marginTop: 20, marginHorizontal: 50 }
});

const mapDispatchToProps = dispatch => {
  return { navigate: render => dispatch(navigate(render)) };
};

const mapStateToProps = state => {
  return {
    selectNavigator: selectNavigator(state)
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
