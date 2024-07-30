import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Cards from './components/Cards/Cards';
import Summary from './components/Summary/Summary';

function App() {
  const [selectedCourses, setSelectedCourses] = useState([]);
  const [totalCreditHours, setTotalCreditHours] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

  const handleCardClick = (course) => {
    const courseCredit = parseInt(course.credit);
    const newTotalCreditHours = totalCreditHours + courseCredit;

    if (newTotalCreditHours > 20 || newTotalCreditHours < 0) {
      toast.error('You cannot add this course. Total credit hours must be between 0 and 20.');
      return;
    }

    

    let isCourseSelected = false;

    for (const selectedCourse of selectedCourses) {
      if (selectedCourse.courseTitle === course.courseTitle) {
        isCourseSelected = true;
        break; // Exit the loop early if the course is found
      }
    }
    
    if (!isCourseSelected) {
      const updatedCourses = [...selectedCourses, course];
    
      let updatedTotalCreditHours = 0;
      let updatedTotalPrice = 0;
    
      for (const updatedCourse of updatedCourses) {
        updatedTotalCreditHours += parseInt(updatedCourse.credit);
        updatedTotalPrice += updatedCourse.price;
      }
    
      setSelectedCourses(updatedCourses);
      setTotalCreditHours(updatedTotalCreditHours);
      setTotalPrice(updatedTotalPrice);
    }
    
  };

  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold mb-6">Course Registration</h1>
      <div className="grid grid-cols-3 gap-6 w-full">
        <Cards onCardClick={handleCardClick} />
      </div>
      {selectedCourses.length > 0 && (
        <div className="w-full max-w-md mt-6">
          <Summary 
            creditHoursRemaining={20 - totalCreditHours} 
            courses={selectedCourses.map(course => course.courseTitle)} 
            totalCreditHours={totalCreditHours} 
            totalPrice={totalPrice} 
          />
        </div>
      )}
      <ToastContainer />
    </div>
  );
}

export default App;
