import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';

import { AppModule } from './app.module';
import { CustomConfigService } from './config/config.service';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const appConfig: CustomConfigService =
    app.get<CustomConfigService>(CustomConfigService);

  await app.listen(appConfig.app_port, () => {
    Logger.log(`http://${appConfig.app_host}:${appConfig.app_port}/api`, 'Doc');
  });
}
bootstrap().then();
