import { Request, Response } from 'express'
import { IPaymentInfoRequest } from '../interfaces/paymentInfo.interfaces'
import createPaymentInfoService from '../services/paymentInfos/createPaymentInfo.service'

const createPaymentInfoController = async(req: Request, res: Response) => {

    const data: IPaymentInfoRequest = req.body
    const id = req.user.id
    const createdPaymentInfo = await createPaymentInfoService(data, id)
    return res.status(201).json(createdPaymentInfo)

}

export { createPaymentInfoController }