import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";
//Initial State
const initialState = {
  transactions: [
    { id: 1, text: "Books", amount: -20 },
    { id: 2, text: "Movies", amount: 220 },
    { id: 3, text: "Mobile", amount: -120 },
    { id: 4, text: "Hotel", amount: 110 },
  ],
};

//Create Context
export const GlobalContext = createContext(initialState);

// Provider component
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  //Actions
  const deleteTransaction = (id) => {
    dispatch({
      type: "DELETE_TRANSACTION",
      payload: id,
    });
  };

  const addTransaction = (transaction) => {
    dispatch({
      type: "ADD_TRANSACTION",
      payload: transaction,
    });
  };

  return (
    <GlobalContext.Provider
      value={{
        transactions: state.transactions,
        deleteTransaction,
        addTransaction,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
