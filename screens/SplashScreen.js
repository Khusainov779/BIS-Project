import React from 'react';
import { View, Text, Button, StyleSheet, Dimensions, Image, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import * as Animatable from 'react-native-animatable';
import { useTheme } from '@react-navigation/native';
const SplashScreen = ({ navigation }) => {

    const { colors } = useTheme();

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Animatable.Image
                    animation='fadeInDown'
                    source={require('../assets/logo.png')}
                    style={styles.logo}
                    resizeMode='stretch'
                />
            </View>
            <Animatable.View
                style={[styles.footer, {
                    backgroundColor: colors.background
                }]}
                animation='fadeInUpBig'
            >
                <Text style={[styles.title, {
                    color: colors.text
                }]}>Keep calm and clean your car!</Text>
                <Text style={styles.text}>Sign in with account</Text>
                <TouchableOpacity onPress={() => navigation.navigate('SignInScreen')}
                    style={styles.button}
                >
                    <LinearGradient
                        colors={['#4c669f', '#192f6a']}
                        style={styles.SignIn}
                    >
                        <Text style={styles.textSign}>Get Started</Text>
                        <MaterialIcons
                            name='navigate-next'
                            color='#fff'
                            size={20}
                        />
                    </LinearGradient>
                </TouchableOpacity>
            </Animatable.View>
        </View >
    );
};

export default SplashScreen;

const { height } = Dimensions.get('screen');
const height_logo = height * 0.38;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#009387'
    },
    header: {
        flex: 2,
        justifyContent: 'center',
        alignItems: 'center'
    },
    footer: {
        flex: 1,
        backgroundColor: '#fff',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingVertical: 50,
        paddingHorizontal: 30
    },
    logo: {
        width: height_logo,
        height: height_logo
    },
    title: {
        color: '#05375a',
        fontSize: 30,
        fontWeight: 'bold',
    },
    text: {
        fontSize: 15,
        color: 'grey',
        marginTop: 5
    },
    button: {
        alignItems: 'flex-end',
        marginTop: 100
    },
    SignIn: {
        width: 150,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20,
        flexDirection: 'row'
    },
    textSign: {
        color: 'white',
        fontWeight: 'bold'
    }
});