import React from "react";
import {View, StyleSheet, Text, FlatList} from 'react-native';

const ListScreen = () => {

  const usersList = [

    {name:'k1',age: '23'},
    {name:'k12', age: '33'},
    {name:'k13', age: '99'},

  ];

    return <FlatList
    showsHorizontalScrollIndicator = {false}
     keyExtractor={user => user.name}
     data={usersList}
     renderItem={({ item }) => {
        return <Text style = {style.textStyle}>{item.name} - {item.age}</Text>
    }}></FlatList>;
};
 
const style = StyleSheet.create({
    textStyle:{
        marginVertical: 50
    }
});

export default ListScreen;