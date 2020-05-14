import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Grademanage from './pages/Grademanage'
import Academy from './pages/Academy';
import Test from './pages/Test'

class App extends React.Component{
	render(){
		return(
			<BrowserRouter>
				<Switch>
					<Route exact path="/" component={Home}/>
					<Route exact path="/account/login" component={Login}/>
					<Route exact path="/account/signup" component={Signup}/>
					<Route exact path="/grade_management" component={Grademanage}/>
					<Route exact path="/academy" component={Academy}/>
					<Route exact path="/academy/test" component={Test}/>
				</Switch>
			</BrowserRouter>
		)
	}
}

export default App