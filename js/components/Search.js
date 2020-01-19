import React, { Component } from "react";
import { ScrollView, View, StyleSheet, Image, TextInput } from "react-native";

import TourContainer from "./TourContainer";
import { connect } from "react-redux";
import { navigate } from "../redux/render/render.action";
import {
  Container,
  Header,
  Content,
  InputGroup,
  Input,
  Icon,
  Text,
  Left,
  Body,
  Right,
  Button,
} from "native-base";

const Search = props => {
  return (
    <Container style={{ width: 400, height: 700 }}>
      <Header searchBar rounded>
        <Left>
          <Button hasText transparent onPress={() => {props.navigate("REACT_NATIVE_HOME");}}>
            <Text>Back</Text>
          </Button>
        </Left>
        {/* <TextInput placeholder="Type here to search" /> */}
      </Header>
      <Content>
        <View>
          {/* <Text>SEARCH</Text> */}
          <TextInput style={{ height: 40, width: 400, borderColor: 'gray', borderWidth: 1, borderRadius: 4 }} placeholder="Touch here to search" />
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

export default connect(null, mapDispatchToProps)(Search);
