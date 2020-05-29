import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const FavoritesScreen = () => {
    return (
        <View style={styles.container}>
            <Text>FavoritesScreen</Text>
            <Button
                title='Click here'
                onPress={() => alert('Button Clicked!')}
            />
        </View>
    );
};

export default FavoritesScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
})