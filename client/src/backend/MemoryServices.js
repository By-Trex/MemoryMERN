import request from "./request.js";

class MemoryServices {
  static getMemory = async (params) => {
    return await request.get("/", params);
  };
}

export { MemoryServices };
