import axios from 'axios'
import store from './index'

const ADD_TO_CART = 'ADD_TO_CART'

export const addPuzzleOrder = order => {
  return {
    type: ADD_TO_CART,
    order
  }
}

export const addToCart = newOrder => {
  const state = store.getState()
  const userId = state.user.singleUser.id

  //Guest User Add to Cart
  if (userId === undefined) {
    return async dispatch => {
      try {
        const getState = localStorage.getItem('state')
        let orderInfo = {}
        let items = []
        let quantity = newOrder.quantity
        let puzzle = parseInt(newOrder.puzzleId, 10)
        //create new order for new guest
        //if state does not exist, create it and add the puzzleID:quantity as a key-value pair object to the array
        if (getState === null) {
          console.log('we are in a new cart')
          orderInfo[puzzle] = quantity
          items.push(orderInfo)

          const newState = JSON.stringify(items)
          localStorage.setItem('state', newState)
          console.log(getState)
        } else if (getState) {
          console.log('we are in the existing cart')
          //pull current order and add new puzzle to it

          const pullOrder = JSON.parse(getState)
          console.log(newOrder)

          orderInfo[puzzle] = quantity
          pullOrder.push(orderInfo)

          const newState = JSON.stringify(pullOrder)
          localStorage.setItem('state', newState)
          console.log(getState)
        }
      } catch (error) {
        dispatch(console.error(error))
      }
    }

    //Logged In User Add to Cart
  } else {
    return async dispatch => {
      try {
        const {data} = await axios.post(`/api/cart/${userId}`, newOrder)
        dispatch(addPuzzleOrder(data))
      } catch (error) {
        dispatch(console.error(error))
      }
    }
  }
}

const initialState = {
  purchasedPuzzle: []
}

export default function orderReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_TO_CART:
      return {...state, purchasedPuzzle: action.order}
    default:
      return state
  }
}
