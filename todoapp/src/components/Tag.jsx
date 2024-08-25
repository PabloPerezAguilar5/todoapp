import PropTypes from 'prop-types';
import "./Tag.css";

const Tag = ({ tagName, selectTag, selected }) => {
    const tagStyle = {
        Ingles: { backgroundColor: "#fda821" },
        Historia: { backgroundColor: "#15d4c8" },
        Matematicas: { backgroundColor: "#ffd12c" },
        Geografia: { backgroundColor: "#4cdafc" },
        default: { backgroundColor: "#f9f9f9" },
    };
    return (
        <button
            type='button'
            className='tag'
            style={selected ? tagStyle[tagName] : tagStyle.default}
            onClick={() => selectTag(tagName)}>
            {tagName}
        </button>
    );
};

// Validación de PropTypes
Tag.propTypes = {
    tagName: PropTypes.string.isRequired,    // 'tagName' es requerido y debe ser un string
    selectTag: PropTypes.func.isRequired,    // 'selectTag' es requerido y debe ser una función
    selected: PropTypes.bool.isRequired,     // 'selected' es requerido y debe ser un booleano
};

export default Tag;
