import React from 'react'
import { Draggable, Droppable } from 'react-beautiful-dnd'

const Column = ({ column, tasks }) => {
  return (
    <aside>
      <p className='font-xs mb-4'>{column.title}</p>
      <Droppable droppableId={column.id} >
        {(droppableProvided, droppableSnapshot) => (
          <ul ref={droppableProvided.innerRef} {...droppableProvided.droppableProps}>
            {tasks.map((task, index) => (
              <Draggable key={task.id} draggableId={`${task.id}`} index={index}>
                {(draggableProvided, draggableSnapshot) => (
                  <li className='p-6 mb-2.5 button text-center' ref={draggableProvided.innerRef} {...draggableProvided.draggableProps} {...draggableProvided.dragHandleProps}>
                    {task.content}
                  </li>
                )}
              </Draggable>
            ))}
          </ul>
        )}
      </Droppable>
    </aside>
  )
}

export default Column