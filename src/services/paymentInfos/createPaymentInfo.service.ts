import { AppDataSource } from '../../data-source'
import { PaymentInfo } from '../../entities/paymentInfo.entity'
import { User } from '../../entities/user.entity'
import { IPaymentInfoRequest } from '../../interfaces/paymentInfo.interfaces'

const createPaymentInfoService = async({code, dueData, name, number}: IPaymentInfoRequest, id: string): Promise<PaymentInfo> => {

    const paymentInfoRepository = AppDataSource.getRepository(PaymentInfo)//Acessando a tabela PaymentInfo
    const userRepository = AppDataSource.getRepository(User)//Acessando a tabela usuario

    const paymentInfo = paymentInfoRepository.create({
        code,
        dueData,
        name,
        number
    })//Criando um paymenteInfo    
    await paymentInfoRepository.save(paymentInfo)//salvando as informações

    await userRepository.update(
        id,
        {
            paymentInfo: paymentInfo
        }
    )

    return paymentInfo

}

export default createPaymentInfoService