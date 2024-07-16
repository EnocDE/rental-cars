import deleteImageFromUploadthing from "@/actions/deleteImageFromUploadthing";
import { db } from "@/lib/db";
import { auth } from "@clerk/nextjs/server";
import { NextRequest, NextResponse } from "next/server";


export async function PATCH(req: NextRequest, { params }: { params: { carId: string } }) {
  const { carId } = params
  const { userId } = auth()
  const data = await req.json()

  try {
    if (!userId) throw new NextResponse('Unauthorized', { status: 401 })

    const res = await db.car.update({
      where: {
        id: carId,
        userId
      },
      data: {
        ...data
      }
    })

    return NextResponse.json(res)
  } catch (error) {
    console.log(error);
    return new NextResponse("Internal error", { status: 500 })
  }
}

export async function DELETE(req: NextRequest, { params }: { params: { carId: string } }) {
  const { carId } = params
  const { userId } = auth()

  try {
    if (!userId) throw new NextResponse('Unauthorized', { status: 401 })

    const imageId = await db.car.findUnique({
      where: {
        id: carId,
        userId
      },
      select: {
        photo: true
      }
    })
    if (imageId?.photo) await deleteImageFromUploadthing(imageId?.photo);

    const res = await db.car.delete({
      where: {
        id: carId
      }
    })

    console.log(res);
    
    return NextResponse.json(res)
  } catch (error) {
    console.log(error);
    return new NextResponse("Internal error", { status: 500 })
  }
}

