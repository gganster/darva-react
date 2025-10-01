import { useState, useEffect } from "react";
import TicketList from "../features/tickets/TicketList";
import TicketForm from "../features/tickets/TicketForm";
import axios from "axios";
import { useNavigate } from "react-router";

const Index = () => {
  const navigate = useNavigate();
  const [tickets, setTickets] = useState([]);

  const onCreate = async (ticket) => {
    const response = await axios.post("http://localhost:3000/tickets", ticket);
    setTickets([...tickets, response.data]);
    navigate(`/ticket/${response.data.id}`);
  }

  const onUpdate = async (ticket) => {
    const response = await axios.put(`http://localhost:3000/tickets/${ticket.id}`, ticket);
    setTickets(tickets.map(t => t.id === ticket.id ? response.data : t));
  }

  const onDelete = async (id) => {
    await axios.delete(`http://localhost:3000/tickets/${id}`);
    setTickets(tickets.filter(t => t.id !== id));
  }

  useEffect(() => {
    (async () => {
      const response = await axios.get("http://localhost:3000/tickets");
      setTickets(response.data);
    })();
  }, []);

  return (
    <div>
      <TicketForm onSubmit={onCreate} />
      <TicketList tickets={tickets} onSubmit={onUpdate} onDelete={onDelete} />
    </div>
  )
}

export default Index