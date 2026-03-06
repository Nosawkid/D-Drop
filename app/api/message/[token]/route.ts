import connectDB from "@/lib/mongodb"
import Message from "@/models/Message"

export async function GET(
  req: Request,
  { params }: { params: Promise<{ token: string }> }
) {

  await connectDB()

  const { token } = await params

  const message = await Message.findOne({ token })

  if (!message) {
    return Response.json({ error: "Drop does not exist." })
  }

  if (message.status !== "ACTIVE") {
    return Response.json({
      error: "Transmission already retrieved. Dead drop wiped."
    })
  }

  const secret = message.message

  // overwrite message with gibberish
  message.message = "████████████████████████████████████"

  message.status = "DESTROYED"
  message.retrievedAt = new Date()

  await message.save()

  return Response.json({
    message: secret
  })
}