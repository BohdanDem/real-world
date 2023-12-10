import { UserEntity } from '../../database/entities/user.entity';

export type UserType = Omit<UserEntity, 'hashPassword'>;
