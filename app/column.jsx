import React from 'react'
import { Draggable, Droppable } from 'react-beautiful-dnd'

const Column = ({ column, tasks }) => {
  
  return (
    <article>
      <p className='font-xs mb-4'>{column.title} ({tasks.length})</p>
      <Droppable droppableId={column.id} >
        {(droppableProvided) => (
          <aside className='drop-zone' ref={droppableProvided.innerRef} {...droppableProvided.droppableProps}>
            {tasks.map((task, index) => (
              <Draggable key={task.id} draggableId={`${task.id}`} index={index}>
                {(draggableProvided, draggableSnapshot) => (
                  <blockquote className={`p-6 mb-2.5 button rounded text-center ${draggableSnapshot.isDragging ? 'border-lime' : null}`} ref={draggableProvided.innerRef} {...draggableProvided.draggableProps} {...draggableProvided.dragHandleProps}>
                    {task.name}
                  </blockquote>
                )}
              </Draggable>
            ))}
            {droppableProvided.placeholder}
          </aside>
        )}
      </Droppable>
    </article>
  )
}

export default Column