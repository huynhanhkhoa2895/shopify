import mongoose, {Model, Schema, Types} from "mongoose";
import {InjectModel} from "@nestjs/mongoose";
import {Admin, AdminDocument} from "../schema/admin";

export default class {
    schema : Schema;
    constructor(private Model: Model<any>) {
    }
    create(doc : any){
        const created = new this.Model(doc);
        return created.save();
    }
    updateWithData(filter : object,doc : any){
        return this.Model.findOneAndUpdate(filter,doc).then((data : any)=>{
            return data
        }).catch((err : any)=>{
            return err
        })
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