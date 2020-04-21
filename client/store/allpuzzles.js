import Axios from 'axios'

const ALL_PUZZLES="ALL_PUZZLES"

export const allPuzzles =(puzzles)=>{
  return{
    type: ALL_PUZZLES,
    puzzles
  }
}

export const fetchAllPuzzle =() =>{
  return async dispatch =>{
    try{
      const {data} = await Axios.get("......")
      dispatch(allPuzzles(data))
    }
    catch(error){
      dispatch (console.error(error))
    }
  }
}

const initialState={
  puzzles:[]
}

export default function puzzleReducer(state=initialState, action){
  switch (action.type){
    case ALL_PUZZLE:
      return {...state, puzzles: action.puzzles}
  }
}
