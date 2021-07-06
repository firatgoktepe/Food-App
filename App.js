import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import Axios from "axios";
import { StyleSheet, Text, View, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import Recipe from "./Recipe";
import Alert from "./Alert";

export default function App() {

  const [query, setQuery] = useState("")
  const [recipes, setRecipes] = useState([])
  const [alert, setAlert] = useState("")

  const APP_ID = "4e9f05eb"
  const APP_KEY = "9b904d703fa0d46a88ce1ac63f29f498"

  const url = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`

  const getData = async () => {
    if (query !== "") {
      const result = await Axios.get(url)
      if (!result.data.more) {
        return setAlert("No food with such name")
      }
      setRecipes(result.data.hits)
      setQuery("")
      setAlert("")
    } else {
      setAlert("Please fill the form")
    }
  }


  const onSubmit = e => {
    e.preventDefault()
    getData()
  }

  return (
    <>
      <View style={styles.container}>
        <Text style={styles.heading}>Food Search App!</Text>
        <StatusBar style="auto" />
        {alert !== "" && <Alert alert={alert} />}
        <TextInput
          style={styles.searchForm}
          name="query"
          onChangeText={text => setQuery(text)}
          value={query}
          placeholder="Type a Food"
        />
        <TouchableOpacity
          style={{
            alignItems: "center",
            backgroundColor: "#DDDDDD",
            padding: 5,
            width: '30%',
            textTransform: "uppercase",
            backgroundColor: '#40b48e',
            color: '#fff',
            borderRadius: 5,
          }}
          onPress={onSubmit}
        ><Text>Search</Text></TouchableOpacity>
      </View>
      <ScrollView>
        {recipes !== [] &&
          recipes.map( (recipe, index) => <Recipe key={index} recipe={recipe} />)}
      </ScrollView>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: '10%',
    height: '35%'
    
  },
  heading: {
    fontSize: 44,
    letterSpacing: 0.3,
    fontStyle: 'italic',
    color: '#40b48e',
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: {width: -1, height: 1},
    textShadowRadius: 10, 
    marginBottom: '5%',
  },
  searchForm: {
    width: '50%',
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#d3d3d3',
    borderRadius: 5,
    marginBottom: '5%',
    color: '#555',
    shadowColor: "#aaa",
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.43,
    shadowRadius: 9.51,
    elevation: 15,
    textAlign: 'center'
  },

})

