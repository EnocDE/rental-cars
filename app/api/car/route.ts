import { db } from "@/lib/db"
import { auth } from "@clerk/nextjs/server"
import { NextRequest, NextResponse } from "next/server"

export async function POST(req: NextRequest) {
  const { userId } = auth()
  const data = await req.json()

  try {
    if (!userId) {
      throw new NextResponse('Unauthorized', { status: 401 })
    }

    const res = await db.car.create({
      data: {
        userId,
        ...data
      }
    })

    return NextResponse.json(res)
  } catch (error) {
    console.log(error);
    return new NextResponse("Internal error", { status: 500 })
  }
}

