import {useState} from "react";
import TextInput from "./ui/TextInput";
import Button from "./ui/Button"

const AddTicketForm = ({onSubmit}) => {
  const [title, setTitle] = useState("");
  const [titleError, setTitleError] = useState(null);

  const [message, setMessage] = useState("");
  const [messageError, setMessageError] = useState(null);

  const _onSubmit = async (e) => {
    e.preventDefault();
    setTitleError(null);
    setMessageError(null);

    if (!title) return (setTitleError("Titre vide"));
    if (!message) return (setMessageError("MessageVide"));

    onSubmit({
      title,
      message
    });

    setTitle("");
    setMessage("");
  }

  return (
    <form onSubmit={_onSubmit}>
      <TextInput
        label={"title"}
        value={title}
        onChange={e => setTitle(e.target.value)}
        errorMessage={titleError}
      />
      <TextInput
        label="Message:"
        value={message}
        onChange={e => setMessage(e.target.value)}
        errorMessage={messageError}
      />
      <div>
        <Button>
          Valider
        </Button>
      </div>
    </form>
  )
}

export default AddTicketForm;