import React, { Component } from "react";
import { View, StyleSheet, FlatList } from "react-native";
import { connect } from "react-redux";
import PeopleDetail from "./PeopleDetail";
import PeopleItem from "./PeopleItem";

class PeopleList extends Component {
  render() {
    if (this.props.detailView === true) {
      return <PeopleDetail />;
    }
    return (
      <View>
        <FlatList
          data={this.props.people}
          renderItem={({ item }) => <PeopleItem people={item} />}
          keyExtractor={(item, index) => index.toString()}
        />
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

const mapStateToProps = (state) => {
  return {
    people: state.people,
    detailView: state.detailView,
  };
};

export default connect(mapStateToProps)(PeopleList);
