import React, {Component} from 'react';
import TopBar from './TopBar';
//import SideBar from './SideBar';

class App extends Component {
	render(){
		return (
			<div className = 'topBar'>
				<TopBar />
			</div>
			/*
			<div className = 'sideBar'>
				<SideBar />
			</div>
			*/
		);
	}
2}

export default App;