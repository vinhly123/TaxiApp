import React from "react";
import createStore from "./store/createStore";
import AppContainer from "./AppContainer";
import 'react-native-gesture-handler';
export default class Root extends React.Component{
    renderApp(){
        const initialState = window.__INITIAL_STATE__;
        const store = createStore(initialState);

        return (
            <AppContainer store = {store}/>
        );
    }
    render(){
        return this.renderApp();
    }
}
/*
import { View, Text } from "react-native";
class Main extends React.Component {
    render(){
        return (
            <View> 
                <Text>Hey Taxi App</Text>
            </View>
        )
    }
}
export default Main;*/