import React from "react";
import { StyleSheet, Text, View } from 'react-native';

const Alert = (props) => {
    return (
        <View style={styles.alert}>
            <Text style={styles.alertText}>{props.alert}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    alert: {
        backgroundColor: 'rgb(233, 72, 72)',
        width: 150,
        borderRadius: 5,
        padding: 2,
        margin: 10,
    },
    alertText: {
        fontSize: 14,
        color: 'white',
        fontWeight: 'bold',
        textTransform: 'uppercase',
        textAlign: 'center',
    }
})

export default Alert;