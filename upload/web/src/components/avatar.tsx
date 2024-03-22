import { api } from "@/lib/api"
import Image from "next/image"
import Cookie from 'js-cookie'

interface AvatarProps {
  id: string,
  name: string,
  avatarUrl: string
}

export function Avatar({ avatarUrl, id, name }: AvatarProps) {
  async function handleLogin() {
    try {
      const response = await api.post('/login', {
        id,
        name,
        avatar_url: avatarUrl,
      })
      if (response.status == 200) {
        const { token } = response.data
        Cookie.set('user_data', token, { expires: 7, path: '/' })
        window.location.href = '/'
      }
    } catch (error) {
      console.error('Erro ao fazer login', error)
    }
  }

  return (
    <button onClick={handleLogin}>
      <Image
        className="rounded-full border-4 border-transparent border-gradient hover:opacity-75"
        src={avatarUrl}
        width={160}
        height={160}
        alt="Avatar do usuário"
      />
    </button>
  )
}