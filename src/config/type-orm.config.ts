import * as path from 'node:path';

import { TypeOrmModuleAsyncOptions } from '@nestjs/typeorm';

import { CustomConfigModule } from './config.module';
import { CustomConfigService } from './config.service';

export const typeOrmConfig: TypeOrmModuleAsyncOptions = {
  imports: [CustomConfigModule],
  useFactory: (customConfigService: CustomConfigService) => {
    return {
      type: 'postgres',
      host: customConfigService.db_host,
      port: customConfigService.db_port,
      username: customConfigService.db_username,
      password: customConfigService.db_password,
      database: customConfigService.db_database,
      synchronize: false,
      entities: [path.join(__dirname + '/../**/*.entity.{js,ts}')],
    };
  },
  inject: [CustomConfigService],
};
