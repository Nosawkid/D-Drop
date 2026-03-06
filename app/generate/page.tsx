"use client"

import { useState } from "react"

const Generate: React.FC = () => {

  const [message, setMessage] = useState("")
  const [link, setLink] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    const res = await fetch("/api/message", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ message })
    })

    const data = await res.json()

    const generatedLink = `${window.location.origin}/drop/${data.token}`

    setLink(generatedLink)
  }

  return (
    <section className="flex flex-col items-center justify-center min-h-[100vh] px-6 py-24 bg-zinc-950">
      <div className="w-full max-w-2xl">

        <div className="mb-10 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white md:text-4xl">
            Create a <span className="text-emerald-400">Secret</span>
          </h2>
        </div>

        <div className="p-6 border md:p-8 bg-zinc-900/50 border-zinc-800 rounded-3xl">

          <form className="flex flex-col gap-6" onSubmit={handleSubmit}>

            <textarea
              placeholder="Enter the sensitive information here..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full min-h-[200px] p-4 bg-zinc-950 border border-zinc-800 rounded-2xl text-zinc-100"
            />

            <button
              type="submit"
              className="px-8 py-3 text-sm font-semibold rounded-full text-zinc-950 bg-emerald-400"
            >
              Generate Secure Link
            </button>

          </form>

          {link && (
            <div className="mt-6 p-4 bg-zinc-950 border border-zinc-800 rounded-xl text-emerald-400 break-all">
              {link}
            </div>
          )}

        </div>
      </div>
    </section>
  )
}

export default Generate