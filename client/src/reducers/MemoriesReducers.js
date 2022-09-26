import {
  UPDATEMEMORIES,
  CREATEMEMORY,
  GETMEMORIES,
  DELETEMEMORY,
} from "../constants/MemoryConstant";

const INITIALSTATE = {
  memoryList: [],
};

export default (state = INITIALSTATE, action) => {
  switch (action.type) {
    case GETMEMORIES:
      return { ...state, memoryList: action.payload };

    default:
      return state;
  }
};
