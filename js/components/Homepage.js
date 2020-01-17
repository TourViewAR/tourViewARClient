import React, { Component } from "react";
import { View, Image, StyleSheet } from "react-native";
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
  Title
} from "native-base";

export default class HomePage extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <Container>
        <Header>
          <Left />
          <Body>
            <Title>Tour AR</Title>
          </Body>
          <Right />
        </Header>
        <Content>
          <View style={{ alignItems: "center" }}>
            <Image
              style={{ width: 300, height: 200, justifyContent: "center" }}
              source={require("../res/logo.png")}
            ></Image>
          </View>
          <View style={{ alignContent: "space-around" }}>
            <Button block light>
              <Text>Search</Text>
            </Button>
            <Button block light>
              <Text>Profile</Text>
            </Button>
            <Button block light>
              <Text>Create</Text>
            </Button>
          </View>
        </Content>
        <Footer>
          <FooterTab>
            <Button>
              <Text>Apps</Text>
            </Button>
            <Button>
              <Text>Camera</Text>
            </Button>
            <Button>
              <Text>Navigate</Text>
            </Button>
            <Button>
              <Text>Contact</Text>
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    );
  }
}

let styles = StyleSheet.create({
  buttonView: {
    flex: 1,
    justifyContent: "space-around"
  },
  button: {
    width: 200,
    height: 100,
    color: "#f194ff"
  }
});
