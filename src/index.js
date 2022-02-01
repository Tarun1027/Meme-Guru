import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createStore } from 'redux';

const store = createStore((state, action) => {
  if (typeof state === "undefined") {
    return {
      stepId: 0
    };
  }

  switch (action.type) {
    case "NEXT_STEP":
      return {
        ...state,
        stepId: state.stepId + 1,
      };

    case "PREVIOUS_STEP":
      return {
        ...state,
        stepId: state.stepId - 1,
      };

    case "SET_MEME":
      return {
        ...state,
        meme: action.value
      };

    default:
      return state;
  }
});

const render = () => ReactDOM.render(
  <React.StrictMode>
    <App
      store={store}
    />
  </React.StrictMode>,
  document.getElementById('root')
);

render();
store.subscribe(render);

reportWebVitals();
