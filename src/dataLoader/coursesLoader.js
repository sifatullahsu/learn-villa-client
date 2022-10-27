export const coursesLoader = async () => {
  const coursesData = await fetch('https://learn-villa-server.vercel.app/courses');
  const courses = await coursesData.json();

  return courses;
}