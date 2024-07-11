import { CircleCheck, CircleDashed, CircleUser, Mail, UserCog } from "lucide-react";
import { Button } from "../../components/button";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { api } from "../../lib/axios";


interface Participant {
  id: string,
  name: string | null,
  email: string,
  is_confirmed: boolean
}
export function TripDetailsGuests() {
  const { tripId } = useParams()
  const [participants, setParticipants] = useState<Participant[]>([])

  useEffect(() => {
    api.get(`/trips/${tripId}/participants`).then(response => setParticipants(response.data.participants))}, [tripId])

  return (
    <div className="space-y-6">
      <h2 className="font-semibold text-xl">Convidados</h2>

      <div className="space-y-5">
        {participants.map((participant, index) => {
          return (
            <div key={participant.id} className="flex items-center justify-between gap-4 bg-zinc-900 rounded-lg px-5 py-2">
              <div className="space-y-1.5">
                <div className="flex items-center justify-start gap-2">
                  <CircleUser className="size-3 flex " />
                  <span className="block font-medium text-zinc-100 ">{participant.name ?? `Convidado ${index}`}</span>
                </div>
                <div className="flex items-center justify-start gap-2">
                  <Mail className="size-3 flex"/>
                  <a href="#" target="_blank" className="block text-xs text-zinc-400 truncate hover:text-zinc-200">{participant.email}</a>
                </div>
              </div>
              {participant.is_confirmed ? (
                <CircleCheck className="size-5  text-lime-300  shrink-0"/>
              ): (<CircleDashed className="text-zinc-400 size-5 shrink-0"/>)}
            </div>
          )
        })}

        

      </div>

      <Button size="fullWidth" variant="secondary">
        <UserCog className='size-5'/>
        Gerenciar Convidados
      </Button>
    </div>
  )
}