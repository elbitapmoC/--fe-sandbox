import React from "react";
import { Draggable, Droppable } from "react-beautiful-dnd";

const Column = ({ column, tasks }) => {
  console.log(tasks)
  return (
    <article>
      <p className="font-xs mb-4">
        {column.title} ({column.taskIds.length})
      </p>
      <Droppable droppableId={column.id}>
        {(droppableProvided) => (
          <aside
            className="drop-zone"
            ref={droppableProvided.innerRef}
            {...droppableProvided.droppableProps}
          >
            {column.taskIds.map((taskId, index) => {
              return (
                <Draggable key={taskId} draggableId={taskId} index={index}>
                  {(draggableProvided, draggableSnapshot) => (
                    <blockquote
                      className={`button mb-2.5 rounded p-6 text-center ${
                        draggableSnapshot.isDragging ? "border-lime" : null
                      }`}
                      ref={draggableProvided.innerRef}
                      {...draggableProvided.draggableProps}
                      {...draggableProvided.dragHandleProps}
                    >
                      {tasks.tasks[taskId].name}
                    </blockquote>
                  )}
                </Draggable>
              );
            })}
            {droppableProvided.placeholder}
          </aside>
        )}
      </Droppable>
    </article>
  );
};

export default Column;
