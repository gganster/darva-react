import { useState } from "react";
import TextInput from "~/components/ui/TextInput";
import Button from "~/components/ui/Button";

import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

const TicketSchema = z.object({
  title: z.string().min(1, {message: "Le titre est requis"}),
  message: z.string().min(1, {message: "Le message est requis"})
});

const TicketForm = ({ initialTicket = null, onSubmit, onCancel = null }) => {
  const { register, handleSubmit, formState: { errors } } = useForm({
    defaultValues: initialTicket,
    resolver: zodResolver(TicketSchema)
  });

  const _onSubmit = async (formData) => {
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit(_onSubmit)} className="bg-white p-6 rounded-lg shadow-md space-y-4">
      <h3 className="text-xl font-bold mb-4">
        {initialTicket ? "Modifier le ticket" : "Créer un ticket"}
      </h3>
      
      <TextInput
        label="Titre"
        name="title"
        {...register("title")}
        errorMessage={errors.title?.message}
      />

      <div className="flex flex-col gap-1">
        <label className="text-sm font-medium text-gray-700">
          Message
        </label>
        <textarea
          name="message"
          {...register("message")}
          rows={4}
          className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          errorMessage={errors.message?.message}
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

