import React, { Component } from "react";
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity} from "react-native";
import { connect } from "react-redux";
import EvilIcon from "react-native-vector-icons/EvilIcons";
import SimpleIcon from "react-native-vector-icons/SimpleLineIcons";
import MaterialIcon from "react-native-vector-icons/MaterialIcons";
import * as actions from "../actions";
// import PeopleItem from "./PeopleItem";
import EditPerson from "./EditPerson";

class PeopleDetail extends Component {
  componentDidMount(){
    console.log('details', this.props);
  }
  startEditting() {
    console.log('start edit');
    this.props.updateContact(this.props.person);
    // this.props.toUpdate = true;
  }
  render() {
    if (this.props.toUpdate)
      return (<EditPerson />)
    return (
      <View style={styles.container}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Image
            source={require("../images/background.jpg")}
            style={[styles.image]}
          />
          <EvilIcon name={"user"} size={100} style={styles.icon} />
          <SimpleIcon
            name={"close"}
            size={30}
            style={styles.closeIcon}
            onPress={() => this.props.noneSelected()}
          />
          <Text style={styles.title1}>
            {this.props.person.firstName} {this.props.person.lastName}
          </Text>
          <Text style={styles.title2}>from {this.props.person.company}</Text>
          <View style={styles.textArea}>
            <MaterialIcon name={"phone"} size={40} style={styles.textIcons} />
            <Text>{this.props.person.phone}</Text>
          </View>
          <View style={styles.textArea}>
            <MaterialIcon name={"email"} size={40} style={styles.textIcons} />
            <Text>{this.props.person.email}</Text>
          </View>
          <View style={styles.textArea}>
            <MaterialIcon
              name={"assignment"}
              size={40}
              style={styles.textIcons}
            />
            <Text>{this.props.person.project}</Text>
          </View>
          <View style={styles.textArea}>
            <MaterialIcon
              name={"mode-edit"}
              size={40}
              style={styles.textIcons}
            />
            <Text>{this.props.person.notes}</Text>
          </View>
            <View style={styles.actionArea}>
              <TouchableOpacity onPress={()=> this.startEditting()} style={styles.crudActions}>
                <MaterialIcon name={'autorenew'} style={styles.crud} />
                <Text style={styles.crud2}>EDIT</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => this.props.deleteContact(this.props.person._id)} style={styles.crudActions}>
                <MaterialIcon name={'delete-forever'} style={styles.crud} />
                <Text style={styles.crud2}>DELETE</Text>
              </TouchableOpacity>
            </View>
          <View style={styles.actionArea}>
              <TouchableOpacity onPress={()=>{}} >
              <Image
                source={require("../images/call@2x.png.png")}
                style={styles.actionImage}
                />
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>{}}>
              <Image
                source={require("../images/email@2x.png.png")}
                style={styles.actionImage}
              />
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>{}}>
              <Image
                source={require("../images/sms@2x.png.png")}
                style={styles.actionImage}
              />
            </TouchableOpacity>
            </View>
            <View style={styles.actionArea}>
              <Text>Call</Text>
              <Text>Email</Text>
              <Text>SMS</Text>
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container:{ 
    margin: 5,
  },
  card: {
    marginTop: 10,
    paddingBottom: 20,
    marginBottom: 20,
    borderColor: "lightgrey",
    // borderWidth: 0.5,
  },
  title1: {
    position: "absolute",
    top: 25,
    left: 90,
    fontSize: 24,
  },
  title2: {
    position: "absolute",
    top: 55,
    left: 90,
    fontSize: 18,
  },
  image: {
    height: 100,
    width: '100%',
  },
  closeIcon: {
    position: "absolute",
    top: 5,
    right: 5,
    color: "rgba(233,166,154,0.8)",
    backgroundColor: "rgba(255,255,255,0)",
  },
  icon: {
    position: "absolute",
    // top: 15,
    left: 0,
    color: "white",
    backgroundColor: "rgba(255,255,255,0)",
  },
  textArea: {
    flexDirection: "row",
    paddingLeft: 20,
    paddingTop: 10,
    width: 260,
  },
  textIcons: {
    color: "#26a69a",
  },
  actionArea: {
    marginVertical: 20,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  actionImage: {
    //   backgroundColor: 'gray',
      height: 100,
      width: 100
  },
  crudActions: {
    flexDirection: 'row',
  },
  crud: {
    color: '#3496e2',
    fontSize: 32
  },
  crud2: {
    color: '#3496e2',
    fontSize: 22,
  }
});
const mapStateToProps = (state) => {
  return {
    person: state.personSelected,
    toUpdate: state.toUpdate
  };
};

export default connect(mapStateToProps, actions)(PeopleDetail);
