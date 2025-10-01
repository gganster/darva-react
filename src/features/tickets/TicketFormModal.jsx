import Modal from "~/components/ui/Modal";
import TicketForm from "./TicketForm";

const TicketFormModal = ({ isOpen, onClose, onSubmit, initialTicket = null }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <TicketForm onSubmit={onSubmit} initialTicket={initialTicket} />
    </Modal>
  )
}

export default TicketFormModal;