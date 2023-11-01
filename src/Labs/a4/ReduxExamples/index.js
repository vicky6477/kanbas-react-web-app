import React from "react";
import HelloRedux from "./HelloRedux";
import TodoList from "./todos/TodoList";
import CounterRedux from "./CounterRedux";
import AddRedux from "./AddRedux";

const ReduxExamples = () => {
  return (
    <div>
      <h2>Redux Examples</h2>
      <AddRedux />
      <CounterRedux />
      <TodoList />
      <HelloRedux />
    </div>
  );
};

export default ReduxExamples;