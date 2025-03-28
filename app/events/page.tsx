import Events from '@/components/events/Events';
import styles from './page.module.scss';

function EventsPage() {
  return (
    <main className={styles.events}>
        <Events />
    </main>
  )
}
export default EventsPage;