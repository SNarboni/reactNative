import React, { Component } from "react";
import { Text, View, StyleSheet, Pressable } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import { Link } from "react-router-native";

const LoginForm = () => {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.formTitle}>Login</Text>
        <TextInput style={styles.input} />
      </View>
      <View>
        <Text style={styles.formTitle}>Mot de passe</Text>
        <TextInput style={styles.input} />
      </View>
      <View style={styles.buttonContainer}>
        <Link to="/Home" style={styles.button}>
          <Text style={styles.buttonText}>Connexion</Text>
        </Link>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
      },
  input: {
    borderWidth: 1,
    borderColor: "#20232a",
    backgroundColor: "#ffffff",
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginBottom: 30,
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

export default LoginForm;
