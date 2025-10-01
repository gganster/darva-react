import {useState, useEffect} from "react";
import AddTicketForm from "./components/AddTicketForm";
import { useNavigate } from "react-router";
import axios from "axios";

function App() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true)
  const [tickets, setTickets] = useState([]);

  const onSubmit = async (ticket) => {
    const res = await axios.post("http://localhost:3000/tickets", ticket);
    setTickets([...tickets, res.data]);
    navigate(`/tickets/${res.data.id}`);
  }

  useEffect(() => {
    (async () => {
      const res = await axios.get("http://localhost:3000/tickets");
      setTickets(res.data);
      setLoading(false);
    })()
  }, [])
    
  return (
    <>
      {tickets.length}
      <AddTicketForm onSubmit={onSubmit}/>

      {tickets.map((i) => (
        <div key={i.id} style={{border: "1px solid black", margin: 5, padding: 5}}>
          <h3>{i.title}</h3>
          <h6>{i.message}</h6>
          <Link to={`/tickets/${i.id}`}>View</Link>
        </div>
      ))}
    </>
  )
}

export default App