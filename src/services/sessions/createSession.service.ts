import { AppDataSource } from '../../data-source'
import { User } from '../../entities/user.entity'
import { ISessionRequest } from '../../interfaces/session.interfaces'
import { compare } from 'bcrypt'
import jwt from 'jsonwebtoken'
import { AppError } from '../../errors/appError'
import 'dotenv/config'

const createSessionService = async ({email, password}: ISessionRequest): Promise<string> => {

    const userRepository = AppDataSource.getRepository(User)

    const user = await userRepository.findOneBy({
        email: email
    })//FindOneBy vai retornar apenas um usuario

    if(!user){
        throw new AppError('Invalid user or password', 401)
    }//Caso o usuario não seja encontrado

    const passwordMatch = await compare(password, user.password)///comparando a senha criptografada com a recebida através do "compare"

    if(!passwordMatch){
        throw new AppError('Invalid user or password', 401)
    }

    const token = jwt.sign({
            isAdm: user.isAdm
        },
        process.env.SECRET_KEY as string,//forçando a tipagem dele para string
        {
            expiresIn: '24h',
            subject: user.id//dono do token
        }
    )//Gerando o token

    return token

}

export default createSessionService