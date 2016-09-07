// Import the flux module
import {Dispatcher} from 'flux';

// Create a new dispatcher instance
const dispatcher = new Dispatcher();

// Register a callback function that is invoked everytime an action is dispatched
dispatcher.register((action) => {
  var pElement;

  // Determine how to respond to the action based on its "name" property as defined below
  switch(action.name) {
    case 'greet':
      pElement = document.createElement('p');
      pElement.textContent = action.payload;
      document.body.appendChild(pElement);
      break;
    case 'say':
      pElement = document.createElement('p');
      pElement.textContent = `${action.payload}`;
      pElement.style.fontWeight = 'italic';
      document.body.appendChild(pElement);
      break;
    case 'tell':
      pElement = document.createElement('p');
      pElement.textContent = action.payload;
      pElement.style.fontWeight = 'bold';
      document.body.appendChild(pElement);
      break;
    default:
      break;
  }
});

// dispatch an action named "greet" with the payload "Hello World!"
dispatcher.dispatch({
  name: 'greet',
  payload: 'Hello World!'
});

dispatcher.dispatch({
  name: 'say',
  payload: 'Hello Earth!'
});

dispatcher.dispatch({
  name: 'tell',
  payload: 'Hello Solar System!'
});
