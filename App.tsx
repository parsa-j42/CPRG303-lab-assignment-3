import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import {StyleSheet, SafeAreaView, View, Text} from 'react-native';
import ToDoList from './components/ToDoList/ToDoList';
import ToDoForm from './components/ToDoForm/ToDoForm';
import { Platform } from 'react-native';

export default function App() {
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
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#e5e9f0',
        paddingTop: Platform.OS === 'web' ? 0 : 55,
        paddingBottom: 20,
    },
    header: {
        padding: 20,
        backgroundColor: '#3b4252',
        borderBottomWidth: 1,
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