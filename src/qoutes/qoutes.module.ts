import { Module } from '@nestjs/common';
import { QoutesController } from './qoutes.controller';

@Module({
  controllers: [QoutesController]
})
export class QoutesModule {}
