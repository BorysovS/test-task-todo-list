import { Button } from '../Button/Button';

import styles from './StatusFilter.module.css';

export const StatusFilter = ({ setFilterStatus, setSorted }) => {
  return (
    <div className={styles.filter_wrapper}>
      <div className={styles.btn_wrapper}>
        <Button onPress={() => setFilterStatus('all')}>All</Button>
        <Button onPress={() => setFilterStatus('active')}>Active</Button>
        <Button onPress={() => setFilterStatus('complited')}>Completed</Button>
      </div>
      <div className={styles.btn_wrapper}>
        <p>Filter by date</p>
        <Button onDatePress={() => setSorted()} selected={'date'}>
          Newest
        </Button>
        <Button onDatePress={() => setSorted()} selected={'date'}>
          Oldest
        </Button>
      </div>
    </div>
  );
};
