import {Request, Response} from 'express'
import { IPaymentInfoRequest } from '../interfaces/paymentinfo.interface'
import createPaymentInforService from '../services/paymentinfos/createPaymentInfos.service'

export const createPaymentInfoController = async (req: Request, res:Response) =>{

    const data: IPaymentInfoRequest = req.body
    const id = req.user.id
    const createPaymenteInfo = await createPaymentInforService(data, id)
    return res.status(201).json(createPaymenteInfo)
}