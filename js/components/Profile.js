import React, { Component } from 'react'
import { ScrollView, View, StyleSheet, Image, Text } from 'react-native'

import TourContainer from "./TourContainer";

const Profile = () => {
  return (
    <View>
      <Image style={localStyles.profileImg} source={{uri: `https://breakdownservices.s3.amazonaws.com/media/photos/20181/341794/9082DC9E-111F-4F77-9736BC2CCAFB0CA5.jpg`}} />
      <Text>JULIAN'S JUNK</Text>
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
})

export default Profile;