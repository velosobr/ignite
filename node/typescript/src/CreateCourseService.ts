/**
 * name - string
 * duration - number
 * educator - string
 */

interface Course {
   name: String,
   duration?: number,
   educator: string
}
class CreateCourseService {
   execute({ name, duration, educator }: Course) {
      console.log(name, duration, educator);

   }
}

export default new CreateCourseService();