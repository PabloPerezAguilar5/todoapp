import PropTypes from 'prop-types';
import "./TaskColumn.css";
import TaskCard from "./TaskCard";

const TaskColumn = ({ title, icon, tasks, status, handleDelete }) => {
    return (
        <section className='task_column'>
            <h2 className='task_column_heading'>
                <img className='task_column_icon' src={icon} alt='' /> {title}
            </h2>

            {tasks.map(
                (task, index) =>
                    task.status === status && (
                        <TaskCard
                            key={index}
                            title={task.task}
                            tags={task.tags}
                            handleDelete={handleDelete}
                            index={index}
                        />
                    )
            )}
        </section>
    );
};

TaskColumn.propTypes = {
    title: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
    tasks: PropTypes.arrayOf(
        PropTypes.shape({
            task: PropTypes.string.isRequired,
            tags: PropTypes.arrayOf(PropTypes.string).isRequired,
            status: PropTypes.string.isRequired
        })
    ).isRequired,
    status: PropTypes.string.isRequired,
    handleDelete: PropTypes.func.isRequired
};

export default TaskColumn;
