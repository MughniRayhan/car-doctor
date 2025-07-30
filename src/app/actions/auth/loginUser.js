"use server";

import dbConnect, { collectionNamesObj } from "@/lib/dbConnect";
import bcrypt from 'bcrypt'

export const loginUser = async (payload) =>{
    const {email,password} = payload;
    const userCollection = await dbConnect(collectionNamesObj.usersCollection);
    const user = await userCollection.findOne({email});
    if(!user){
        return null
    }
    
    const isPassOk = bcrypt.compare(user.password, password);
    if(!isPassOk){
        return null
    }
    
    return user;
}