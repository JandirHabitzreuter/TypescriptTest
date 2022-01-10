import { Request, Response } from 'express';
import CreateCourseService from './CreateCourseService';


export function createCourse(request : Request, response: Response){

    CreateCourseService.execute({
        name: "Teste",
        educator : "Teste de Educator",
        duration : 100
    });

    return response.send();
}