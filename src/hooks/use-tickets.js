import { useNavigate } from "react-router";
import { useEffect } from "react";
import axios from "axios";

import {useSelector, useDispatch} from 'react-redux'
import { setTickets } from '../slices/ticketSlice'

const useTickets = (id) => {
  const navigate = useNavigate();
  const tickets = useSelector(state => state.tickets.tickets);
  const dispatch = useDispatch();

  const onCreate = async (ticket) => {
    const response = await axios.post("http://localhost:3000/tickets", ticket);
    dispatch(setTickets([...tickets, response.data]));
    navigate(`/ticket/${response.data.id}`);
  }

  const onUpdate = async (ticket) => {
    const response = await axios.put(`http://localhost:3000/tickets/${ticket.id}`, ticket);
    dispatch(setTickets(tickets.map(t => t.id === ticket.id ? response.data : t)));
  }

  const onDelete = async (id) => {
    await axios.delete(`http://localhost:3000/tickets/${id}`);
    dispatch(setTickets(tickets.filter(t => t.id !== id)));
  }

  useEffect(() => {
    (async () => {
      if (tickets.length > 0) return;

      const response = await axios.get("http://localhost:3000/tickets");
      dispatch(setTickets(response.data));
    })();
  }, [tickets, dispatch]);

  const ticket = tickets.find(t => t.id === id);

  return { tickets, ticket, onCreate, onUpdate, onDelete };
}

export default useTickets;