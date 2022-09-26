import request from "./request.js";

class MemoryServices {
  static getMemory = async (params) => {
    return await request.get("memories", params);
  };

  static createMemory = async (body) => {
    return await request.post("memories", body);
  };

  static deleteMemory = async (id) => {
    return await request.delete(`memories/${id}`);
  };

  static UpdateMemory = async (body) => {
    return await request.put("memories", body);
  };
}

export { MemoryServices };
