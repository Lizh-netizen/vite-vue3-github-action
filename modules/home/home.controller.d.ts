import { HomeService } from './home.service';
import { CreateHomeDTO } from './dto/create-home.dto';
import { UpdateHomeDto } from './dto/update-home.dto';
export declare class HomeController {
    private homeService;
    constructor(homeService: HomeService);
    find(page: number, size: number): Promise<{
        data: {
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
        }[];
        total: number;
    }>;
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
    delete1(): string;
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
