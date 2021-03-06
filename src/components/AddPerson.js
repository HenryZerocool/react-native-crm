import React, { Component } from "react";
import { View, StyleSheet, Text, ScrollView } from "react-native";
import { connect } from "react-redux";
// import Icon from "react-native-vector-icons/EvilIcons";
import * as actions from "../actions";

class AddPerson extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Add person scnreen</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: 353,
    flexWrap: "wrap",
    paddingTop: 20,
    paddingLeft: 20,
  },
});

export default connect(null, actions)(AddPerson);
