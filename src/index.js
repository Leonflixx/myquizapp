import React from 'react';
import ReactDOM from 'react-dom';
import Quiz from  './Quiz';


function App() {
	return (
		<div>
		<Quiz></Quiz>
		</div>
		)
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
  );

export default App;






