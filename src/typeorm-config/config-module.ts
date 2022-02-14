import { Module } from '@nestjs/common';
import { TypeormConfigService } from './config-service';
import { ConfigModule } from '../config/module';

@Module({
  imports: [ConfigModule],
  providers: [TypeormConfigService],
  exports: [TypeormConfigService],
})
export class TypeormConfigModule {}
