import React from 'react';
import { StyleSheet, Pressable, View, Text, ScrollView } from 'react-native';

interface ToDoListProps {
    tasks: string[];
}

const ToDoList = ({ tasks }: ToDoListProps) => (
    <ScrollView>
        {tasks.map((task, index) => (
            <Pressable key={index} style={({ pressed }) => [
                pressed && styles.taskPressed
            ]}>
                <View style={[styles.task]}>
                    <Text style={styles.taskText}>{task}</Text>
                </View>
            </Pressable>
        ))}
    </ScrollView>
);

const styles = StyleSheet.create({
    task: {
        padding: 16,
        borderBottomWidth: 1,
        borderBottomColor: '#e0e0e0',
    },
    completed: {
        backgroundColor: '#e0e0e0',
    },
    taskText: {
        fontSize: 16,
    },
    taskPressed: {
        backgroundColor: '#d8dee9',
    },
});

export default ToDoList;