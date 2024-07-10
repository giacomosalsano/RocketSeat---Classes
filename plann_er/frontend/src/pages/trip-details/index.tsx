import { Plus } from "lucide-react";
import { useState } from "react";
import { CreateAvtivityModal } from "./CreateAvtivityModal";
import { LinksImportantes } from "./LinksImportantes";
import { TripDetailsGuests } from "./TripDetailsGuests";
import { ActivityList } from "./ActivityList";
import { TripDetailsPageHeader } from "./TripDetailsPageHeader";

export function TripDetailsPage() {
  const [isCreateActivityModalOpen, setisCreateActivityModalOpen] = useState(false)

  function openCreateActivityModal() {
    setisCreateActivityModalOpen(true)
  }

  function closeCreateActivityModal() {
    setisCreateActivityModalOpen(false)
  }

  return (
    <div className="max-w-6xl px-6 py-10 mx-auto space-y-8">
      <TripDetailsPageHeader />

      <main className="flex gap-16 px-4">
        <div className="flex-1 space-y-6">
          <div id="activityListHeader" className="flex items-center justify-between">
            <h2 className="text-3xl font-semibold">Atividades</h2>
            <button onClick={openCreateActivityModal} className='bg-lime-300 text-lime-950 rounded-lg px-5 py-2 font-medium flex items-center gap-2 hover:bg-lime-400 '>
              <Plus className='size-5' />
              Adicionar atividade
            </button>
          </div>

          <ActivityList /> 
        </div>

        <div id="sidebar" className="w-80 space-y-6">
          <LinksImportantes />

          <div className='w-full h-px bg-zinc-800'/>

          <TripDetailsGuests />
        </div>
      </main>

      {isCreateActivityModalOpen && (
        <CreateAvtivityModal closeCreateActivityModal={closeCreateActivityModal} />
      )}
    </div>

    
  )
}