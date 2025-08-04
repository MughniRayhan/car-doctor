import { authOptions } from "@/lib/authOptions";
import dbConnect, { collectionNamesObj } from "@/lib/dbConnect";
import { ObjectId } from "mongodb";
import { getServerSession } from "next-auth";
import { revalidatePath } from "next/cache";
import { NextResponse } from "next/server";


export const DELETE = async (req, {params}) =>{
    const p = params;
  const  bookingCollection = await dbConnect(collectionNamesObj.bookingCollection);

    const session = await getServerSession(authOptions);
    const currentBooking = await bookingCollection.findOne({_id: new ObjectId(p.id)})

    const isOwnerOk = session?.user?.email == currentBooking.email;

  if(isOwnerOk){
    const deleteBooking = await bookingCollection.deleteOne({_id: new ObjectId(p.id)});
    revalidatePath("/mybookings")
    return NextResponse.json(deleteBooking);
  }
  else{
    return NextResponse.json({success: false, message: "Forbidden Access"}, {status:401})
  }
}

export const GET = async (req, {params}) =>{
    const p = await params;
        const servicesCollection = await dbConnect(collectionNamesObj.servicesCollection);
        const data = await servicesCollection.findOne({_id: new ObjectId(p.id)})

        return NextResponse.json(data)
}