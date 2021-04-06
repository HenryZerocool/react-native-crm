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

class EditPerson extends Component {
    onSubmit = () => {
        const { firstName, lastName, phone, email, company, project, notes, _id } = this.props;
        this.props.saveContact({ firstName, lastName, phone, email, company, project, notes, _id });

        // this.props.navigation.navigate('People');
        console.log('submited');
    }
    render() {
        return (
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.form}>
                    <Text style={styles.title}>Update contact</Text>
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
                    <View style={styles.updateButton}>
                        <Button onPress={this.onSubmit} title="Update" />
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
    updateButton: {
        marginTop: 20,
    },
});

const mapStateToProps = state => {
    const { firstName, lastName, phone, email, company, project, notes, _id} = state;
    return { firstName, lastName, phone, email, company, project, notes, _id };
}

export default connect(mapStateToProps, actions)(EditPerson);
