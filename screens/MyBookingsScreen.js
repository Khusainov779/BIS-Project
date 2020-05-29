import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const MyBookingsScreen = () => {
    return (
        <View style={styles.container}>
            <Text>My Bookings Screen</Text>
            <Button
                title='Click here'
                onPress={() => alert('Button Clicked!')}
            />
        </View>
    );
};

export default MyBookingsScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
})