import React, { Component } from 'react';

function assertionListReducer(state = [], action){
  let newState;
  switch(action.type) {
    case 'ADD_ASSERTION_TO_LIST':
      newState = state.slice();
      newState.push(action.payload);
      localStorage.setItem("asserts", JSON.stringify(newState));
      return newState;
    case 'LOAD_ASSERTION_LIST': 
      return action.payload; 
    case 'DELETE_ASSERTION_BLOCK':
      newState = state.slice();
      for (let i = 0; i < newState.length; i += 1) {
        if (newState[i].name === action.name) {
          newState.splice(i, 1);
          break;
        }
      }
      localStorage.setItem("asserts", JSON.stringify(newState));
      return newState;
    default:
      return state;
  }
}

export default assertionListReducer

