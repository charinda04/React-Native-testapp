import { ADD_TODOLIST, REMOVE_TODOLIST } from "./Types";

const addToDoList = (post) => ({
  type: ADD_TODOLIST,
  payload: post,
  //  test: console.log(post),
  
});

const removeToDoList = () => ({
  type: REMOVE_TODOLIST,
});

export default {
  addToDoList,
  removeToDoList,
};
