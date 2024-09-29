import { StatusFilter } from '../StatusFilter/StatusFilter';
import { TaskCounter } from '../TaskCounter/TaskCounter';

import styles from './AppBar.module.css';

export const AppBar = ({ total, setFilterStatus, completed, setSorted }) => {
  return (
    <header className={styles.header_container}>
      <div>
        <p className={styles.title}>Tasks counter</p>
        <TaskCounter total={total} completed={completed} />
      </div>
      <div>
        <p className={styles.title}>Filter by status</p>
        <StatusFilter setFilterStatus={setFilterStatus} setSorted={setSorted} />
      </div>
    </header>
  );
};
