import React, { Component } from 'react';
import { View, StyleSheet, Text, FlatList } from 'react-native';
import { connect } from 'react-redux';
import Icon from 'react-native-vector-icons/EvilIcons';
import _ from 'lodash';
import CompanyItem from "./CompanyItem";
import * as actions from '../actions';

class CompanyList extends Component {
    render() {
        return (
            <View style={styles.container}>
                <FlatList
                    data={this.props.companies}
                    renderItem={({ item }) => <CompanyItem companies={item} />}
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
        flexWrap: 'wrap',
        paddingTop: 20,
        paddingLeft: 20,
    },
});

const mapStateToProps = (state) => {
    const people = state.people;

    const companies = _.chain(people)
        .groupBy('company')
        .map((value, key) => ({
            company: key,
            names: value
        }))
        .value();
    return {
        companies
    };
};

export default connect(mapStateToProps)(CompanyList);
