import React from "react";
import { View, Text } from "react-native";

class Home extends React.Component{
    componentDidMount(){
        this.props.setName();
    }
    render(){
       return (
           <view style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
               <Text>Hello {this.props.name}</Text>
           </view>
       );
       
    }
}

export default Home;