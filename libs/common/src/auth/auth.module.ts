import * as cookieParser from 'cookie-parser';
import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { RmqModule } from '../rmq/rmq.module';

@Module({
  imports: [RmqModule.register({ name: 'auth' })],
  exports: [RmqModule],
})
export class AuthModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(cookieParser()).forRoutes('*');
  }
}
