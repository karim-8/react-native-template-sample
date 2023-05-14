import React from "react";
import { Text, StyleSheet, View } from "react-native";


const ComponentScreen = () => {

   const name1 = <Text> First Name Screen View - - - - - Karim101</Text>;
   const name2 = <Text> Second Line design - - - -Kariim 202</Text>;
    
   return (
    <View>
        {name1}
        {name2}
    </View>
    );
};

const componentStyle = StyleSheet.create({
    textStyle: {
        fontSize:50,
    },
    textSubHeaderStyle:{
        fontSize: 12
    }
});

export default ComponentScreen;