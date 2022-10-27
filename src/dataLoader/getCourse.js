export const getCourse = async (id) => {
  const courseData = await fetch(`https://learn-villa-server.vercel.app/courses/${id}`);
  const course = await courseData.json();

  return course;
}