import { useState } from "react";
import UserAPI from "../api/user-api";

const Create = () => {

  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const submit = async (e) => {
    e.preventDefault();
    setErrorMessage("");
    setSuccessMessage("");

    const formData = new FormData(e.target);
    console.log(formData.get("firstName"))

    const response = await UserAPI.create({
      firstName: formData.get("firstName"),
      lastName: formData.get("lastName"),
      info: formData.get("info"),
      vatId: formData.get("vatId"),
    });

    if (response.errors) {
      setErrorMessage(response.errors.join(", "));
      return;
    }

    setSuccessMessage(`User ${formData.get("firstName")} ${formData.get("lastName")} created`)

    e.target.reset();
  };

  return (
    <>
      <h1>Create</h1>
      {errorMessage && <div className="error">{errorMessage}</div>}
      {successMessage && <div className="success">{successMessage}</div>}
      <form onSubmit={submit}>
        <div className="row">
          <label htmlFor="firstname">First Name*</label>
          <input type="text" id="firstname" name="firstName" required />
        </div>
        <div className="row">
          <label htmlFor="lastname">Last Name*</label>
          <input type="text" id="lastname" name="lastName" required />
        </div>
        <div className="row">
          <label htmlFor="info">Info</label>
          <textarea id="info" name="info"></textarea>
        </div>
        <div className="row">
          <label htmlFor="vat">Vat-ID*</label>
          <input type="text" id="vat" name="vatId" required pattern="[A-Z]{2}[0-9A-Z+*]{5,12}" />
        </div>
        <input type="submit" value="Create User" />
      </form>
    </>
  );
};

export default Create;