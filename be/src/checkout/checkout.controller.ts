import { Controller, Get, Injectable } from '@nestjs/common';
import { CheckoutService } from './checkout.service';

@Controller('checkout')
@Injectable()
export class CheckoutController {
  constructor(private cs: CheckoutService) {}
  @Get()
  findAll(): string {
    console.log('test');
    this.cs.create();
    return 'This action returns all cats';
  }
}
