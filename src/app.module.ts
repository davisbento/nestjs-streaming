import { Module } from '@nestjs/common';
import { ConfigModule } from './infra/module/config/config.module';
import { ContentModule } from './module/content.module';

@Module({
  imports: [ConfigModule.forRoot(), ContentModule],
})
export class AppModule {}
