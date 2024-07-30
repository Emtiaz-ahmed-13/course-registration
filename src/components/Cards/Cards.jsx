import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import Card from "../Card/Card";

function Cards({ onCardClick }) {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    fetch('data.json')
      .then(res => res.json())
      .then(data => setCourses(data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
      {courses.map(course => (
        <Card key={course.courseTitle} course={course} onClick={() => onCardClick(course)} />
      ))}
    </div>
  );
}

Cards.propTypes = {
  onCardClick: PropTypes.func.isRequired
};

export default Cards;
