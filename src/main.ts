import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';

import { AppModule } from './app.module';
import { SwaggerConfig } from './config/openapi';
import { APP_PREFIX, APP_PORT } from './config/constants';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix(APP_PREFIX);
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
    }),
  );

  // Swagger config definition
  const swagger = new SwaggerConfig();
  const document = swagger.createDocument(app);
  swagger.setup(document, app);

  await app.listen(APP_PORT);
}
bootstrap();
