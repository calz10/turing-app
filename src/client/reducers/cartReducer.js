/* eslint-disable indent */
import constants from '../constants'

const { FETCH_ON_CART_ITEMS } = constants

const initialState = {
  data: [],
}

function cartReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_ON_CART_ITEMS:
      return {
        ...state,
      }
    default:
      return state
  }
}

export default cartReducer
