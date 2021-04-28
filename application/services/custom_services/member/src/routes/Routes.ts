import { Request, Response, NextFunction } from "express";
import { memberController } from '../controller/memberController';


export class Routes {
    private member: memberController = new memberController();
    
    public routes(app): void {
          app.route('/health/entity-service').get((req: Request, res: Response) => {
            res.status(200).send({
                status: 'up'
            })
        })
        app.route('/member').post(this.member.GpCreate);
     }

}