import * as storageModule from "redux-persist/lib/storage";

// 👇 FORCE unwrap
const storage = (storageModule as any).default;

export default storage;