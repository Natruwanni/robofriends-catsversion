import React, { Component } from 'react';
import CardList from '../Components/CardList';
import SearchBox from '../Components/SearchBox';
import Scroll from '../Components/Scroll';
import './App.css';

class App extends Component  {
	constructor() {
		super()
		this.state = {
			Cats: [],
			searchfield: ''
		}
	}

	componentDidMount() {
		fetch('https://jsonplaceholder.typicode.com/users')
			.then(response => response.json())
			.then(users => this.setState({ Cats: users }));
	}

	onSearchChange = (event) => { 
		this.setState({ searchfield: event.target.value })
	}


	render() {
		const { Cats, searchfield } = this.state;
			const filteredCats = Cats.filter(Cats => {
			return Cats.name.toLowerCase().includes(searchfield.toLowerCase());
		})
		return !Cats.length ? 
				<h1>Loading</h1> :
				(
				<div className='tc'>
					<h1>Cat Friends</h1>
					<SearchBox searchChange={this.onSearchChange}/>
					<Scroll>
					<CardList Cats={filteredCats}/>
					</Scroll>
				</div>
				);
	}
	
}


export default App;