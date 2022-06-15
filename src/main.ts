import { RequestMethod, ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';
import { config } from './config';


async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors({
    credentials: true,
  });

  app.setGlobalPrefix('api/v1', {
    exclude: [{ path: '/', method: RequestMethod.GET }],
  });

  // Swagger setup
  const docConfig = new DocumentBuilder()
    .setTitle('Aza-Finance')
    .setDescription('Aza-Finance API description')
    .setVersion('1.0')
    .addBearerAuth(
      { type: 'http', scheme: 'bearer', bearerFormat: 'JWT' },
      'access-token',
    )
    .build();
  const document = SwaggerModule.createDocument(app, docConfig);
  SwaggerModule.setup('/docs', app, document);
  
  // Server Listening on port
  const PORT = config.PORT || 5000;
  await app.listen(PORT);
  console.log("Server listening to http://localhost:"+PORT)
}

bootstrap();