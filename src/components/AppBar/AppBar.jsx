import { StatusFilter } from "../StatusFilter/StatusFilter";
import { TaskCounter } from "../TaskCounter/TaskCounter";



export const AppBar = ({total, setFilterStatus, completed}) => {
  return (
    <header >
      <div >
        <p >Tasks</p>
        <TaskCounter total={total} completed={completed}/>
      </div>
      <div >
        <p >Filter by status</p>
        <StatusFilter setFilterStatus={setFilterStatus}/>
      </div>
    </header>
  );
};