'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function CreateThreadForm() {
  const [title, setTitle] = useState('')
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      const response = await fetch('/api/threads', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ title }),
      })

      if (response.ok) {
        router.push('/')
        router.refresh()
      } else {
        console.error('スレッド作成に失敗しました')
      }
    } catch (error) {
      console.error('エラー:', error)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="w-full p-2 border rounded-lg"
        placeholder="スレッドタイトルを入力してください"
        required
      />
      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-lg">
        スレッドを作成
      </button>
    </form>
  )
}
