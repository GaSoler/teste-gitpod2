import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/router';
import { ArrowRight } from "lucide-react";

const ClaimUsernameFormSchema = z.object({
  username: z
    .string()
    .min(3, { message: 'O usuário deve ter pelo menos 3 letras.' })
    .regex(/^([a-z\\-]+)$/i, {
      message: 'O usuário pode ter apenas letras e hifens.',
    })
    .transform((username) => username.toLowerCase()),
})

type ClaimUsernameFormData = z.infer<typeof ClaimUsernameFormSchema>

export function ClaimUsernameForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ClaimUsernameFormData>({
    resolver: zodResolver(ClaimUsernameFormSchema),
  })

  const router = useRouter()

  async function handleClaimUsername(data: ClaimUsernameFormData) {
    const { username } = data;

    await router.push({ pathname: '/register', query: { username } })
    // await router.push(`/register?username=${username}`) // Same result
  }

  return (
    <>
      <form 
        onSubmit={handleSubmit(handleClaimUsername)} 
        className="grid grid-cols-[1fr,auto] gap-2 p-4 mt-4 bg-zinc-800 border border-zinc-700 rounded-lg"
      >
        <div className="flex items-center px-3 py-2 rounded-lg bg-zinc-900 box-border border-2 border-zinc-900 cursor-text focus-within:border-emerald-600">
          <span className="text-sm text-zinc-400">ignite.com/</span>
          <input type="text" placeholder="seu-usuário" className="text-sm text-zinc-50 bg-transparent w-full focus:outline-none placeholder:text-zinc-600" {...register('username')} />
        </div>
        <button type='submit' disabled={isSubmitting} className="flex items-center px-4 py-2 bg-emerald-600 rounded-lg gap-2 hover:brightness-110">
          Reservar
          <ArrowRight size={16} />
        </button>
      </form>
      <div className="mt-2">
        <p className="text-sm text-zinc-400">
          {errors.username
            ? errors.username.message
            : 'Digite o nome de usuário desejado'}
        </p>
      </div>
    </>
  )
}