import React, { Component } from "react";
import {
    View,
    StyleSheet,
    Text,
    ScrollView,
    Button,
    TextInput,
} from "react-native";
import { connect } from "react-redux";
// import Icon from "react-native-vector-icons/EvilIcons";
import * as actions from "../actions";

const localIP = '10.0.2.15';
class AddPerson extends Component {
    onSubmit = () => {
        const { firstName, lastName, phone, email, company, project, notes } = this.props;
        console.log('submit clicked', {firstName, lastName, phone, email, company, project, notes} );
        // fetch(`http://${localIP}:3000/contact`, {
        //     method: "POST",
        //     headers: {"Content-Type": "application/json"}
            
        // }).then(res => console.log('success', res.json())).catch(err => console.log('error', err))
        this.props.createNewPerson({ firstName, lastName, phone, email, company, project, notes });

        this.props.navigation.navigate('People');
        console.log('submited');
    }
    render() {
        return (
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.form}>
                    <Text style={styles.title}>Add a new contact</Text>
                    <TextInput
                        style={styles.textField}
                        placeholder={"First name..."}
                        value={this.props.firstName}
                        onChangeText={(value) =>
                            this.props.formUpdate({ prop: "firstName", value })
                        }
                    />
                    <TextInput
                        style={styles.textField}
                        placeholder={"Last name..."}
                        value={this.props.lastName}
                        onChangeText={(value) =>
                            this.props.formUpdate({ prop: "lastName", value })
                        }
                    />
                    <TextInput
                        style={styles.textField}
                        placeholder={"Phone number..."}
                        value={this.props.phone}
                        onChangeText={(value) =>
                            this.props.formUpdate({ prop: "phone", value })
                        }
                    />
                    <TextInput
                        style={styles.textField}
                        placeholder={"Email..."}
                        value={this.props.email}
                        onChangeText={(value) =>
                            this.props.formUpdate({ prop: "email", value })
                        }
                    />
                    <TextInput
                        style={styles.textField}
                        placeholder={"Company..."}
                        value={this.props.company}
                        onChangeText={(value) =>
                            this.props.formUpdate({ prop: "company", value })
                        }
                    />
                    <TextInput
                        style={styles.textField}
                        placeholder={"Project..."}
                        value={this.props.project}
                        onChangeText={(value) =>
                            this.props.formUpdate({ prop: "project", value })
                        }
                    />
                    <TextInput
                        style={styles.textField}
                        placeholder={"Notes..."}
                        value={this.props.notes}
                        onChangeText={(value) =>
                            this.props.formUpdate({ prop: "notes", value })
                        }
                    />
                    <View style={styles.addButton}>
                        <Button onPress={this.onSubmit} title="Add" />
                    </View>
                </View>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    form: {
        flex: 1,
        paddingTop: 50,
        paddingBottom: 10,
        paddingLeft: 20,
        paddingRight: 20,
        justifyContent: "space-between",
    },
    title:{
        fontSize: 24,
    },
    textField: {
        marginTop: 10,
        paddingHorizontal: 10,
        height: 40,
        color: "orange",
    },
    addButton: {
        marginTop: 20,
    },
});

const mapStateToProps = state => {
    const { firstName, lastName, phone, email, company, project, notes} = state;
    return { firstName, lastName, phone, email, company, project, notes };
}

export default connect(mapStateToProps, actions)(AddPerson);
