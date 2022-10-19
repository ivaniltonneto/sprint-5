import { Request, Response, NextFunction } from "express";

const ensureIsAdmMidleware =async (req: Request, res:Response, next:NextFunction) => {
    if(!req.user.isAdm){
        return res.status(403).json({
            message: 'User not is admin'
        })
    }

    return next()
}

export default ensureIsAdmMidleware