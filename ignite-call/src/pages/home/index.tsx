import { NextSeo } from "next-seo";
import Image from "next/image";
import previewImage from '../../assets/app-preview.png';
import gridImage from '../../assets/grid-effect.png';
import { ClaimUsernameForm } from "./components/claim-username-form";

export default function Home() {
  return (
    <>
      <NextSeo
        title="Descomplique sua agenda | Ignite Call"
        description="Conecte seu calendário e permita que as pessoas marquem agendamentos no seu tempo livre."
      />

      <div className="custom-max-width ml-auto h-screen flex items-center gap-5">
        <div className="max-w-[480px] px-10">
          <h1 className="font-extrabold text-6xl leading-tight">Agendamento descomplicado</h1>
          <p className="text-zinc-400 font-normal text-xl leading-relaxed">Conecte seu calendário e permita que as pessoas marquem agendamentos no seu tempo livre.</p>

          <ClaimUsernameForm />
        </div>

        <div className="overflow-hidden pr-2">
          <Image
            src={previewImage}
            alt="Calendário simbolizando aplicação em funcionamento"
            height={400}
            quality={100}
            priority
          />
        </div>
      </div>
      <div className="absolute inset-0 flex justify-start items-center -z-10">
        <Image
          src={gridImage}
          layout="fixed"
          objectFit="cover"
          alt="Grid Image"
        />
      </div>
    </>
  )
}