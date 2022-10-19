import { Request, Response } from 'express';
import {
  IUserRequest,
  IUserUpdateRequest,
} from '../interfaces/users.interfaces';
import createUserService from '../services/users/createUser.service';
import listUsersService from '../services/users/listUsers.service';
import updateUserService from '../services/users/updateUsers.service';
import { instanceToPlain } from 'class-transformer';

const createUserController = async (req: Request, res: Response) => {
  const user: IUserRequest = req.body;
  const createdUser = await createUserService(user);
  return res.json(instanceToPlain(createdUser)); //instanceToPlain remove o campo de password do retorno
};

const listUsersController = async (req: Request, res: Response) => {
  const users = await listUsersService();
  return res.json(instanceToPlain(users));
};

const upadateUserController = async (req: Request, res: Response) => {
  const user: IUserUpdateRequest = req.body;
  const id: string = req.params.id;
  const updateUser = await updateUserService(user, id);
  return res.json(updateUser);
};

export { createUserController, listUsersController, upadateUserController };
