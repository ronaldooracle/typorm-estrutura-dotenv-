import * as fs from 'fs';
import * as path from 'path';
import { TypeormConfigService } from './config-service';
import { ConfigService } from '../config/service';

const configService = new ConfigService(
  `${path.join(
    __dirname,
    '../..',
    'envs',
    '.env.'.concat(process.env.NODE_ENV || 'local'),
  )}`,
);

fs.writeFileSync(
  './ormconfig.json',
  JSON.stringify(
    new TypeormConfigService(configService).createTypeOrmOptions('default'),
    null,
    2,
  ),
);
