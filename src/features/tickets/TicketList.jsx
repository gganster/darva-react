import TicketListItem from "./TicketListItem";

const TicketList = ({ tickets, onSubmit }) => {
  return (
    <div className="container mx-auto p-6">
      <h2 className="text-2xl font-bold mb-6">Tickets</h2>
      <div className="overflow-x-auto shadow-md rounded-lg">
        <table className="min-w-full bg-white">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">
                ID
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">
                Titre
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">
                Message
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {tickets.map((ticket) => (
              <TicketListItem key={ticket.id} ticket={ticket} onSubmit={onSubmit} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TicketList;

