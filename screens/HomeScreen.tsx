import React, { useState } from 'react';
import {StyleSheet, SafeAreaView, View, Text, Platform, Button} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import ToDoList from '../components/ToDoList';
import ToDoForm from '../components/ToDoForm';
import MainLayout from '../layouts/MainLayout';

export default function HomeScreen({ navigation }: { navigation: any }) {
    const [tasks, setTasks] = useState<string[]>([
        'Do laundry',
        'Go to gym',
        'Walk dog'
    ]);

    const addTask = (taskText: string) => {
        if (!tasks.includes(taskText)) {
            setTasks([...tasks, taskText]);
        }
    };

    return (
        <MainLayout>
            <SafeAreaView style={styles.navContainer}>
                <SafeAreaView style={styles.container}>
                    <View style={styles.header}>
                        <View style={styles.titleContainer}>
                            <Text style={styles.title}>My Tasks</Text>
                        </View>
                    </View>

                    <ToDoList tasks={tasks} />
                    <ToDoForm addTask={addTask} />
                    <StatusBar style="auto" />
                </SafeAreaView>
                <Button
                    title="Go to About"
                    color="#81a1c1"
                    onPress={() => navigation.navigate('About')}
                />
            </SafeAreaView>
        </MainLayout>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#e5e9f0',
        marginBottom: 20,
    },
    navContainer: {
        flex: 1,
    },
    header: {
        paddingTop: 10,
        paddingBottom: 5,
        paddingLeft: 13,
        backgroundColor: '#3b4252',
        borderBottomWidth: 7,
        borderBottomColor: '#8fbcbb',
    },
    titleContainer: {
        marginBottom: 10,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#8fbcbb',
    },
});