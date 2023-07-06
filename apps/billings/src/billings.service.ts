import { Injectable, Logger } from '@nestjs/common';

@Injectable()
export class BillingsService {
  private readonly logger = new Logger(BillingsService.name);
  async bill(data: any) {
    this.logger.log('billing', data);
  }
}
