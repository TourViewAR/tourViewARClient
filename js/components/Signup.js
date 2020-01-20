import React, { Component } from "react";
import {
  Container,
  Header,
  Content,
  Form,
  Item,
  Input,
  Label,
  Title,
  Button,
  Text,
  Left,
  Body,
  Right
} from "native-base";
import { connect } from "react-redux";
import {
  selectUserId,
  selectUserPassword,
  selectUserEmail
} from "../redux/user/user.selectors";
import { navigate } from "../redux/render/render.action";
import {
  setUserId,
  setUserPassword,
  setUserEmail
} from "../redux/user/user.action";

const Signup = props => {
  return (
    <Container style={{ width: 400, height: 700 }}>
      <Header>
        <Left>
          <Button
            hasText
            transparent
            onPress={() => {
              props.navigate("LOGIN_PAGE");
            }}
          >
            <Text>Back</Text>
          </Button>
        </Left>
        <Body>
          <Title>Sign Up</Title>
        </Body>
        <Right />
      </Header>
      <Content>
        <Form>
          <Item floatingLabel>
            <Label>Username</Label>
            <Input
              onChangeText={text => {
                props.setUserId(text);
              }}
            />
          </Item>
          <Item floatingLabel>
            <Label>Password</Label>
            <Input
              secureTextEntry={true}
              onChangeText={text => {
                props.setUserPassword(text);
              }}
            />
          </Item>
          <Item floatingLabel>
            <Label>Confirm Password</Label>
            <Input secureTextEntry={true} />
          </Item>
          <Item floatingLabel>
            <Label>E-mail</Label>
            <Input
              onChangeText={text => {
                props.setUserEmail(text);
              }}
            />
          </Item>
        </Form>

        <Button block light style={{ marginTop: 100 }}>
          <Text>Sign Up</Text>
        </Button>
      </Content>
    </Container>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    navigate: render => dispatch(navigate(render)),
    setUserId: id => dispatch(setUserId(id)),
    setUserPassword: password => dispatch(setUserPassword(password)),
    setUserEmail: email => dispatch(setUserEmail(email))
  };
};

const mapStateToProps = state => {
  return {
    selectUserId: selectUserId(state),
    selectUserPassword: selectUserPassword(state),
    selectUserEmail: selectUserEmail(state)
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Signup);
