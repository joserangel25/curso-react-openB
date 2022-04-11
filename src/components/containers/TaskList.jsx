// import React from 'react';
import { LEVEL } from '../../models/levels.enum';
import { Task } from '../../models/task.class';
import  TaskComponent  from '../pure/TaskComponent';

const TaskList = () => {
    const defaultTask = new Task("ejemplo", "este es la descripcion de ejemplo", false, LEVEL.NORMAL)
    const tareaUno = "222"
    return (
        <div>
            <div>
                <h1>Your task:</h1>
            </div>
            <TaskComponent task={defaultTask}></TaskComponent>
        </div>
    );
};

export default TaskList;