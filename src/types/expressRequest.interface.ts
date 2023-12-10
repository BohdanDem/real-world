import { Request } from 'express';

import { UserEntity } from '../database/entities/user.entity';

export interface ExpressRequestInterface extends Request {
  user?: UserEntity;
}
