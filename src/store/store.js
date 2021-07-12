import rootReducer from "./rootReducer";
import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

import thunk from "redux-thunk";

export default function configureStore() {
  const middlewares = [thunk];
  const middleWareEnchancer = applyMiddleware(...middlewares);

  const store = createStore(
    rootReducer,
    composeWithDevTools(middleWareEnchancer)
  );
  return store;
}
