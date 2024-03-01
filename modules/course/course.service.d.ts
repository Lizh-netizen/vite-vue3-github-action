import { UpdateTypeDto } from './dto/update-type.dto';
import { PrismaService } from '../../prisma/prisma.service';
import { CreateTypeDto } from './dto/create-type.dto';
import { CreateTagDto } from './dto/create-tag.dto';
import { UpdateTagDto } from './dto/update-tag.dto';
import { CreateCourseDto, CreateCourseTagInterdace } from './dto/create-course.dto';
import { CreateCoursesOnTagDto } from './dto/create-course-tag.dto';
export declare class CourseService {
    private prisma;
    constructor(prisma: PrismaService);
    createCourse(dto: CreateCourseDto | CreateCourseTagInterdace): import("@prisma/client").Prisma.Prisma__CoursesClient<{
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
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
    createCourseOnTag(dto: CreateCoursesOnTagDto | CreateCoursesOnTagDto[]): import("@prisma/client").Prisma.PrismaPromise<import("@prisma/client").Prisma.BatchPayload> | import("@prisma/client").Prisma.Prisma__CoursesOnTagsClient<{
        id: number;
        courseId: number;
        tagId: number;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
    createTag(dto: CreateTagDto): import("@prisma/client").Prisma.Prisma__CourseTagsClient<{
        id: number;
        name: string;
        typeId: number;
        order: number;
        status: number;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
    updateTag(dto: UpdateTagDto): import("@prisma/client").Prisma.Prisma__CourseTagsClient<{
        id: number;
        name: string;
        typeId: number;
        order: number;
        status: number;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
    getTag(): import("@prisma/client").Prisma.PrismaPromise<({
        types: {
            id: number;
            name: string;
            order: number;
            status: number;
        };
    } & {
        id: number;
        name: string;
        typeId: number;
        order: number;
        status: number;
    })[]>;
    deleteTag(id: any): import("@prisma/client").Prisma.Prisma__CourseTagsClient<{
        id: number;
        name: string;
        typeId: number;
        order: number;
        status: number;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
    createType(dto: CreateTypeDto): import("@prisma/client").Prisma.Prisma__CourseTypesClient<{
        id: number;
        name: string;
        order: number;
        status: number;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
    updateType(dto: UpdateTypeDto): import("@prisma/client").Prisma.Prisma__CourseTypesClient<{
        id: number;
        name: string;
        order: number;
        status: number;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
    getType(id: number): import("@prisma/client").Prisma.PrismaPromise<({
        tags: {
            id: number;
            name: string;
            typeId: number;
            order: number;
            status: number;
        }[];
    } & {
        id: number;
        name: string;
        order: number;
        status: number;
    })[]>;
    deleteType(id: any): import("@prisma/client").Prisma.Prisma__CourseTypesClient<{
        id: number;
        name: string;
        order: number;
        status: number;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
}
