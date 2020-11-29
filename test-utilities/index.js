export const cloneCourse = (course) => {
    const stats = { ...course.stats };
    const result = { ...course, stats };
    return result;
  }