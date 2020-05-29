import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const MyCarsScreen = () => {
    return (
        <View style={styles.container}>
            <Text>My Cars Screen</Text>
            <Button
                title='Click here'
                onPress={() => alert('Button Clicked!')}
            />
        </View>
    );
};

export default MyCarsScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
})