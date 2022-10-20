import { AppDataSource } from '../../data-source'
import { User } from '../../entities/user.entity'
import { IUserRequest } from '../../interfaces/users.interfaces'
import { hash } from 'bcrypt'
import { AppError } from '../../errors/appError'

const createUserService = async ({name, email, isAdm, password}: IUserRequest): Promise<User> => {

    const userRepository = AppDataSource.getRepository(User)//o userRepository é o que vai ser ultilizado para manipular os nosso dados com o orm

    if(!password){
        throw new AppError('Password is missing')
    }//verificação pois o 'password' está como opcional 

    const hashedPassword = await hash(password, 10)

    const user = userRepository.create({
        name,
        email,
        isAdm,
        password: hashedPassword
    })//criando um novo usuario atraves do .create
    await userRepository.save(user)//salvando o usuario no database 

    return user

}

export default createUserService