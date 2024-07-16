import { NextResponse } from "next/server"
import Stripe from "stripe"

import { db } from "@/lib/db"
import { stripe } from "@/lib/stripe"
import { auth } from "@clerk/nextjs/server"

const corsHeaders = {
  "Access-Controll-Allow-Origin": "*",
  "Access-Controll-Allow-Method": "GET, POST, PUT, DELETE, OPTIONS",
  "Access-Controll-Allow-Headers": "Content-Type, Authorization",
}

export async function POST(req: Request) {
  const { userId } = auth()
  const { carId, priceDay, startDate, endDate, carName } = await req.json()

  if (!userId) throw new NextResponse("Unauthorized", { status: 401 })

  if (!carId) throw new NextResponse("Card id required", { status: 400 })

  // Crear datos de la compra
  const start = new Date(startDate)
  const end = new Date(endDate)

  const daysNumber = Math.ceil((end.getTime() - start.getTime()) / (24 * 60 * 60 * 1000))

  const totalAmount = Number(priceDay) * daysNumber

  const totalAmoutStripe = Number(priceDay) * 100 * daysNumber

  // Objeto con información de la compra para stripe
  const line_items: Stripe.Checkout.SessionCreateParams.LineItem[] = [
    {
      quantity: 1,
      price_data: {
        currency: "MXN",
        product_data: {
          name: carName
        },
        unit_amount: totalAmoutStripe
      }
    }
  ]

  // Crear registro y guardarlo en la bdd
  const order = await db.order.create({
    data: {
      carId,
      carName,
      userId,
      status: "confirmed",
      totalAmount: totalAmount.toString(),
      orderDate: startDate,
      orderEndDate: endDate
    }
  })

  // Crear sesión de stripe
  const session = await stripe.checkout.sessions.create({
    line_items,
    mode: "payment",
    billing_address_collection: "required",
    phone_number_collection: {
      enabled: true
    },
    success_url: `${process.env.NEXT_PUBLIC_FRONTEND_STORE_URL}/order-confirmation`,
    cancel_url: `${process.env.NEXT_PUBLIC_FRONTEND_STORE_URL}/order-error`,
    metadata: {
      orderId: order.id,
      carId,
      startDate,
      endDate,
      daysNumber
    }
  })

  return NextResponse.json({ url: session.url }, { headers: corsHeaders })
}