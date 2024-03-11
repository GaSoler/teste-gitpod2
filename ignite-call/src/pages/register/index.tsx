import { NextSeo } from "next-seo";

import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';

import { MultiStep } from "@/components/multi-step";
import { ArrowRight } from "lucide-react";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { AxiosError } from "axios";
import { api } from "@/lib/axios";

const registerFormSchema = z.object({
  username: z
    .string()
    .min(3, { message: 'O usuário deve ter pelo menos 3 letras.' })
    .regex(/^([a-z\\-]+)$/i, {
      message: 'O usuário pode ter apenas letras e hifens.',
    })
    .transform((username) => username.toLowerCase()),
  name: z.string().min(3, { message: 'O nome deve ter pelo menos 3 letras.' }),
})

type RegisterFormData = z.infer<typeof registerFormSchema>

export default function Register() {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors, isSubmitting }
  } = useForm<RegisterFormData>({
    resolver: zodResolver(registerFormSchema),
  })

  const router = useRouter()

  useEffect(() => {
    if (router.query.username) {
      setValue('username', String(router.query.username))
    }
  }, [router.query?.username, setValue])

  async function handleRegister(data: RegisterFormData) {
    try {
      await api.post('/users', {
        username: data.username,
        name: data.name,
      })

      await router.push('/register/connect-calendar')
    } catch (error) {
      console.log(error)
      if (error instanceof AxiosError && error?.response?.data?.message) {
        alert(error.response.data.message)
      }
    }
  }

  return (
    <>
      <NextSeo
        title="Crie uma conta | Ignite Call"
        description="Precisamos de algumas informações para criar seu perfil!"
      />

      <main className="max-w-[572px] mt-20 mx-auto mb-4 px-4">
        <div className="px-6">
          <strong className="leading-relaxed text-2xl">Bem-vindo ao Ignite Call!</strong>
          <p className="mb-6 text-base font-normal leading-relaxed text-zinc-400">Precisamos de algumas informações para criar seu perfil! Ah, você pode editar essas informações depois.</p>

          <MultiStep size={4} currentStep={1} />
        </div>

        <form onSubmit={handleSubmit(handleRegister)} className="flex flex-col mt-6 gap-4 p-6 rounded-lg bg-zinc-800 border border-zinc-700">
        <label className="flex flex-col gap-2">
          <p className="text-sm leading-relaxed">Nome de usuário</p>
          <div className="flex items-center py-3 px-4 bg-zinc-900 rounded-lg box-border border-2 border-zinc-900 cursor-text focus-within:border-emerald-600">
            <span className="text-zinc-400 text-sm">ignite.com/</span>
            <input type="text" placeholder="seu-usuário" className="text-sm text-zinc-50 bg-transparent w-full focus:outline-none placeholder:text-zinc-600" {...register('username')} />
          </div>
          {errors.username && (
            <p className="text-sm text-red-500">{errors.username.message}</p>
          )}
        </label>
        <label className="flex flex-col gap-2">
          <p className="text-sm leading-relaxed">Nome completo</p>
          <div className="flex items-center py-3 px-4 bg-zinc-900 rounded-lg box-border border-2 border-zinc-900 cursor-text focus-within:border-emerald-600">
            <input type="text" placeholder="Seu nome" className="text-sm text-zinc-50 bg-transparent w-full focus:outline-none placeholder:text-zinc-600" {...register('name')} />
          </div>
          {errors.name && (
            <p className="text-sm text-red-500">{errors.name.message}</p>
          )}
        </label>
        <button type="submit" disabled={isSubmitting} className="h-[46px] text-zinc-50 bg-emerald-600 rounded-lg text-sm font-medium text-center min-w-[120px] box-border px-4 flex items-center justify-center gap-2 cursor-pointer">
          Próximo passo
          <ArrowRight size={16} />
        </button>
      </form>
      </main>
    </>
  )
}