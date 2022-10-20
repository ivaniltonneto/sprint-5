import { Request, Response } from 'express'
import { IUserRequest, IUserUpdateRequest } from '../interfaces/users.interfaces'
import createUserService from '../services/users/createUser.service'
import listUsersService from '../services/users/listUsers.service'
import updateUserService from '../services/users/updateUser.service'
import { instanceToPlain } from 'class-transformer'
import { User } from '../entities/user.entity'
import deleteUserService from '../services/users/deleteUser.service'

export const createUserController = async (req: Request, res: Response) => {
    const user: IUserRequest = req.body
    const createdUser = await createUserService(user)
    return res.json(instanceToPlain(createdUser))
}

export const listUsersController = async(req: Request, res: Response) => {
    const users = await listUsersService()
    return res.json(instanceToPlain(users))//instanceToPlain remove o campo de password do retorno
}

export const updateUserController = async (req: Request, res: Response) => {
    const user: IUserUpdateRequest = req.body
    const id: string = req.params.id
    const updatedUser = await updateUserService(user, id)
    return res.json(updatedUser)
}

export const deleteUserController = async(req: Request, res: Response) => {

    const id = req.params.id
    await deleteUserService(id)
    return res.status(204).send()

}

