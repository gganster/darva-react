import { Outlet, Link } from "react-router";

const Main = () => {
  return (
    <div>
      <div style={{display: "flex", gap: "10px", alignItems: "center", borderBottom: "1px solid #ccc"}}>
        <Link to="/">Home</Link>
        <Link to="/tickets">Tickets</Link>
      </div>
      <div>
        <Outlet />
      </div>
    </div>
  )
}

export default Main;