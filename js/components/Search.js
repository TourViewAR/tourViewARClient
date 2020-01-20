import React, { Component, useState, useCallback } from "react";
import { ScrollView, View, StyleSheet, Image, TextInput } from "react-native";
import axios from "axios";
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
import Axios from "axios";
const Search = props => {
  const [search, setSearch] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const searchRequest = useCallback(() => {
    axios
      .get(
        "http://tourviewarserver.herokuapp.com/api/search",
        {
          params: {
            search: search
          }
        },
        {
          headers: {
            "Content-Type": "application/json"
          }
        }
      )
      .then(results => {
        setSearchResults(JSON.stringify(results.data));
        // alert(JSON.stringify(results.data));
      })
      .catch(err => {
        alert(err);
      });
  });
  return (
    <Container style={{ width: "100%", height: "100%" }}>
      <Header searchBar rounded>
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
          <Title>Search Tour</Title>
        </Body>
        <Right>
          <Text>{`${search}`}</Text>
        </Right>
        {/* <TextInput placeholder="Type here to search" /> */}
      </Header>
      <Content>
        <View
          style={{
            flex: 1,
            flexDirection: "row",
            alignSelf: "center",
            marginTop: 30
          }}
        >
          {/* <Text>SEARCH</Text> */}
          <TextInput
            style={{
              height: 45,
              width: 300,
              borderColor: "gray",
              borderWidth: 1,
              borderRadius: 4
            }}
            placeholder="Touch here to search"
            onChangeText={text => {
              setSearch(text);
            }}
          ></TextInput>
          <Button
            primary
            onPress={() => {
              searchRequest();
            }}
          >
            <Text>Search</Text>
          </Button>
        </View>
        <ScrollView style={localStyles.container}>
          {searchResults[0].map((tour, i) => (
            <TourContainer key={i} tour={tour} />
          ))}
        </ScrollView>
        <View>
          <Text>{`${searchResults}`}</Text>
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