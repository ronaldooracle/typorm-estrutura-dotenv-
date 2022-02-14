import { Injectable } from '@nestjs/common';
import * as path from 'path';
import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { ConfigService } from '../config/service';

@Injectable()
export class TypeormConfigService {
  constructor(private readonly configService: ConfigService) {}
  createTypeOrmOptions(connectionName?: string): TypeOrmModuleOptions {
    const CONNECTIONS = {
      default: {
        type: 'postgress',
        host: this.configService.get('POSTGRESS_HOST'),
        port: parseInt(this.configService.get('POSTGRESS_PORT')),
        username: this.configService.get('POSTGRESS_USERNAME'),
        password: this.configService.get('POSTGRESS_PASSWORD'),
        database: this.configService.get('POSTGRESS_DATABASE'),
        schema: this.configService.get('POSTGRESS_SCHEMA'),
        entities: [path.join(__dirname, '/../entities/*.entity.{ts,js}')],
        synchronize: false,
        logging: true,
        migrations: [
          path.join(__dirname, '/../shared/typeorm/migrations/*.{ts,js}'),
        ],
        cli: {
          entitiesDir: 'src/entities',
          migrationsDir: 'src/shared/typeorm/migrations',
        },
        migrationsRun: false,
      },
      mysql: {
        name: 'mysql',
        type: 'mysql',
        host: this.configService.get('MY_SQL_HOST'),
        port: parseInt(this.configService.get('MY_SQL_PORT')),
        username: this.configService.get('MY_SQL_USERNAME'),
        password: this.configService.get('MY_SQL_PASSWORD'),
        database: this.configService.get('MY_SQL_DATABASE'),
        entities: [path.join(__dirname, '/../entities/mysql/*.entity.{ts,js}')],
        synchronize: false,
      },
    };
    return CONNECTIONS[connectionName]
      ? CONNECTIONS[connectionName]
      : CONNECTIONS.default;
  }
}
