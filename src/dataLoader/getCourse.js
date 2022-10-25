export const getCourse = async (id) => {
  const courseData = await fetch(`http://localhost:5000/courses/${id}`);
  const course = await courseData.json();

  return course;
}