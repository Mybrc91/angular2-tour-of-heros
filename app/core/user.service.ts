import { Injectable,Optional} from '@angular/core';
import { UserServiceConfig } from './user.service.config';

@Injectable()
export class UserService{
	userName = 'Cheng';
	constructor(@Optional() config: UserServiceConfig) {
  		if (config) { this.userName = config.userName; }
	}
}