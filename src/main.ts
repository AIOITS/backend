import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'
import { ValidationPipe } from '@nestjs/common'
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger'

async function bootstrap() {
  const app = await NestFactory.create(AppModule)
  const corsOptions = {
    origin: '*',
    optionsSuccessStatus: 200,
  }
  const config = new DocumentBuilder()
    .addBearerAuth()
    .setTitle('AIOITS Documentation')
    .setDescription('The AIOITS API description')
    .setVersion('1.0')
    .addTag('AIOITS')
    .build()
  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
    }),
  )
  app.enableCors(corsOptions)

  const document = SwaggerModule.createDocument(app, config)
  SwaggerModule.setup('docs', app, document)
  await app.listen(8080)
}
bootstrap()
