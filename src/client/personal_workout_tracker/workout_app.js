import React, {Component} from 'react';
import WorkoutForm from './workout_form.js';
import "./workout_app.css"

export default class WorkoutTracker extends Component {
	constructor(props){
		super(props)
	}

	render(){
		return(
			<div className="container">
				<div className="row justify-content-md-center">
				<WorkoutForm />

					<div className="row justify-content-md-center">
						<h1>Data area under construction</h1>
					</div>
				</div>
			</div>
		)
	}
}