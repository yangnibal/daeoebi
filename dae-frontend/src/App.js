import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Grademanage from './pages/Grademanage'
import Academy from './pages/Academy';
import Test from './pages/Test'
import NewTest from './pages/NewTest'
import Student from './pages/Student'
import NewStudent from './pages/NewStudent'
import Grade from './pages/Grade'
import NewGrade from './pages/NewGrade'
import NewGroup from './pages/NewGroup'

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
					<Route exact path="/academy/test/new" component={NewTest}/>
					<Route exact path="/academy/student" component={Student}/>
					<Route exact path="/academy/student/new" component={NewStudent}/>
					<Route exact path="/academy/grade" component={Grade}/>
					<Route exact path="/academy/grade/new" component={NewGrade}/>
					<Route exact path="/academy/group/new" component={NewGroup}/>
				</Switch>
			</BrowserRouter>
		)
	}
}

export default App