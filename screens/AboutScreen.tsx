import React from 'react';
import {StyleSheet, SafeAreaView, View, Text, Platform, Button} from 'react-native';
import MainLayout from '../layouts/MainLayout';

export default function AboutScreen({ navigation }: { navigation: any }) {
    return (
        <MainLayout>
            <View style={styles.navContainer}>
                <SafeAreaView style={styles.container}>
                    <View style={styles.content}>
                        <Text style={styles.title}>My Tasks</Text>
                        <Text style={styles.text}>Created by: Parsa</Text>
                        <Text style={styles.text}>Date: Dec 2, 2024</Text>
                    </View>
                </SafeAreaView>

                <Button
                    title="Go to Home"
                    color="#81a1c1"
                    onPress={() => navigation.navigate('Home')}
                />
            </View>
        </MainLayout>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#e5e9f0',
        paddingTop: Platform.OS === 'web' ? 0 : 55,
    },
    navContainer: {
        flex: 1,
    },
    content: {
        padding: 20,
        alignItems: 'center',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#3b4252',
        marginBottom: 20,
    },
    text: {
        fontSize: 16,
        color: '#4c566a',
        marginBottom: 10,
    },
});