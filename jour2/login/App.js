import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { NativeRouter, Route, Link } from "react-router-native";
import LoginForm from "./components/LoginForm";
import Home from "./views/Home";
import Account from "./views/Account";

const App = () => {
  return (
    <NativeRouter>
        <Route exact path="/" component={LoginForm} />
        <Route exact path="/Home" component={Home} />
        <Route exact path="/Account" component={Account} />
    </NativeRouter>
  );
};

const styles = StyleSheet.create({
  
});
export default App;
