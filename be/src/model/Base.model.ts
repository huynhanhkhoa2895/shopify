import mongoose, {Model, Schema, Types} from "mongoose";
import {InjectModel} from "@nestjs/mongoose";
import {Admin, AdminDocument} from "../schema/admin";

export default class {
    schema : Schema;
    constructor(private Model: Model<any>) {
    }
    create(doc : any){
        // const model : Model<any> = mongoose.model(this.modelName,this.schema);
        // const doc = new model();
        // // for(const field of Object.keys(data)){
        // //     doc[field] = data[field]
        // // }
        // doc.deviceId = "test"
        // doc.cartId = "cartID 2"
        // return doc.save
        const created = new this.Model(doc);
        return created.save();
    }
    getWithId(id : Types.ObjectId){
        return this.Model.findById(id)
    }
    getWithData(filter : object){
        return this.Model.findOne(filter)
    }
    getAll(filter : object = {}){
        return this.Model.find(filter).then((data : any)=>{
            return data
        }).catch((err : any)=>{
            return err
        })
    }
}