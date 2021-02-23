import React, { Component } from "react";
import { Text, View, StyleSheet, Pressable } from "react-native";
import { Link } from "react-router-native";
import { TextInput } from "react-native-gesture-handler";

const Home = () => {
  return (
    <View>
      <View style={styles.header}>
        <Link to="/home">
          <Text>Home</Text>
        </Link>
        <Link to="/Account">
          <Text>Account</Text>
        </Link>
      </View>
      <View style={styles.container}>
        <Text style={styles.formTitle}>Home</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
    header :{
        flex:1,
        alignItems: "center",
        justifyContent: "space-between",
        flexDirection:"row",
        paddingHorizontal : 200,
        backgroundColor: "#eeeeee",
    },
    container: {
        flex: 1,
        backgroundColor: "#e05e",
        alignItems: "center",
        justifyContent: "center",
      },
      formTitle: {
        marginBottom: 10,
        fontSize: 25,
        color: "#00000",
      },
});

export default Home;
