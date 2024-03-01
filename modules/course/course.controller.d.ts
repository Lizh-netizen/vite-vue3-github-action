import { CourseService } from './course.service';
import { CreateCourseWithTagDto } from './dto/create-course.dto';
export declare class CourseController {
    private courseService;
    constructor(courseService: CourseService);
    create(dto: CreateCourseWithTagDto): Promise<{
        id: number;
        title: string;
        subTitle: string;
        desc: string;
        coverId: number;
        author: number;
        originPrice: number;
        price: number;
        status: number;
        counts: number;
        order: number;
        detail: string;
        type: string;
        createdAt: Date;
        updatedAt: Date;
    }>;
}
