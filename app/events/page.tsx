import Events from "@/components/events/SignupForm";
import styles from "./page.module.scss";
import SignupForm from "@/components/events/SignupForm";

function EventsPage() {
  const infoText = (
    <>
      <p>
        Staying in touch with our website is your ticket to catching the wave of
        exciting upcoming events at our surfing school! By subscribing to our
        updates, you'll be the first to know about:
      </p>
      <p>
        🏄‍♂️ Epic Surf Sessions: Get the scoop on our thrilling surf lessons,
        workshops, and camps designed for surfers of all levels, from beginners
        to advanced riders.
      </p>
      <p>
        🏄‍♂️ Epic Surf Sessions: Get the scoop on our thrilling surf lessons,
        workshops, and camps designed for surfers of all levels, from beginners
        to advanced riders.
      </p>
      <p>
        🌊 Surfing Competitions: Stay informed about local and regional surf
        competitions, where you can witness top talent and even participate if
        you're up for the challenge.
      </p>
      <p>
        🏝️ Surf Retreats: Discover exclusive surf retreats in breathtaking
        locations, perfect for a rejuvenating getaway that combines surfing and
        relaxation.
      </p>
      <p>
        📅 Event Calendar: Our website keeps you up-to-date with a comprehensive
        event calendar, so you never miss a single opportunity to ride the
        waves.
      </p>
      <p>
        🤙 Special Offers: Be the first to access special offers, discounts, and
        promotions for our surfing programs and gear. Join our surfing community
        by staying connected through our website, and be ready to dive into the
        world of thrilling waves, endless adventures, and unforgettable
        memories!
      </p>
    </>
  );

  const headline = `You want to stay tuned for our events?`;
  return (
    <main className={styles.events}>
      <SignupForm
        infoText={infoText}
        headline={headline}
        btnLabel="Stay in touch"
      />
    </main>
  );
}
export default EventsPage;
