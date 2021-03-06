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

class AddPerson extends Component {
    onSubmit = () => {
        console.log('submited');
    }
    render() {
        return (
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.form}>
                    <Text>Add a new contact</Text>
                    <TextInput
                        textInputStyle={styles.fieldStyles}
                        placeholder={"First name..."}
                        value={this.props.firstName}
                        onChangeText={(value) =>
                            this.props.formUpdate({ prop: "firstName", value })
                        }
                    />
                    <TextInput
                        textInputStyle={styles.fieldStyles}
                        placeholder={"Last name..."}
                        value={this.props.lastName}
                        onChangeText={(value) =>
                            this.props.formUpdate({ prop: "lastName", value })
                        }
                    />
                    <TextInput
                        textInputStyle={styles.fieldStyles}
                        placeholder={"Phone number..."}
                        value={this.props.phone}
                        onChangeText={(value) =>
                            this.props.formUpdate({ prop: "phone", value })
                        }
                    />
                    <TextInput
                        textInputStyle={styles.fieldStyles}
                        placeholder={"Email..."}
                        value={this.props.email}
                        onChangeText={(value) =>
                            this.props.formUpdate({ prop: "email", value })
                        }
                    />
                    <TextInput
                        textInputStyle={styles.fieldStyles}
                        placeholder={"Company..."}
                        value={this.props.company}
                        onChangeText={(value) =>
                            this.props.formUpdate({ prop: "company", value })
                        }
                    />
                    <TextInput
                        textInputStyle={styles.fieldStyles}
                        placeholder={"Project..."}
                        value={this.props.project}
                        onChangeText={(value) =>
                            this.props.formUpdate({ prop: "project", value })
                        }
                    />
                    <TextInput
                        textInputStyle={styles.fieldStyles}
                        placeholder={"Notes..."}
                        value={this.props.notes}
                        onChangeText={(value) =>
                            this.props.formUpdate({ prop: "notes", value })
                        }
                    />
                    <View style={styles.addButton}>
                        <Button onPress={this.onSubmit()} title="Add" />
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
    textField: {
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
