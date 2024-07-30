import PropTypes from 'prop-types';

function Summary({ creditHoursRemaining, courses, totalCreditHours, totalPrice }) {
    return (
        <div className="p-6 bg-white rounded-lg shadow-md">
            <h2 className="text-xl font-bold mb-4">Credit Hour Remaining: {creditHoursRemaining} hr</h2>
            <hr className="mb-4"/>
            <h3 className="text-lg font-semibold">Course Name</h3>
            <ul className="mb-4">
                {courses.map((course, index) => (
                    <li key={index} className="text-gray-700"> {index + 1} {course}</li>
                ))}
            </ul>
            <hr className="mb-4"/>
            <p className="text-gray-700 mb-2">Total Credit Hour: {totalCreditHours}</p>
            <p className="text-gray-700">Total Price: {totalPrice} USD</p>
        </div>
    );
}

Summary.propTypes = {
  creditHoursRemaining: PropTypes.number.isRequired,
  courses: PropTypes.arrayOf(PropTypes.string).isRequired,
  totalCreditHours: PropTypes.number.isRequired,
  totalPrice: PropTypes.number.isRequired
};

export default Summary;
