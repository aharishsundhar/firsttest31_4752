import * as mongoose from 'mongoose';
import memberModel from '../models/member';
import { CustomLogger } from '../config/Logger'


export class memberDao {
    private member = memberModel;
    constructor() { }
public GpCreate(memberData, callback){
new CustomLogger().showLogger('info', 'Enter into memberDao.ts: GpCreate')
let temp = new memberModel(memberData);
;
temp.save().then((result)	=>	{
new CustomLogger().showLogger('info', 'Exit from memberDao.ts: GpCreate');
callback(result);
}).catch((error)=>{
callback(error);
});}


}