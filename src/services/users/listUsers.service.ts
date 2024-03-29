import { AppDataSource } from '../../data-source'
import { User } from '../../entities/user.entity'

const listUsersService = async(): Promise<User[]> => {

    const userRepository = AppDataSource.getRepository(User)

    const users = await userRepository.find()//o find sem parametros, retorna um array com tudo que estiver no banco

    return users

}

export default listUsersService