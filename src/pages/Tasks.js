import React from 'react';
import TaskInput from '../components/TaskInput';
import TaskList from '../components/TaskList';
import WeatherDisplay from '../components/WeatherDisplay';

const Tasks = () => (
    <>
        <TaskInput />
        <TaskList />
        <WeatherDisplay />
    </>
);

export default Tasks;
