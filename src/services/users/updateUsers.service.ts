import { hash } from 'bcrypt';
import { AppDataSource } from '../../data-source';
import { User } from '../../entities/user.entity';
import AppError from '../../errors/appError';
import { IUserUpdateRequest } from '../../interfaces/users.interfaces';

const updateUserService = async (
  { name, email, password }: IUserUpdateRequest,
  id: string
): Promise<IUserUpdateRequest> => {
  const userRepository = AppDataSource.getRepository(User); //Buscando no bancos de dados a tabela que estou passando como argumento.

  const findUser = await userRepository.findOneBy({ id }); //Buscando o usuario pelo id

  if (!findUser) {
    throw new AppError('User not found', 404);
  }

  await userRepository.update(id, {
    name: name ? name : findUser.name, //verificando se o campo "name" foi passado e vai ser alterado, senão vai manter o que já tinha "findUser.name"
    email: email ? email : findUser.email,
    password: password ? await hash(password, 10) : findUser.password,
  }); //Fazendo a alteração no usuario, com o metodo update do GetRepository

  const user = await userRepository.findOneBy({ id }); //Depois de feita a auteração acima, tenho que buscar novamente o meu usario modificado

  return user!;
};

export default updateUserService;
