import { DynamicModule, Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { RmqService } from './rmq.service';

type RmqModuleOptions = {
  name: string;
};
@Module({
  providers: [RmqService],
  exports: [RmqService],
})
export class RmqModule {
  static register({ name }: RmqModuleOptions): DynamicModule {
    return {
      module: RmqModule,
      imports: [
        ClientsModule.registerAsync([
          {
            name,
            useFactory: async (configService: ConfigService) => ({
              transport: Transport.RMQ,
              options: {
                // urls: [configService.get<string>('RMQ_URI')],
                // queue: configService.get<string>(`RMQ_${name}_QUEUE`),

                urls: ['amqp://rabbitmq'],
                queue: 'billing',
              },
            }),
            inject: [ConfigService],
          },
        ]),
      ],
      exports: [ClientsModule],
    };
  }
}
