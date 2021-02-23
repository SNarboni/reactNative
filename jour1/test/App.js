import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  Pressable,
  Alert,
  ActivityIndicator,
} from "react-native";

export default function App() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.container2}>
        <Text style={styles.text}>Coucou</Text>
        <Text style={styles.text}>Coucou</Text>
        <Text style={styles.text}>Coucou</Text>
      </View>
      <View style={styles.container2}>
        <Image
          style={styles.img}
          source={{
            uri: "https://konexio.eu/uploads/1/2/0/2/120245745/konexio-logo_1.png",
          }}
        ></Image>
        <Image
          style={styles.img}
          source={require("./img/konexio-logo_1.png")}
        ></Image>
      </View>
      <View>
        <Pressable
          onPress={() => alert("cliquez")}
          onLongPress={() => alert("cliquez longtemps")}
        >
          <Text>Cliquez !!</Text>
        </Pressable>
      <ActivityIndicator size="large" color="#00ff00" />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#448dd6",
    height: "200vh",
  },
  container2: {
    backgroundColor: "#fff",
    height: "70vh",
    width: "90%",
    marginTop: 80,
    marginLeft: "auto",
    marginRight: "auto",
    marginBottom: 80,
  },
  text: {
    fontSize: 30,
    textAlign: "center",
    fontWeight: "bold",
    marginTop: 80,
    marginBottom: 80,
  },
  img: {
    height: 100,
    width: 300,
  },
});
