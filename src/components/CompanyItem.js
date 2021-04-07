import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    Image,
    TouchableWithoutFeedback,
} from 'react-native';
import { connect } from 'react-redux';
import * as actions from '../actions';
// import { getTheme } from "react-native-material-kit";
import Icon from 'react-native-vector-icons/EvilIcons';

export const CompanyItem = (props) => {
    // console.log('companies', props);
    return (
        <View style={styles.container}>
            <TouchableWithoutFeedback onPress={() => ({})}>
                <View style={styles.card}>
                    <Image
                        source={require('../images/background.jpg')}
                        style={styles.image}
                    />
                    <Icon name={'trophy'} size={100} style={styles.icon} />
                    <Text style={styles.title}>{props.companies.company}</Text>
                    {props.companies.names.map((name) => {
                        return (
                            <Text style={styles.action}>
                                {name.firstName} {name.lastName}
                            </Text>
                        );
                    })}
                    <Text />
                </View>
            </TouchableWithoutFeedback>
        </View>
    );
};

// const theme = getTheme();

const styles = StyleSheet.create({
    card: {
        marginRight: 15,
        marginBottom: 20,
    },
    title: {
        top: 30,
        left: 80,
        fontSize: 24,
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

export default connect(null, actions)(CompanyItem);
