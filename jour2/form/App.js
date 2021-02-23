import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, TextInput, Pressable } from "react-native";

export default function App() {
  const [emailValue, setEmailValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");


  const [emailValid, setEmailValid] = useState(false);
  const [passwordValid, setPasswordValid] = useState(false);
  

  const [buttonValue, setButtonValue] = useState(true);

 // verification du format de l'email et save la nouvelle valeur
 const onChangeEmail = (event) => {
   const newEmail = event;
   const reg = /^\S+@\S+\.\S+$/g;
   const isEmail = reg.test(newEmail)
   
   setEmailValue(newEmail)
   setEmailValid(isEmail)
   
   console.log(emailValue)
   console.log(emailValid)
  }
  // verification du format de l'email et save la nouvelle valeur
  
  // verification du format du Mot de passe et save la nouvelle valeur
  const onChangePassword = (event) => {
    let newPasswordValid = false;
    if (event.length >= 6) {
      newPasswordValid = true
    } else {
      newPasswordValid = false
    }
    setPasswordValue(event)
    setPasswordValid(newPasswordValid)
  }
  // verification du format du Mot de passe et save la nouvelle valeur

  
  // verification a chaque changement
  useEffect(() => {
    allValid();
  }, [emailValue, passwordValue]);
  // verification a chaque changement

  
  // validation des input
  const allValid = () => {
    if (emailValue.length >= 5 && passwordValue.length >= 5) {
      setButtonValue(false)
    } else {
      setButtonValue(true)
    }
  };
  // validation des input
  



  return (
    <View style={styles.container}>
      <View style={styles.form}>
        <Text style={styles.formTitle}>Email</Text>
        <TextInput
          style={styles.input}
          autoCompleteType="email"
          // onChangeText={(text) => onChangeEmail(text)}
          onChangeText={(event) => onChangeEmail(event)}
          // value={emailValue}
        />
      </View>
      <View style={styles.form}>
        <Text style={styles.formTitle}>Mot de passe</Text>
        <TextInput
          style={styles.input}
          autoCompleteType="password"
          onChangeText={(event) => onChangePassword(event)}
          value={passwordValue}
        />
      </View>
      <View style={styles.buttonContainer}>
        <Pressable style={buttonValue ? styles.buttonDisabled : styles.buttonEnabled} disabled={buttonValue} onPress={() => console.log('pressed')}>
          <Text style={styles.buttonText}>Connexion</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#9c3535",
    paddingHorizontal: 40,
    paddingVertical: 40,
  },
  form: {
    marginBottom: 30,
  },
  formTitle: {
    marginBottom: 10,
    fontSize: 25,
    color: "#ffff",
  },
  input: {
    borderWidth: 1,
    borderColor: "#20232a",
    backgroundColor: "#ffffff",
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 20,
  },

  buttonEnabled: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderWidth: 1,
    borderColor: "#20232a",
    backgroundColor: "#ffffff",
    width: 120,
    borderRadius: 10,
  },
  buttonDisabled: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderWidth: 1,
    borderColor: "#20232a",
    backgroundColor: "#605353",
    width: 120,
    borderRadius: 10,
  },
  buttonText: {
    fontSize: 16,
    color: "black",
  },
  buttonContainer: {
    marginVertical: 0,
    marginHorizontal: "auto",
  },
});
