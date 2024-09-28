import { Button } from "../Button/Button";


export const StatusFilter = ({setFilterStatus}) => {
    return (
      <div>
        <Button onPress={() => setFilterStatus('all')}>All</Button>
        <Button onPress={() => setFilterStatus('active')}>Active</Button>
        <Button onPress={() => setFilterStatus('complited')}>Completed</Button>
      </div>
    );
  };