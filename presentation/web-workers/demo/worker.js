onmessage = e => {
  switch (e.data) {
    case 'hi':
      postMessage('hello');
      break;
  
    case 'bye':
      postMessage('see you later');
      break;

    default:
      postMessage('I dont get it');
      break;
  }
};