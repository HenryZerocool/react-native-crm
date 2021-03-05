import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Provider } from "react-redux";
import { createStore } from "redux";
import reducer from './src/reducers/PeopleReducer';
import PeopleList from "./src/components/PeopleList";
import Navigation from "./src/components/Navigation";

const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default class App extends React.Component {
  render() {

    return (
      <Provider store={store}>
        <Navigation />
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
