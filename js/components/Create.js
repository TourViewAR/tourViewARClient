<<<<<<< Updated upstream
import React, { Component, useState } from "react";
=======
import React, { useState, useCallback } from "react";
import axios from "axios";
>>>>>>> Stashed changes
import { ScrollView, View, StyleSheet, Image } from "react-native";
​
import TourContainer from "./TourContainer";
import { connect } from "react-redux";
import { navigate } from "../redux/render/render.action";
<<<<<<< Updated upstream
import { setTourName } from '../redux/tour/tour.action';
​
=======
import { setTourName } from "../redux/tour/tour.action";
import { selectTourName } from "../redux/tour/tour.selectors";
import { selectUserId } from "../redux/user/user.selectors";

>>>>>>> Stashed changes
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
​
const Create = props => {
<<<<<<< Updated upstream
    [tourname, settourname] = useState('');
=======
  let [tourname, tournamestate] = useState("");

  // const moveToOptions = useCallback(() => {
  //   // alert(`User ${props.selectTourName} has been created!`);
  //   props.navigate("CAMERA_PAGE");
  // });

>>>>>>> Stashed changes
  return (
    <Container style={{ width: 400, height: 700 }}>
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
        <Body />
        <Right>
          <Text>{`${props.selectTourName}`} </Text>
        </Right>
      </Header>
      <Content>
        <View style={{ marginTop: 50 }}>
        <Item floatingLabel>
            <Label>ENTER TOUR NAME</Label>
            <Input
              onChangeText={text => {
                props.setTourName(text);
              }}
            />
        </Item>
          <Button
            block
            onPress={() => {
              props.navigate("CAMERA_PAGE");
            }}
            full
          >
            <Text>Submit</Text>
          </Button>
        </View>
      </Content>
    </Container>
  );
};
​
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
​
const mapDispatchToProps = dispatch => {
  return {
    navigate: render => dispatch(navigate(render)),
    setTourName: (name) => dispatch(setTourName(name))
  };
};
<<<<<<< Updated upstream
​
export default connect(mapStateToProps, mapDispatchToProps)(Create);
=======
const mapStateToProps = state => {
  return {
    selectTourName: selectTourName(state)
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Create);
>>>>>>> Stashed changes
