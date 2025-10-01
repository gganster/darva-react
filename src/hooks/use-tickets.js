import { useNavigate } from "react-router";
import axios from "axios";
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'

const useTickets = (id) => {
  const queryClient = useQueryClient();

  const navigate = useNavigate();
  const {data: tickets, isPending} = useQuery({
    queryKey: ['tickets'],
    queryFn: () => fetch('http://localhost:3000/tickets').then(res => res.json())
  });

  const onCreate = useMutation({
    mutationFn: (ticket) => axios.post("http://localhost:3000/tickets", ticket),
    onSuccess: (ticket) => {
      //queryClient.invalidateQueries({ queryKey: ['tickets'] });
      queryClient.setQueryData(['tickets'], (old) => [...old, ticket.data]);
      navigate(`/ticket/${ticket.data.id}`);
    }
  });

  const onUpdate = useMutation({
    mutationFn: (ticket) => axios.put(`http://localhost:3000/tickets/${ticket.id}`, ticket),
    onSuccess: (ticket) => {
      queryClient.setQueryData(['tickets'], (old) => old.map(t => t.id === ticket.data.id ? ticket.data : t));
    }
  });
  const onDelete = useMutation({
    mutationFn: (id) => axios.delete(`http://localhost:3000/tickets/${id}`),
    onSuccess: (_, id) => {
      queryClient.setQueryData(['tickets'], (old) => old.filter(t => t.id !== id));
    }
  });

  const ticket = tickets?.find(t => t.id === id);

  return { tickets, ticket, onCreate, onUpdate, onDelete, isPending };
}

export default useTickets;