import { MultiStep } from "@/components/multi-step";
import { ArrowRight, Check } from "lucide-react";
import { NextSeo } from "next-seo";
import { signIn, useSession } from 'next-auth/react'
import { useRouter } from 'next/router'

export default function ConnectCalendar() {
  const session = useSession()
  const router = useRouter()

  const hasAuthError =  !!router.query.error
  const isSignedIn = session.status === 'authenticated'

  async function handleConnectCalendar() {
    await signIn('google', { callbackUrl: '/register/connect-calendar' })
  }

  async function handleNavigateToNextStep() {
    await router.push('/register/time-intervals')
  }

  return (
    <>
      <NextSeo
        title="Conecte sua agenda do Google | Ignite Call"
        noindex // para o google nao indexar esta página
      />

      <main className="max-w-[572px] mt-20 mx-auto mb-4 px-4">
        <div className="px-6">
          <strong className="leading-relaxed text-2xl">Conecte sua agenda!</strong>
          <p className="mb-6 text-base font-normal leading-relaxed text-zinc-400">Conecte o seu calendário para verificar automaticamente as horas ocupadas e os novos eventos à medida em que são agendados.</p>

          <MultiStep size={4} currentStep={2} />
        </div>

        <div className="mt-6 flex flex-col p-6 rounded-lg bg-zinc-800 border border-zinc-700">
          <div className="flex items-center justify-between border border-zinc-700 py-4 px-6 rounded-lg mb-4">
            <p className="text-base text-zinc-100">Google Calendar</p>
            {isSignedIn ? (
              <button 
              type="button"
              disabled
              className="h-[38px] text-emerald-400 border-2 border-emerald-600 rounded-lg text-sm font-medium text-center min-w-[120px] box-border px-4 flex items-center justify-center gap-2 hover:bg-emerald-600 hover:text-zinc-50"
            >
              Conectado
              <Check size={16} />
            </button>
            ) : (
              <button 
                type="button" 
                className="h-[38px] text-emerald-400 border-2 border-emerald-600 rounded-lg text-sm font-medium text-center min-w-[120px] box-border px-4 flex items-center justify-center gap-2 hover:bg-emerald-600 hover:text-zinc-50"
                onClick={handleConnectCalendar}  
              >
                Conectar
                <ArrowRight size={16} />
              </button>
            )}
          </div>

          {hasAuthError && (
            <p className="text-sm text-red-500 mb-4">
              Falha ao se conectar ao Google, verifique se você habilitou as
              permissões de acesso ao Google Calendar
            </p>
          )}

          <button
            onClick={handleNavigateToNextStep}
            type="submit" 
            disabled={!isSignedIn}
            className="h-[46px] text-zinc-50 rounded-lg text-sm font-medium text-center min-w-[120px] box-border px-4 flex items-center justify-center gap-2 bg-emerald-600 hover:brightness-110 disabled:cursor-not-allowed disabled:bg-zinc-400"
          >
            Próximo passo
            <ArrowRight size={16} />
          </button>
        </div>
      </main>
    </>
  )
}