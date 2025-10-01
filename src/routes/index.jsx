import { useState, useEffect } from "react";
import TicketList from "../features/tickets/TicketList";
import TicketForm from "../features/tickets/TicketForm";
import axios from "axios";

const Index = () => {
  const [tickets, setTickets] = useState([]);

  const onCreate = async (ticket) => {
    const response = await axios.post("http://localhost:3000/tickets", ticket);
    setTickets([...tickets, response.data]);
  }

  const onUpdate = async (ticket) => {
    const response = await axios.put(`http://localhost:3000/tickets/${ticket.id}`, ticket);
    setTickets(tickets.map(t => t.id === ticket.id ? response.data : t));
  }

  useEffect(() => {
    (async () => {
      const response = await axios.get("http://localhost:3000/tickets");
      setTickets(response.data);
    })();
  }, []);

  return (
    <div>
      <h1>Index</h1>
      <TicketForm onSubmit={onCreate} />
      <TicketList tickets={tickets} onSubmit={onUpdate} />
    </div>
  )
}

export default Index