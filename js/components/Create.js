import React, { useState } from "react";
import { ScrollView, View, StyleSheet, Image } from "react-native";
import { connect } from "react-redux";
import { navigate } from "../redux/render/render.action";
import { setTourName } from "../redux/tour/tour.action";
import {
  Container,
  Header,
  Content,
  Text,
  Left,
  Body,
  Right,
  Button,
  Item,
  Label,
  Input
} from "native-base";
const Create = props => {
  [tourname, settourname] = useState("");
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
        <Body />
        <Right />
      </Header>
      <Content>
        <View style={{ marginTop: 50 }}>
          <Item floatingLabel>
            <Label>ENTER TOUR NAME</Label>
            <Input
              onChangeText={text => {
                settourname(text);
              }}
            />
          </Item>
          <Button
            block
            onPress={tourname => {
              props.setTourName(tourname);
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
    navigate: render => dispatch(navigate(render)),
    setTourName: name => dispatch(setTourName(name))
  };
};
export default connect(null, mapDispatchToProps)(Create);
