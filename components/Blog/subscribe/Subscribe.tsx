"use client";

import { FormEvent, useState } from "react";
import styles from "./Subscribe.module.scss";
import { postDataToStrapi } from "@/utils/strapi.utils";

function Subscribe() {
  const [email, setEmail] = useState("");
  const [hasSignedUp, setHasSignedUp] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showError, setShowError] = useState(false);

  const handleSubmit = async function (e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (email.length) {
      // Send Email to strapi
      setIsSubmitting(true);
      try {
        await postDataToStrapi("newsletter-signups", {
          data: { email: email },
        });
        setHasSignedUp(true);
      } catch {
        setShowError(true);
      } finally {
        setIsSubmitting(false);
      }

      // Give back feedback to the user that they signed up
    }
  };

  return (
    <section className={styles.subscribe}>
      {showError ? (
        <h4 className={styles.subscribe__thank}>Could not sign up email</h4>
      ) : hasSignedUp ? (
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
            <button type="submit" disabled={isSubmitting}>
              {isSubmitting ? "Sending..." : "Subscribe"}
            </button>
          </form>
        </>
      )}
    </section>
  );
}
export default Subscribe;
