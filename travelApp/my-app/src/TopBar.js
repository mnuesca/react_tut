import React, {Component} from 'react';

const LeftNavBar = () =>{
	const options = [
		{
			'name': "TravApp"
		},
		{
			'name': "Kauai"
		},
	]
	const columns = options.map((option) => {
		return (
			<div className ='lOption'>
			{option.name}
			</div>
		);
	});
	
	return ( 
		<div className='leftNav'>
			{columns}
		</div>
	);
}


const RightNavBar = () =>{
	const options = [
		{
			'label': 'Sign up',
			'isLink': true,
		},
		{
			'label': 'Login',
			'isLink': false,
		},
		{
			'label': 'For Businesses',
			'isLink': true,
		},
		{
			'label': 'Help',
			'isLink': true,
		},
	]
			
	const columns = options.map((option) => {
		if (option.isLink){
			return (
				<div className ='rOption'>
					<a href="NULL">
					{option.label}
					</a>
				</div>
			);
		} else {
			return (
				<div className ='option'>
					<button>
					{option.label}
					</button>
				</div>
			);
		}
	});
	
	return (
		<div className = 'rightNav'>
			{columns}
		</div>
		
	);
}


class TopBar extends Component {
	render(){
		
		/* LEFT 
			Logo
			Search bar for trip (Where do you want to go?)
				No trips in database, then create a new trip
				If trip in database, then return layout of trip
		   RIGHT
			If not logged in:
				Sign up
				Login
				Help
				For businesses (provide interface to allow for advertisements)
			Else:
				Task Bar
					Trips
					Messages? (way to ask questions easilly??)
					Account
					Help
					Logout
				Accoount name
				Picture
		*/
		
		return (
			<div className = 'topbar'>
				<LeftNavBar />
				<RightNavBar />
			</div>
		);
	}
}

/* 			If not logged in:
				Sign up
				Login
				Help
				For businesses (provide interface to allow for advertisements)
			Else:
				Task Bar
					Trips
					Messages? (way to ask questions easilly??)
					Account
					Help
					Logout
				Accoount name
				Picture
				
*/

export default TopBar;

	