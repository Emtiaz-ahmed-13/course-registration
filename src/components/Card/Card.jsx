import PropTypes from 'prop-types';

function Card({ course, onClick }) {
    const { courseTitle, description, price, credit, image } = course;

    return (
        <div className="p-4 border rounded-lg shadow-md w-full cursor-pointer" onClick={onClick}>
            <img className="w-full mb-4" src={image} alt={courseTitle} />
            <h2 className="text-xl font-bold mb-2">Course Title: {courseTitle}</h2>
            <p className="text-gray-700 mb-4">Description: {description}</p>
            <p className="text-gray-900 font-semibold">Price: ${price}</p>
            <p className="text-gray-600">Credit: {credit}</p>
        </div>
    );
}

Card.propTypes = {
  course: PropTypes.shape({
    courseTitle: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    credit: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired
  }).isRequired,
  onClick: PropTypes.func.isRequired
};

export default Card;
