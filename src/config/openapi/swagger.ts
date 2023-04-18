import { INestApplication } from '@nestjs/common';
import { DocumentBuilder, OpenAPIObject, SwaggerModule } from '@nestjs/swagger';

import { SWAGGER_ENV } from 'src/config';

export class SwaggerConfig {
  private config;

  private readonly description: string = 'The node base API description';

  constructor() {
    this.config = new DocumentBuilder()
      .setTitle(SWAGGER_ENV.title)
      .setDescription(this.description)
      .setVersion(SWAGGER_ENV.version)
      .addBearerAuth()
      .build();
  }

  createDocument(app: INestApplication) {
    return SwaggerModule.createDocument(app, this.config);
  }

  setup(document: OpenAPIObject, app: INestApplication) {
    SwaggerModule.setup(SWAGGER_ENV.url, app, document);
  }
}
