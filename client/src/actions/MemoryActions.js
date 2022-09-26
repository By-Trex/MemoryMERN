import { MemoryServices } from "../backend/MemoryServices";
import {
  UPDATEMEMORIES,
  CREATEMEMORY,
  GETMEMORIES,
  DELETEMEMORY,
} from "../constants/MemoryConstant";

export const GetMemoryList = () => async (dispatch) => {
  await MemoryServices.getMemory().then((res) => {
    dispatch({
      type: GETMEMORIES,
      payload: res,
    });
  });
};
