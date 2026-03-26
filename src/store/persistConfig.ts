import storage from "./storage";

console.log("STORAGE:", storage);

export const authPersistConfig = {
  key: "auth",
  storage: storage.default || storage,
};

export const counterPersistConfig = {
  key: "counter",
  storage: storage.default || storage,
};