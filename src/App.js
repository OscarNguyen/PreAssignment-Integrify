import './App.css';
import AppRouter from './routers/AppRouter';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import dataReducer from './store/reducers/data';
import { fetchData } from './store/actions/data';
/* const rootReducer = combineReducers({
  userData: dataReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));
store.dispatch(fetchData()); */
function App() {
  return (
    /*     <Provider store={store}> */
    <AppRouter />
    /*   </Provider> */
  );
}

export default App;
