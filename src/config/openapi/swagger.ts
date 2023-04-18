import { INestApplication } from '@nestjs/common';
import { DocumentBuilder, OpenAPIObject, SwaggerModule } from '@nestjs/swagger';

export class SwaggerConfig {
  private config;

  constructor() {
    this.config = new DocumentBuilder()
      .setTitle('Node Api document')
      .setDescription('The node base API description')
      .setVersion('1.0')
      .addBearerAuth()
      .build();
  }

  createDocument(app: INestApplication) {
    return SwaggerModule.createDocument(app, this.config);
  }

  setup(document: OpenAPIObject, app: INestApplication) {
    SwaggerModule.setup('api/docs', app, document);
  }
}
