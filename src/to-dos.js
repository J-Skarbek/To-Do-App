const ToDoProto = (name, date, projectName, owner, priority, notes) => {
  const logToDoDetails = () => {
    console.log({name, date, projectName, owner, priority, notes})
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

export const ToDo = (name, date, projectName, owner, priority, notes) => {
  const {logToDoDetails} = ToDoProto(name, date, projectName, owner, priority, notes);

  return {
    name,
    date,
    projectName, 
    owner,
    priority,
    notes,
    logToDoDetails
  };
}