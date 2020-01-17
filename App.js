/**
 * Copyright (c) 2017-present, Viro, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */

import React, { Component } from "react";
import {
  AppRegistry,
  Text,
  View,
  StyleSheet,
  PixelRatio,
  TouchableHighlight
} from "react-native";

import { ViroVRSceneNavigator, ViroARSceneNavigator } from "react-viro";

import Login from "./js/components/Login";
import ImageUpload from "./js/components/ImagePicker";

/*
 TODO: Insert your API key below
 */

export default class ViroSample extends Component {
  constructor() {
    super();
  }

  // Replace this function with the contents of _getVRNavigator() or _getARNavigator()
  // if you are building a specific type of experience.
  render() {
    return (
      <View style={localStyles.outer}>
        <View style={localStyles.inner}>
          {/* <Login /> */}
          <ImageUpload />
        </View>
      </View>
    );
  }
}

var localStyles = StyleSheet.create({
  outer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "white"
  },
  inner: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: "white"
  }
});

module.exports = ViroSample;
