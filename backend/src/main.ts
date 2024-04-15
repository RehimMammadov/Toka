import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { PrismaService } from 'prisma/prisma.service';
import * as dotenv from "dotenv"

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    origin: "http://localhost:4200",
    credentials: true,
    exposedHeaders: "set-cookies"
  })

  app.setGlobalPrefix('api');

  dotenv.config()

  const prismaService = app.get(PrismaService)
  await prismaService.enableShutdownHooks(app)

  await app.listen(8000);
}
bootstrap();
