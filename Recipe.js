import React, { useState } from "react";
import RecipeDetails from "./RecipeDetails";
import { StyleSheet, Text, ScrollView, Image, TouchableOpacity, View, Linking } from 'react-native';



const Recipe = ({ recipe }) => {
    const [show, setShow] = useState(false);
    const { label, image, ingredients, url } = recipe.recipe;
    return (
        <View style={styles.recipe}>
            <Text style={styles.recipeText}>{label}</Text>
            <Image style={styles.tinyLogo} source={{uri: image}}
            />
            <Text style={{color: '#40b48e', fontSize: 18, marginTop: 10, marginBottom: 10}}
                onPress={() => Linking.openURL(url)}>
            More Details
            </Text>
            <TouchableOpacity
                style={styles.recipeButton}
                onPress={() => setShow(!show)}
            ><Text key={ingredients.foodId}>Ingredients</Text></TouchableOpacity>
            {show && <RecipeDetails ingredients={ingredients} />}
        </View>
    );
};


const styles = StyleSheet.create({
    recipe: {
        width: '100%',   
        flexDirection: 'column',
        marginTop: 20,
        backgroundColor: '#d3d3d3',
        padding: 20,
        position: 'relative',
        borderRadius: 5,
        shadowColor: "#aaa",
        shadowOffset: {
          width: 0,
          height: 7,
        },
        shadowOpacity: 0.43,
        shadowRadius: 9.51,
        elevation: 15,
    },
    recipeText: {
        backgroundColor: 'rgba(161, 161, 161, 0.7)',
        borderRadius: 5,
        paddingVertical: 3,
        paddingHorizontal: 5,
        
        fontSize: 25,
        fontWeight: 'bold',
        textShadowColor: 'rgba(0, 0, 0, 0.75)',
        textShadowOffset: {width: -1, height: 1},
        textShadowRadius: 10,
        color: 'white', 

    },
    tinyLogo: {
        width: '100%',
        height: 200,
        borderRadius: 5,
        
    },
    recipeButton: {
        fontSize: 20,
        textTransform: 'uppercase',
        color: 'white',
        backgroundColor: "#40b48e",
        borderTopColor: "#B0B0B000",
        borderBottomColor: "#B0B0B000",
        borderTopWidth: 0,
        borderBottomWidth: 0,
        borderRadius: 5,
        padding: 5,

    }
  })

export default Recipe;
