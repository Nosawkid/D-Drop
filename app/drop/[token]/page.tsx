"use client"

import { useEffect, useState } from "react"
import { useParams } from "next/navigation"

export default function ViewMessage() {

  const { token } = useParams()

  const [message, setMessage] = useState("")
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(true)

  useEffect(() => {

    const getMessage = async () => {

      const res = await fetch(`/api/message/${token}`)
      const data = await res.json()

      if (data.error) {
        setError(data.error)
      } else {
        setMessage(data.message)
      }

      setLoading(false)
    }

    if (token) getMessage()

  }, [token])

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen text-white bg-zinc-950">
        Loading secret...
      </div>
    )
  }

  return (
    <section className="flex items-center justify-center min-h-screen px-6 bg-zinc-950">

      <div className="w-full max-w-xl p-8 border bg-zinc-900/50 border-zinc-800 rounded-3xl">

        <h1 className="mb-6 text-2xl font-bold text-center text-white">
          Secret Message
        </h1>

        {message && (
          <div className="p-4 text-emerald-400 border bg-zinc-950 border-zinc-800 rounded-xl">
            {message}
          </div>
        )}

        {error && (
          <div className="p-4 text-red-400 border bg-zinc-950 border-zinc-800 rounded-xl">
            {error}
          </div>
        )}

      </div>

    </section>
  )
}