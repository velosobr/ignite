/**
 * name - string
 * duration - number
 * educator - string
 */


class CreateCourseService {
   execute(name: String, duration: number, educator: string){
      console.log(name, duration, educator);
      
   }
}

export default new CreateCourseService();