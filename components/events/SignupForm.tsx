"use client";

import { ChangeEvent, FormEvent, ReactNode, useState } from "react";
import styles from "./SignupForm.module.scss";
import { postDataToStrapi } from "@/utils/strapi.utils";
import { AxiosError } from "axios";

function SignupForm({
  infoText,
  headline,
  btnLabel,
}: {
  infoText: ReactNode;
  headline: string;
  btnLabel: string;
}) {
  const [submiting, setSubmiting] = useState(false);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
  });

  const onChange = function (e: ChangeEvent<HTMLInputElement>) {
    const inputName = e.target.name;
    if (inputName === "phoneNumber" && !/^[\d+\-]*$/.test(e.target.value)) {
      return;
    }

    setFormData((formData) => ({
      ...formData,
      [inputName]: e.target.value,
    }));
  };

  const onSubmit = async function (e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (
      !(
        formData.email &&
        formData.lastName &&
        formData.firstName &&
        formData.phoneNumber
      )
    )
      return;

    try {
      setSubmiting(true);
      await postDataToStrapi("participants", {
        data: {
          ...formData,
          isGeneralInterest: true,
        },
      });

      setShowConfirmation(true);
    } catch (err) {
      if (err instanceof AxiosError)
        setErrorMsg(
          err?.response?.data?.error?.message || "Something went Wrong"
        );
    } finally {
      setSubmiting(false);
    }
  };

  return (
    <section className={styles.events}>
      <div className={styles.title}>
        <h4>{headline}</h4>
        {infoText}
      </div>
      {showConfirmation ? (
        <h3>Thank you for signing up</h3>
      ) : (
        <form onSubmit={onSubmit}>
          <div className={styles.firstLine}>
            <TextInput
              inputName="firstName"
              label="First Name"
              value={formData.firstName}
              onChange={onChange}
            />
            <TextInput
              inputName="lastName"
              label="Last Name"
              value={formData.lastName}
              onChange={onChange}
            />
          </div>
          <TextInput
            inputName="email"
            label="Your e-mail address"
            value={formData.email}
            onChange={onChange}
          />
          <TextInput
            inputName="phoneNumber"
            label="Your telephone number"
            value={formData.phoneNumber}
            onChange={onChange}
          />

          <button className="btn btn--medium btn--turquoise" type="submit">
            {!submiting ? btnLabel : "Sending..."}
          </button>

          {errorMsg && <p className={styles.error}>{errorMsg}</p>}
        </form>
      )}
    </section>
  );
}

function TextInput({
  inputName,
  label,
  value,
  onChange,
}: {
  inputName: string;
  label: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}) {
  return (
    <div className={`${styles.formGroup} `}>
      <label htmlFor={inputName}>{label}</label>
      <input
        className="input"
        name={inputName}
        value={value}
        type="text"
        id={inputName}
        onChange={(e) => onChange(e)}
      />
    </div>
  );
}
export default SignupForm;
