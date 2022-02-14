import { Global, Module } from '@nestjs/common';
import { ConfigService } from './service';

@Global()
@Module({
  providers: [
    {
      provide: ConfigService,
      useValue: new ConfigService(
        `envs/.env.${process.env.NODE_ENV || 'local'}`,
      ),
    },
  ],
  exports: [ConfigService],
})
export class ConfigModule {}
