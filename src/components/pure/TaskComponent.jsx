import React from 'react-dom';
import PropTypes from 'prop-types';
import { Task } from '../../models/task.class.js';

const TaskComponent = ({task}) => {
    return (
        <div>

            <h2>Nombre: { task.name }</h2>
            <p>Descipcion: { task.description }</p>
            <h4>Tipo de tarea: { task.level }</h4>
            <h5>
                La tarea está: { task.completed ? "Completed" : "Pending" }
            </h5>
        </div>
    );
}
export default TaskComponent;

TaskComponent.propTypes = {
    task: PropTypes.instanceOf(Task)
}

