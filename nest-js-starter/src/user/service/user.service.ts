import { Injectable } from '@nestjs/common';
import { Observable, from } from 'rxjs';
import { UserEntity } from '../models/user.entity';
import { UserI } from '../models/user.interface'
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm'

@Injectable()
export class UserService {

	constructor(
		@InjectRepository(UserEntity)
		private userRepository: Repository<UserEntity>
	) {}

		add(user: UserI): Observable<UserI> {
			return (from(this.userRepository.save(user)));
		}

		findAll() : Observable<UserI[]> {
			return (from(this.userRepository.find()));
		}
}
