const ToDoProto = (name, date, priority, notes) => {
  const logToDoDetails = () => {
    console.log({name, date, priority, notes})
  };

  const updateStatus = () => {

  };

  const updateNotes = () => {

  };

  const markComplete = () => {

  };

  return {
    updateStatus,
    updateNotes,
    markComplete,
    logToDoDetails
  }
}

export const ToDo = (name, date, priority, notes) => {
  const {logToDoDetails} = ToDoProto(name, date, priority, notes);

  return {
    name,
    date,
    priority,
    notes,
    logToDoDetails
  };
}