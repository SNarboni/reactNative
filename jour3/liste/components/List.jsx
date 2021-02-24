import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, Image } from 'react-native';

 const List = ({name, capital, flag}) => {


        return (
            <View style={styles.listContainer}>
                <Image source={{uri:flag}} style={{height:150, width:225}}/>
                <Text style={styles.listText}>Pays : {name}</Text>
                <Text style={styles.listText}>Capital : {capital}</Text>
            </View>
        )
}

const styles = StyleSheet.create({
    listContainer:{
      borderWidth: 2,
      flex:1,
      flexDirection:"column",
      alignItems: "center",
      paddingVertical:15,
      marginVertical:20,
    },
    listText:{
      fontSize:20,
    }
  });
export default List;