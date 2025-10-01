import { useParams } from "react-router";
import { useNavigate } from "react-router";
import TicketForm from "../features/tickets/TicketForm";
import useTickets from "../hooks/use-tickets";

const Ticket = () => {
  const { id } = useParams();
  const navigate = useNavigate(); 
  const {ticket, onUpdate} = useTickets(id);

  const onSubmit = async (ticket) => {
    onUpdate(ticket);
    navigate(`/`);
  }

  if (!ticket) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <TicketForm onSubmit={onSubmit} initialTicket={ticket} />
    </div>
  )
}

export default Ticket;