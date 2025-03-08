import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

const TaskList = () => {
    const tasks = useSelector(state => state.tasks.tasks);
    const dispatch = useDispatch();

    return (
        <ul>
            {tasks.map(task => (
                <li key={task.id}>
                    {task.text}
                    <button onClick={() => dispatch({ type: 'DELETE_TASK', payload: task.id })}>Delete</button>
                </li>
            ))}
        </ul>
    );
};

export default TaskList;
