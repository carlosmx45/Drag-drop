import React from 'react';
import Task from '../../components/Task/Task';
import useDataFetching from '../../Hooks/useDataFetching';

import './Backlog.css'

function Backlog(props) {

    const [loading, error, task] = useDataFetching('https://my-json-server.typicode.com/carlosmx45/myAPI/tasks');

    return (
        <div className = 'Backlog-wrapper'>
            <h2>Backlog</h2>
            <div className = 'Task-wrapper'>
                {loading || error ? (
                    <spam>{error || 'Loading...'}</spam>
                ):(
                    task.map((task) => (
                        <Task
                            key={task.id}
                            title={task.title}
                            body={task.body}
                        />
                    ))
                )}
            </div>
        </div>
    );
}

export default Backlog;