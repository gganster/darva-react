import { useState } from "react";
import Button from "~/components/ui/Button";
import TicketFormModal from "./TicketFormModal";

const TicketListItem = ({ticket, onSubmit, onDelete}) => {
  const [isOpen, setIsOpen] = useState(false);

  const onClose = () => {
    setIsOpen(false);
  }

  const _onSubmit = (ticket) => {
    console.log(ticket);
    setIsOpen(false);
    onSubmit(ticket);
  }

  return (
    <>
      <tr className="hover:bg-gray-50">
        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
          {ticket.id}
        </td>
        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
          {ticket.title}
        </td>
        <td className="px-6 py-4 text-sm text-gray-700">
          {ticket.message}
        </td>
        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium space-x-2">
          <Button variant="link" className="p-0">
            Voir plus
          </Button>
          <Button variant="link" className="p-0" onClick={() => setIsOpen(true)}>
            Modifier
          </Button>
          <Button variant="link" className="p-0 text-red-600 hover:text-red-800" onClick={() => onDelete(ticket.id)}>
            Supprimer
          </Button>
        </td>
      </tr>
      <TicketFormModal
        isOpen={isOpen}
        onClose={onClose}
        onSubmit={_onSubmit}
        initialTicket={ticket}
      />
    </>

  )
}

export default TicketListItem;