import { Request, Response } from 'express';
import {memberDao} from '../dao/memberDao';
import { CustomLogger } from '../config/Logger'
let member = new memberDao();

export class memberService {
    
    constructor() { }
    
    public GpCreate(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into memberService.ts: GpCreate')
     const  memberData = req.body;
     member.GpCreate(memberData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from memberService.ts: GpCreate')
         callback(response);
         });
    }


}