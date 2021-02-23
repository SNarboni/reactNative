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
              <Text style={styles.formTitle}>Account</Text>
              <Link to="/" style={styles.button}>
                <Text style={styles.buttonText}>LogOut</Text>
              </Link>
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
          button: {
            paddingVertical: 10,
            paddingHorizontal: 20,
            borderWidth: 1,
            borderColor: "#20232a",
            backgroundColor: "#ffffff",
            width: 120,
            borderRadius: 10,
          },
          buttonText: {
            fontSize: 16,
            color: "black",
          },
    });
    
    
export default Home;
