import { useState, useEffect } from "react";
import TicketList from "../features/tickets/TicketList";
import TicketForm from "../features/tickets/TicketForm";
import axios from "axios";

const Index = () => {
  const [tickets, setTickets] = useState([]);

  const onSubmit = async (ticket) => {
    const response = await axios.post("http://localhost:3000/tickets", ticket);
    setTickets([...tickets, response.data]);
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
      <TicketForm onSubmit={onSubmit} />
      <TicketList tickets={tickets} />
    </div>
  )
}

export default Index