import { Outlet, Link } from "react-router";

const Main = () => {
  return (
    <div>
      <div className="flex gap-2 border-b border-gray-200 pb-2 px-4">
        <Link to="/">Home</Link>
      </div>
      <div className="mt-4">
        <Outlet />
      </div>
    </div>
  )
}

export default Main;