const Task = ({ task, onDelete, onToggle }) => {

  const styling = { 
      color: 'red', 
      cursor: 'pointer',
    }
  return (
    <div 
      className={`task ${task.reminder ? 'reminder' : 'checked'}`} 
      onDoubleClick={() => onToggle(task.id)}
    >
      <div className="h3">
      <h3>
        {task.text} 
        
      </h3>
      <p>{task.day}</p>

      </div>
      <div>
      <i className="fa fa-times" style={styling} onClick={() => onDelete(task.id)} ></i>
      </div>
    </div>
  )
}

export default Task;