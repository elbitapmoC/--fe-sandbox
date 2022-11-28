'use client';
import { DragDropContext } from "react-beautiful-dnd";

import Back from "../../../(icons)/back";
import Stargazers from "../../../(icons)/stargazers";
import Title from "../../../title";
import Description from "../../../description";
import Column from "../../../column";
import initialData from "../../../initial-data";

import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";

const reorderColumnList = (sourceCol, startIndex, endIndex) => {
  const newTaskIds = Array.from(sourceCol.taskIds);
  const [removed] = newTaskIds.splice(startIndex, 1);
  newTaskIds.splice(endIndex, 0, removed);

  const newColumn = {
    ...sourceCol,
    taskIds: newTaskIds,
  };

  return newColumn;
};

export default function Page({ params }) {
  const { owner, repo } = params;
  const [state, setState] = useState(initialData);

  const {
    isLoading: loadingRepoBranches,
    error: errorRepoBranches,
    data: branchesData,
  } = useQuery(
    ['branches'],
    () =>
      axios
        .get(`https://api.github.com/repos/${owner}/${repo}/branches`)
        .then((res) => res.data)
  );

  const {
    isLoading: loadingRepo,
    error: errorRepo,
    data: repoData,
  } = useQuery(['repo'], () =>
    axios
      .get(`https://api.github.com/repos/${owner}/${repo}`)
      .then((res) => res.data)
  );

  const initializeBranches = (branches) => {
    branches.forEach((branch) => {
      const data = { ...state };
      const id = branch.commit.sha;
      if(data.tasks[id] === id){
        console.log('OLD 📰');
      } else {
        data.tasks[id] = branch;
        data.columns["column-1"].taskIds.push(id);
      }
      setState(() => data);
    });
  }

  useEffect(()=> {
    if(branchesData){
      initializeBranches(branchesData)
    }
  },[branchesData])
  
  if (loadingRepo) return 'Loading Repository...';
  if (errorRepo) return 'An error has occurred: ' + errorRepo;
  
  if (loadingRepoBranches) return 'Loading Branches...';
  if (errorRepoBranches) return 'An error has occurred: ' + errorRepoBranches;

  const { name, description, stargazers_count } = repoData;
  
  const onDragEnd = (result) => {
    const { destination, source } = result;

    // If user tries to drop in an unknown destination
    if (!destination)
      return;

    // if the user drags and drops back in the same position
    if (destination.droppableId === source.droppableId &&
      destination.index === source.index) {
      return;
    }

    // If the user drops within the same column but in a different position
    const sourceCol = state.columns[source.droppableId];
    const destinationCol = state.columns[destination.droppableId];

    if (sourceCol.id === destinationCol.id) {
      const newColumn = reorderColumnList(
        sourceCol,
        source.index,
        destination.index
      );

      const newState = {
        ...state,
        columns: {
          ...state.columns,
          [newColumn.id]: newColumn,
        },
      };
      setState(newState);
      return;
    }

    // If the user moves from one column to another
    const startTaskIds = Array.from(sourceCol.taskIds);
    const [removed] = startTaskIds.splice(source.index, 1);
    const newStartCol = {
      ...sourceCol,
      taskIds: startTaskIds,
    };

    const endTaskIds = Array.from(destinationCol.taskIds);
    endTaskIds.splice(destination.index, 0, removed);
    const newEndCol = {
      ...destinationCol,
      taskIds: endTaskIds,
    };

    const newState = {
      ...state,
      columns: {
        ...state.columns,
        [newStartCol.id]: newStartCol,
        [newEndCol.id]: newEndCol,
      },
    };

    setState(newState);
  }

  return (
    <main className="secondary shade-2">
      <section className="w-full grid grid-cols-3 gap-4 mt-24 mb-24">
        <Back />
        <aside>
          <Title text={name} />
          <Description text={description} />
        </aside>
        <Stargazers gazers={stargazers_count} />
      </section>

      <section className="w-full grid grid-cols-3 gap-4">
        <DragDropContext onDragEnd={onDragEnd}>
          {state.columnOrder.map((columnId) => {    
            return <Column key={columnId} column={state.columns[columnId]} tasks={state} setTasks={setState}/>;
          })}
        </DragDropContext>
      </section>
    </main>
  )
}