import PropTypes from "prop-types";
import "./TaskCard.css";
import Tag from "./Tag";
import deleteIcon from "../assets/delete.png";

const TaskCard = ({ title, tags, handleDelete, index }) => {
    return (
        <article className='task_card'>
            <p className='task_text'>{title}</p>

            <div className='task_card_bottom_line'>
                <div className='task_card_tags'>
                    {tags.map((tag, idx) => (
                        <Tag key={idx} tagName={tag} selected />
                    ))}
                </div>
                <div
                    className='task_delete'
                    onClick={() => handleDelete(index)}>
                    <img src={deleteIcon} className='delete_icon' alt='' />
                </div>
            </div>
        </article>
    );
};

// Validación de PropTypes
TaskCard.propTypes = {
    title: PropTypes.string.isRequired,         // 'title' es requerido y debe ser un string
    tags: PropTypes.arrayOf(PropTypes.string).isRequired,  // 'tags' es un array de strings y es requerido
    handleDelete: PropTypes.func.isRequired,    // 'handleDelete' es requerido y debe ser una función
    index: PropTypes.number.isRequired,         // 'index' es requerido y debe ser un número
};

export default TaskCard;
