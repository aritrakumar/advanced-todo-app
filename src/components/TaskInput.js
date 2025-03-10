import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

const TaskInput = () => {
    const [task, setTask] = useState('');
    const dispatch = useDispatch();

    const handleAddTask = () => {
        if (task.trim()) {
            dispatch({ type: 'ADD_TASK', payload: { id: Date.now(), text: task } });
            setTask('');
        }
    };

    return (
        <div>
            <input type="text" value={task} onChange={(e) => setTask(e.target.value)} />
            <button onClick={handleAddTask}>Add Task</button>
        </div>
    );
};

export default TaskInput;
