import { useState } from 'react';import PropTypes from 'prop-types';
import "./TaskForm.css";
import Tag from "./Tag";

const TaskForm = ({ setTasks }) => {
  const [taskData, setTaskData] = useState({
    task: "",
    status: "todo",
    tags: [],
  });

  console.log("Task Data :", taskData);

  const checkTag = (tag) => {
    return taskData.tags.some((item) => item === tag);
  };

  const selectTag = (tag) => {
    if (taskData.tags.some((item) => item === tag)) {
      const filterTags = taskData.tags.filter((item) => item !== tag);
      setTaskData((prev) => {
        return { ...prev, tags: filterTags };
      });
    } else {
      setTaskData((prev) => {
        return { ...prev, tags: [...prev.tags, tag] };
      });
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setTaskData((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(taskData);
    setTasks((prev) => {
      return [...prev, taskData];
    });
    setTaskData({
      task: "",
      status: "todo",
      tags: [],
    });
  };

  return (
    <header className="app_header">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="task"
          value={taskData.task}
          className="task_input"
          placeholder="Ingresa una tarea"
          onChange={handleChange}
        />

        <div className="task_form_bottom_line">
          <div>
            <Tag
              tagName="Ingles"
              selectTag={selectTag}
              selected={checkTag("Ingles")}
            />
            <Tag
              tagName="Historia"
              selectTag={selectTag}
              selected={checkTag("Historia")}
            />
            <Tag
              tagName="Matematicas"
              selectTag={selectTag}
              selected={checkTag("Matematicas")}
            />
            <Tag
              tagName="Geografia"
              selectTag={selectTag}
              selected={checkTag("Geografia")}
            />
          </div>

          <div>
            <select
              name="status"
              value={taskData.status}
              className="task_status"
              onChange={handleChange}
            >
              <option value="todo">Para hacer</option>
              <option value="doing">Haciendo</option>
              <option value="done">Hecho</option>
            </select>
            <button type="submit" className="task_submit">
              Agregar
            </button>
          </div>
        </div>
      </form>
    </header>
  );
};

TaskForm.propTypes = {
  setTasks: PropTypes.func.isRequired
};

export default TaskForm;
