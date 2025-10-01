import TicketList from "../features/tickets/TicketList";
import TicketForm from "../features/tickets/TicketForm";
import useTickets from "../hooks/use-tickets";

const Index = () => {
  const { tickets, onCreate, onUpdate, onDelete, isPending } = useTickets();

  if (isPending) {
    return (
      <div className="flex justify-center items-center min-h-[200px]">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  return (
    <div>
      <TicketForm onSubmit={onCreate.mutate} />
      <TicketList tickets={tickets} onSubmit={onUpdate.mutate} onDelete={onDelete.mutate} />
    </div>
  )
}

export default Index