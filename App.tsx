import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, SafeAreaView } from 'react-native';
import ToDoList from './components/ToDoList/ToDoList';
import ToDoForm from './components/ToDoForm/ToDoForm';

export default function App() {
    const [tasks, setTasks] = useState<string[]>([
        'Do laundry',
        'Go to gym',
        'Walk dog'
    ]);

    return (
        <SafeAreaView style={styles.container}>
            <ToDoList tasks={tasks} />
            <ToDoForm />
            <StatusBar style="auto" />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
});