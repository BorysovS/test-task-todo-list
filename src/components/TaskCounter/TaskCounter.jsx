export const TaskCounter = ({total, completed}) => {

    const activeValue = total - completed;
    
    return (
      <div>
        <p>Total : {total}</p>
        <p >Active: {activeValue}</p>
        <p >Completed: {completed}</p>
      </div>
    );
  };