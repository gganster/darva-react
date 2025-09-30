import {useState} from "react";
import AddTicketForm from "./components/AddTicketForm";
import axios from "axios";

function App() {
  const [tickets, setTickets] = useState([]);

  const onSubmit = async (ticket) => {
    const res = await axios.post("http://localhost:3000/tickets", ticket);
    setTickets([...tickets, res.data]);
  }

  return (
    <>
      {tickets.length}
      <AddTicketForm onSubmit={onSubmit}/>

      {tickets.map((i) => (
        <div key={i.id} style={{border: "1px solid black", margin: 5, padding: 5}}>
          <h3>{i.title}</h3>
          <h6>{i.message}</h6>
        </div>
      ))}
    </>
  )
}

export default App