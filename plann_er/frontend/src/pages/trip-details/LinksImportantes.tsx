import { ExternalLink, Plus } from "lucide-react";

export function LinksImportantes() {
  return (
    <div className="space-y-6">
      <h2 className="font-semibold text-xl">Links Importantes</h2>

      <div className="space-y-5">
        <div className="flex items-center justify-between gap-4 bg-zinc-900 rounded-lg px-5 py-2">
          <div className="space-y-1.5">
            <span className="block font-medium text-zinc-100">Reserva do AirBnB</span>
            <a href="#" target="_blank" className="block text-xs text-zinc-400 truncate hover:text-zinc-200">https://www.airbnb.com.br/rooms/387205887325297</a>
          </div>
          <a href="#" target="_blank"><ExternalLink className="size-5 text-zinc-400 shrink-0 hover:text-zinc-200"/></a>
        </div>

        <div className="flex items-center justify-between gap-4 bg-zinc-900 rounded-lg px-5 py-2">
          <div className="space-y-1.5">
            <span className="block font-medium text-zinc-100">Reserva do Restaurante Tal</span>
            <a href="#" target="_blank" className="block text-xs text-zinc-400 truncate hover:text-zinc-200">https://www.restaurantetal.com.br/rooms/387205887325297</a>
          </div>
          <a href="#" target="_blank"><ExternalLink className="size-5 text-zinc-400 shrink-0 hover:text-zinc-200"/></a>
        </div>

      </div>

      <button className='bg-zinc-800 w-full justify-center text-zinc-200 rounded-lg px-5 h-11 font-medium flex items-center gap-2 hover:bg-zinc-700'>
        <Plus className='size-5'/>
        Cadastrar novo link
      </button>
    </div>
  )
}