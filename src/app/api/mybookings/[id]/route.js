import dbConnect, { collectionNamesObj } from "@/lib/dbConnect";
import { ObjectId } from "mongodb";
import { revalidatePath } from "next/cache";
import { NextResponse } from "next/server"

export const GET = async (req, {params})=>{
    const p = await params;
    const bookingCollection =await dbConnect(collectionNamesObj.bookingCollection);
            const singleBooking = await bookingCollection.findOne({_id: new ObjectId(p.id)});
   return NextResponse.json(singleBooking)
}

export const PATCH = async (req, {params})=>{
    const p = await params;
    const bookingCollection =await dbConnect(collectionNamesObj.bookingCollection);
    const query = {_id: new ObjectId(p.id)};
    const body = await req.json();

    const filter = {
           $set: {...body}
    }

    const option = {
        upsert: true
    }
   
    const updateRes = await bookingCollection.updateOne(query,filter,option);
     revalidatePath("/mybookings")
    return NextResponse.json(updateRes)
}