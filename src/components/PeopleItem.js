import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import * as actions from '../actions';
// import { getTheme } from "react-native-material-kit";
import Icon from 'react-native-vector-icons/EvilIcons';

export const PeopleItem = (props) => {
    return (
        <View style={styles.card}>
            <TouchableOpacity onPress={() => props.selectPerson(props.people)}>
                <Image
                    source={require('../images/background.jpg')}
                    style={styles.image}
                />
                <Icon name={'user'} size={100} style={styles.icon} />
                <Text style={styles.title}>
                    {props.people.firstName} {props.people.lastName}{' '}
                </Text>
                <Text style={styles.action}>{props.people.company}</Text>
            </TouchableOpacity>
        </View>
    );
};

// const theme = getTheme();

const styles = StyleSheet.create({
    card: {
        margin: 20,
    },
    title: {
        position: 'absolute',
        top: 30,
        left: 100,
        fontSize: 24,
    },
    image: {
        width: '100%',
        height: 100,
    },
    action: {
        backgroundColor: 'black',
        color: 'white',
        fontSize: 18,
        height: 40,
        paddingLeft: 10,
        paddingTop: 5,
    },
    icon: {
        position: 'absolute',
        color: 'white',
        backgroundColor: 'rgba(255,255,255,0)',
    },
});

export default connect(null, actions)(PeopleItem);
