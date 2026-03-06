import connectDB from "@/lib/mongodb"
import Message from "@/models/Message"

export async function POST(req: Request) {

  await connectDB()

  const body = await req.json()

  const token = crypto.randomUUID()

  const msg = await Message.create({
    token,
    message: body.message,
    status: "ACTIVE"
  })

  return Response.json({
    token: msg.token
  })
}