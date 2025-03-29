"use client";

import { ChangeEvent, ReactNode, useState } from "react";
import styles from "./SignupForm.module.scss";

function SignupForm({
  infoText,
  headline,
}: {
  infoText: ReactNode;
  headline: string;
}) {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
  });

  const onChange = function (e:ChangeEvent<HTMLInputElement>) {
    
  }

  return (
    <section className={styles.events}>
      <div className={styles.title}>
        <h4>{headline}</h4>
        {infoText}
      </div>

      <form>
        <div className={styles.firstLine}>
          <TextInput
            inputName="firstName"
            label="First Name"
            value={formData.firstName}
          />
          <TextInput
            inputName="lastName"
            label="Last Name"
            value={formData.lastName}
          />
        </div>
        <TextInput
          inputName="email"
          label="Your e-mail address"
          value={formData.lastName}
        />
        <TextInput
          inputName="phoneNumber"
          label="Your telephone number"
          value={formData.phoneNumber}
        />

        <button className="btn btn--medium btn--turquoise">
          Stay in touch!
        </button>
      </form>
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
  onChange: () => void;
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
        onChange={(e ) =>}
      />
    </div>
  );
}
export default SignupForm;
