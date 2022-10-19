import { AppDataSource } from "../../data-source";
import PaymentInfo from "../../entities/paymentinfo.entity";
import { User } from "../../entities/user.entity";
import { IPaymentInfoRequest } from "../../interfaces/paymentinfo.interface";

const createPaymentInforService =async ({code, dueDate,name,number}: IPaymentInfoRequest, id: string): Promise<IPaymentInfoRequest> => {   

    const paymentinfoRepository = AppDataSource.getRepository(PaymentInfo)//Acessando a tabela PaymentInfo
    const UserRepository = AppDataSource.getRepository(User)//Acessando a tabela usuario

    const paymenteInfo = paymentinfoRepository.create({
        code,
        dueDate,
        name,
        number
    })//Creando um paymenteInfo    
    await paymentinfoRepository.save(paymenteInfo)//salvando as informações

    await UserRepository.update(id, {paymentinfo: paymenteInfo})  

    return paymenteInfo 
}

export default createPaymentInforService