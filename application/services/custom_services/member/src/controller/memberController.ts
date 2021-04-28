import { Request, Response } from 'express';
import { memberService } from '../service/memberService';
import { CustomLogger } from '../config/Logger'
let member = new memberService();

export class memberController {
    
    constructor() { }
    
    public GpCreate(req: Request, res: Response) {
member.GpCreate(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into memberController.ts: GpCreate');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from memberController.ts: GpCreate');
    })}


}