import TicketList from "../features/tickets/TicketList";
import TicketForm from "../features/tickets/TicketForm";
import useTickets from "../hooks/use-tickets";

const Index = () => {
  const { tickets, onCreate, onUpdate, onDelete } = useTickets();

  return (
    <div>
      <TicketForm onSubmit={onCreate} />
      <TicketList tickets={tickets} onSubmit={onUpdate} onDelete={onDelete} />
    </div>
  )
}

export default Index