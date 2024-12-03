import React from 'react';
import { StyleSheet, View, TextInput, Button } from 'react-native';

function ToDoForm ({ addTask }: { addTask: (taskText: string) => void }) {
    const [taskText, setTaskText] = React.useState('');
    const handleAddTask = () => {
        addTask(taskText);
        setTaskText('');
    };

    return (
        <View style={styles.form}>
            <TextInput
                style={styles.input}
                placeholder="Add a new task..."
                onChangeText={(text) => setTaskText(text)}
                value={taskText}
                onSubmitEditing={handleAddTask} // make enter work too instead of clicking button
            />
            <View style={styles.buttonContainer}>
                <Button title="Add" color="#8fbcbb" onPress={handleAddTask} />
            </View>
        </View>
    )};

const styles = StyleSheet.create({
    form: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginHorizontal: 20,
        padding: 20,
        backgroundColor: '#8fbcbb',
        borderTopWidth: 1,
        borderTopColor: '#e0e0e0',
        borderRadius: 35,

    },
    input: {
        flex: 1,
        borderWidth: 0.5,
        borderColor: '#d8dee9',
        backgroundColor: '#90c1c0',
        paddingHorizontal: 10,
        paddingVertical: 5,
        marginRight: 10,
        borderRadius: 35,
    },
    buttonContainer: {
        overflow: 'hidden',
        borderRadius: 35,
    }
});

export default ToDoForm;