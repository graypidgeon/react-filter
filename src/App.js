import logo from './logo.svg';
import './App.css';
import React from 'react';

const allUsers = ["Hania", "Mania"];

class Panel extends React.Component {

	render() {
		return <div>
			<DrawList />
		</div>
	}	
}

function DrawList() {
	return (
		<ul>
			{allUsers.map((user) => <li key={user}>{user}</li>)}
		</ul>
	);
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload. dupa
		wprowadzono zmiane
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
		<Panel/>
      </header>
    </div>
  );
}

export default App;
