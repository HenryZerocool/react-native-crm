import React, { Component } from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { connect } from "react-redux";
import * as actions from '../actions';
// import { getTheme } from "react-native-material-kit";
import Icon from "react-native-vector-icons/EvilIcons";

export const PeopleItem = (props) => {

    return (
        <View style={styles.card}>
            <Image sources={require('../images/background.jpg')} style={styles.image} />
            <Icon name={'user'} size={100} style={styles.icon} />
            <Text style={styles.title}>{props.people.firstName} {props.people.lastName} </Text>
            <Text />
        </View>
    )

}

// const theme = getTheme();

const styles = StyleSheet.create({
    card: {
        marginTop: 20
    },
    title: {
        top: 20,
        left: 80,
        fontSize: 24,
    },
    image: {
        width: '100%',
        height: 100
    },
    action: {
        backgroundColor: 'black',
        color: 'white'
    },
    icon: {
        position: "absolute",

    }
})

const mapStateToProps = state => {
    return { people: state.people }
}

export default connect(null, actions)(PeopleItem);