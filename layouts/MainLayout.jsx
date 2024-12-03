import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

const Footer = () => {
    return (
        <View style={styles.footer}>
            <Text style={styles.footerText}>This is a sample footer for the My Tasks app.</Text>
        </View>
    );
};

const MainLayout = ({ children }) => {
    return (
        <View style={styles.container}>
            {children}
            <Footer />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // padding: 20,
        borderTopWidth: 1,
        borderColor: '#8fbcbb'
    },
    footer: {
        height: 50,
        backgroundColor: '#4c566a',
        justifyContent: 'center',
        padding: 10,
        borderTopWidth: 0
    },
    footerText: {
        fontSize: 16,
        color: "white",
    }
});

export default MainLayout;