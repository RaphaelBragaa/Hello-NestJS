import { Injectable } from '@nestjs/common';
import { Course } from './courses.entity';

@Injectable()
export class CoursesService {
  private courses: Course[] = [
    {
      id: 1,
      name: 'NesJS',
      description: 'Curso sobre o framework',
      tags: ['JS', 'NextJS', 'Prisma'],
    },
  ];

  findAll() {
    return this.courses;
  }

  findOne(id: number) {
    return this.courses.find((course) => course.id === id);
  }

  create(createCourseDTO: any) {
    this.courses.push(createCourseDTO);
  }

  update(id: number, updateCourseDTO: any) {
    const ExistingCourse = this.findOne(id);
    if (ExistingCourse) {
      const index = this.courses.findIndex((course) => course.id === id);
      this.courses[index] = {
        id,
        ...updateCourseDTO,
      };
    }
  }
  remove(id: number) {
    const index = this.courses.findIndex((course) => course.id === id);
    if (index >= 0) {
      this.courses.splice(index, 1);
    }
  }
}
