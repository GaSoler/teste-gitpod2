'use client'
import { useEffect, useState } from "react";
import { Avatar } from "./avatar";
import { api } from "@/lib/api";

interface User {
  id: string
  name: string
  avatarUrl: string
}

export function Hero() {
  const [users, setUsers] = useState<User[]>([])

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await api.get('/users')
        const fetchedUsers = response.data
        setUsers(fetchedUsers)
      } catch (error) {
        console.error('Erro ao buscar lista de usuários:', error)
      }
    }

    fetchUsers()
  }, [])
  
  return (
    <div className="mx-auto max-w-[420px] space-y-5 text-center lg:mx-0 lg:text-left">
      {/* Text Info */}
      {/* <div className="space-y-1">
        <h1 className="text-5xl font-bold leading-tight text-gray-50">
          Quem está acessando?
        </h1>
        <p className="text-lg leading-relaxed">
          Acesse um usuário para começar a guardar suas recordações ou espie as
          recordações do seu parceiro.
        </p>
      </div> */}
      <div className="flex items-center justify-center gap-3 self-stretch">
        {users.map((user) => (
          <Avatar
            key={user.id}
            avatarUrl={user.avatarUrl}
            id={user.id}
            name={user.name}
          />
        ))}
      </div>
    </div>
  )
}