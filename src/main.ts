import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';

import { AppModule } from './app.module';
import { SwaggerConfig } from './config';
import { SERVER_ENV } from './config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix(SERVER_ENV.prefix);
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
    }),
  );

  // Swagger config definition
  const swagger = new SwaggerConfig();
  const document = swagger.createDocument(app);
  swagger.setup(document, app);

  await app.listen(SERVER_ENV.port);
}
bootstrap();
