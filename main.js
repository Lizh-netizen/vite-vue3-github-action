"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const nest_winston_1 = require("nest-winston");
const common_1 = require("@nestjs/common");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.useLogger(app.get(nest_winston_1.WINSTON_MODULE_NEST_PROVIDER));
    app.setGlobalPrefix('/api');
    app.useGlobalPipes(new common_1.ValidationPipe());
    app.enableVersioning({
        type: common_1.VersioningType.URI,
    });
    await app.listen(3000);
}
bootstrap();
//# sourceMappingURL=main.js.map