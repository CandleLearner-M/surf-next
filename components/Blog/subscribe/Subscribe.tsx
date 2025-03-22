"use client";

import { FormEvent, useState } from "react";
import styles from "./Subscribe.module.scss";

function Subscribe() {
  const [email, setEmail] = useState("");
  const [hasSignedUp, setHasSignedUp] = useState(false);

  const handleSubmit = function (e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (email.length) {
      // Send Email to strapi

      // Give back feedback to the user that they signed up
      setHasSignedUp(true);
    }
  };

  return (
    <section className={styles.subscribe}>
      {hasSignedUp ? (
        <h4 className={styles.subscribe__thank}>Thank you for signing up!</h4>
      ) : (
        <>
          <div className={styles.subscribe__text}>
            <h4>subscribe to our newsletter</h4>
            <p>
              Unlock Exclusive Insights and Stay In the Know – Subscribe to Our
              Newsletter Today to always stay in touch
            </p>
          </div>
          <form className={styles.subscribe__mail} onSubmit={handleSubmit}>
            <input
              type="email"
              placeholder="Enter your E-mail address"
              className="input"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <button type="submit">SUBSCRIBE</button>
          </form>
        </>
      )}
    </section>
  );
}
export default Subscribe;
