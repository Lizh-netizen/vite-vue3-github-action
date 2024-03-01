export declare class CreateCourseDto {
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
}
export declare class CreateCourseTagInterdace extends CreateCourseDto {
    tags: {
        create: Array<{
            tagId: number;
        }>;
    };
}
export declare class CreateCourseWithTagDto extends CreateCourseDto {
    tags: number[];
}
