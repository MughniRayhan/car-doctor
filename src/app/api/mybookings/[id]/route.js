import { authOptions } from "@/lib/authOptions";
import dbConnect, { collectionNamesObj } from "@/lib/dbConnect";
import { ObjectId } from "mongodb";
import { getServerSession } from "next-auth";
import { revalidatePath } from "next/cache";
import { NextResponse } from "next/server"

export const GET = async (req, {params})=>{
    const p = await params;
    const bookingCollection =await dbConnect(collectionNamesObj.bookingCollection);

     const session = await getServerSession(authOptions);
     const email = session?.user?.email
     const singleBooking = await bookingCollection.findOne({_id: new ObjectId(p.id)});

      const isOwnerOK = email === singleBooking?.email;

      if(isOwnerOK){

          return NextResponse.json(singleBooking)
      }
}

export const PATCH = async (req, {params})=>{
    const p = await params;
    const bookingCollection =await dbConnect(collectionNamesObj.bookingCollection);
    const query = {_id: new ObjectId(p.id)};
    const body = await req.json();

    const session = await getServerSession(authOptions);
    const email = session?.user?.email
    const currentBookingData = await bookingCollection.findOne(query)

    const isOwnerOK = email === currentBookingData?.email;

    if(isOwnerOK){

        const filter = {
               $set: {...body}
        }
    
        const option = {
            upsert: true
        }
       
        const updateRes = await bookingCollection.updateOne(query,filter,option);
         const updatedBooking = await bookingCollection.findOne(query);
         revalidatePath("/mybookings")
         return NextResponse.json({ success: true, updatedBooking });
  } else {
    return NextResponse.json({ message: "Forbidden Action" }, { status: 403 });
  }
}