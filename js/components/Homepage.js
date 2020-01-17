import React, { Component } from "react";
import { Image, StyleSheet } from "react-native";
import { connect } from "react-redux";
import { renderLogOut } from "../redux/render/render.action";
import { selectLogOutRender } from "../redux/render/render.selectors";
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
  CardItem
} from "native-base";

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
            style={{ width: 300, height: 150, justifyContent: "center" }}
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
          <Button block light style={styles.button}>
            <Text>Search</Text>
          </Button>
          <Button block light style={styles.button}>
            <Text>Profile</Text>
          </Button>
          <Button block light style={styles.button}>
            <Text>CREATE</Text>
          </Button>
        </View>
      </Content>
      <Footer>
        <FooterTab>
          <Button onPress={props.renderLogOut} full>
            <Text>Log Out</Text>
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
  return { renderLogOut: () => dispatch(renderLogOut()) };
};

const mapStateToProps = state => {
  return {
    selectLogOutRender: selectLogOutRender(state)
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);