import { useEffect } from "react";
import { useState, useReducer } from "react";

const CARTREDUCER_INITIAL_STATE = {
  isCartOpen: false,
  cartitems: [],
  cartQuantity: 0,
  cartTotal: 0,
};

export const CARTREDUCER_TYPES = {
  CHANGE_IN_CART: "CHANGE_IN_CART",
  CART_IS_OPEN: "CART_IS_TOGGLED",
};

export const cartReducer = (state = CARTREDUCER_INITIAL_STATE, action) => {
  const { type, payload } = action;
  switch (type) {
    case CARTREDUCER_TYPES.CART_IS_OPEN:
      return {
        ...state,
        isCartOpen: payload,
      };
    case CARTREDUCER_TYPES.CHANGE_IN_CART:
      return {
        ...state,
        ...payload,
      };

    default:
      return state
  }
};

