import { useParams } from "react-router";
import { useNavigate } from "react-router";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import TicketForm from "../features/tickets/TicketForm";

const Ticket = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [ticket, setTicket] = useState(null);

  useEffect(() => {
    (async () => {
      const response = await axios.get(`http://localhost:3000/tickets/${id}`);
      setTicket(response.data);
    })();
  }, [id]);

  const onSubmit = async (ticket) => {
    const res = await axios.put(`http://localhost:3000/tickets/${id}`, ticket);
    setTicket(res.data);
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