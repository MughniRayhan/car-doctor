import dbConnect, { collectionNamesObj } from "@/lib/dbConnect";
import { ObjectId } from "mongodb";
import { NextResponse } from "next/server"

export const GET = async (req, {params})=>{
    const p = await params;
    const bookingCollection =await dbConnect(collectionNamesObj.bookingCollection);
            const singleBooking = await bookingCollection.findOne({_id: new ObjectId(p.id)});
   return NextResponse.json(singleBooking)
}