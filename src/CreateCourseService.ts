

interface Course {
  name: string;
  duration? : number; // Atributo opção quando tem o ?
  educator:string;
}

class CreateCourseService{

  execute({name, duration = 8, educator} : Course){
      console.log(name, duration, educator);

  }
}

export default new CreateCourseService();