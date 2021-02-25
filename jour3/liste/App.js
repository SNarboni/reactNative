import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import List from "./components/List";

const App = () => {
  const [tab, setTab] = useState("");
  const [verif, setVerif] = useState(false);

  const searchCountry = () => {
    fetch("http://restcountries.eu/rest/v2/all")
      .then((response) => response.json())
      .then((result) => {
        setTab(result);
        console.log(result[0]);
        setVerif(true)
      });
  };

  useEffect(() => {
    searchCountry();
  }, []);

  const check = () => {
    if(verif){
      return(
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
        <FlatList
          data={tab}
          renderItem={(element) => {
            return (<List name={element.item.name} capital={element.item.capital} flag={element.item.flag}></List>);
          }}
        />
      </View>)
    }else {
      return(<Text>lorading....</Text>)
    }
  }

    return (
      check()
    );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    marginTop: 60,
  },
  listContainer:{
    borderWidth: 2,
    display:1,
    flexDirection:"column",
    alignItems: "center",
    paddingVertical:15,
    marginVertical:20,
  },
  listText:{
    fontSize:20,
  }
});
export default App;
