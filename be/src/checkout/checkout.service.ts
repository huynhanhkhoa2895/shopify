import { Inject, Injectable } from '@nestjs/common';
import ApiService from '../Services/api.service';

@Injectable()
export class CheckoutService {
  constructor(private apiService: ApiService) {}
  create() {
    // this.apiService.graphql();
  }
}
