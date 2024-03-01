import { HomeResources } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateHomeDTO } from './dto/create-home.dto';
import { UpdateHomeDto } from './dto/update-home.dto';
export declare class HomeService {
    private prisma;
    constructor(prisma: PrismaService);
    findMany(page?: number, size?: number): Promise<[HomeResources[], number]>;
    create(dto: CreateHomeDTO): import("@prisma/client").Prisma.Prisma__HomeResourcesClient<{
        id: number;
        title: string;
        subTitle: string;
        url: string;
        image: string;
        desc: string;
        module: string;
        type: string;
        icon: string;
        order: number;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
    update(dto: UpdateHomeDto): import("@prisma/client").Prisma.Prisma__HomeResourcesClient<{
        id: number;
        title: string;
        subTitle: string;
        url: string;
        image: string;
        desc: string;
        module: string;
        type: string;
        icon: string;
        order: number;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
    delete(id: number): Promise<{
        id: number;
        title: string;
        subTitle: string;
        url: string;
        image: string;
        desc: string;
        module: string;
        type: string;
        icon: string;
        order: number;
    }>;
}
