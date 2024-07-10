import { CircleCheck, CircleDashed, CircleUser, Mail, UserCog } from "lucide-react";

export function TripDetailsGuests() {
  return (
    <div className="space-y-6">
      <h2 className="font-semibold text-xl">Convidados</h2>

      <div className="space-y-5">
        <div className="flex items-center justify-between gap-4 bg-zinc-900 rounded-lg px-5 py-2">
          <div className="space-y-1.5">
            <div className="flex items-center justify-start gap-2">
              <CircleUser className="size-3 flex " />
              <span className="block font-medium text-zinc-100 ">Fulano de Tal</span>
            </div>
            <div className="flex items-center justify-start gap-2">
              <Mail className="size-3 flex"/>
              <a href="#" target="_blank" className="block text-xs text-zinc-400 truncate hover:text-zinc-200">fulanodetal@email.com.br</a>
            </div>
          </div>
          <CircleCheck className="size-5  text-lime-300  shrink-0"/>
        </div>

        <div className="flex items-center justify-between gap-4 bg-zinc-900 rounded-lg px-5 py-2">
          <div className="space-y-1.5">
            <div className="flex items-center justify-start gap-2">
              <CircleUser className="size-3 flex " />
              <span className="block font-medium text-zinc-100 ">Ciclano Beltrano</span>
            </div>
            <div className="flex items-center justify-start gap-2">
              <Mail className="size-3 flex"/>
              <a href="#" target="_blank" className="block text-xs text-zinc-400 truncate hover:text-zinc-200">ciclanobeltrano_emailmuitolongo@email.com.br</a>
            </div>
          </div>
          <CircleDashed className="size-5 text-zinc-400 shrink-0"/>
        </div>

      </div>

      <button className='bg-zinc-800 w-full justify-center text-zinc-200 rounded-lg px-5 h-11 font-medium flex items-center gap-2 hover:bg-zinc-700'>
        <UserCog className='size-5'/>
        Gerenciar Convidados
      </button>
    </div>
  )
}