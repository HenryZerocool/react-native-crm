import React, { Component } from "react";
import { View, StyleSheet, FlatList } from "react-native";
import { connect } from "react-redux";
import Icon from "react-native-vector-icons/EvilIcons";
import * as actions from '../actions';

class CompanyList extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>Company scnreen</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: 353,
        flexWrap: "wrap",
        paddingTop: 20,
        paddingLeft: 20,
    }
})

export default connect(null, actions)(CompanyList)