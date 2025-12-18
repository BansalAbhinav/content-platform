import { handleResponse } from "../helpers/helper";
import Resources from "../models/resource.models"

export const getAllResources= async (req,res)=>{
    const resouces = await Resources.find({});
    if(resouces?.length>0){
        handleResponse(res,200,"All Resource",resouces)
    }
}