import React from "react";
import { StyleSheet, Text, View} from 'react-native';
import Unorderedlist from 'react-native-unordered-list';


const RecipeDetails = ({ ingredients }) => {
    return ingredients.map( (ingredient, index) => {
        return (
            <View style={styles.recipeDetails}key={index}>
                <View style={styles.list}>
                    <Unorderedlist><Text style={styles.text}>{ingredient.text}</Text></Unorderedlist>
                    <Unorderedlist><Text style={styles.weight}>Weight - {ingredient.weight}</Text>
                    </Unorderedlist>
                </View>
            </View>
        )
    })
};

const styles = StyleSheet.create({
    recipeDetails: {
        marginTop: 10,
        backgroundColor: '#f0f0f0',
        borderRadius: 5,
        padding: 5
    },
    list: {
        marginVertical: 5,
        marginHorizontal: 0
    },
    text: {
        fontSize: 15,
        color: '#888'
    },
    weight: {
        fontSize: 13,
        color: '#40b48e'
    }
})

export default RecipeDetails;

