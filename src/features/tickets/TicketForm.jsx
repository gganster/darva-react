import { useState } from "react";
import TextInput from "~/components/ui/TextInput";
import Button from "~/components/ui/Button";

const TicketForm = ({ initialTicket = null, onSubmit, onCancel = null }) => {
  const [formData, setFormData] = useState({
    title: initialTicket?.title || "",
    message: initialTicket?.message || ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    onSubmit({
      ...formData,
      ...(initialTicket ? {id: initialTicket.id} : {})
    });
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md space-y-4">
      <h3 className="text-xl font-bold mb-4">
        {initialTicket ? "Modifier le ticket" : "Créer un ticket"}
      </h3>
      
      <TextInput
        label="Titre"
        name="title"
        value={formData.title}
        onChange={handleChange}
        required
      />

      <div className="flex flex-col gap-1">
        <label className="text-sm font-medium text-gray-700">
          Message
        </label>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          rows={4}
          className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />
      </div>

      <div className="flex gap-2 pt-2">
        <Button type="submit" variant="primary">
          {initialTicket ? "Mettre à jour" : "Créer"}
        </Button>
        {onCancel && (
          <Button type="button" variant="secondary" onClick={onCancel}>
            Annuler
          </Button>
        )}
      </div>
    </form>
  );
};

export default TicketForm;

