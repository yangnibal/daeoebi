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
import TestModify from './pages/TestModify'
import StudentModify from './pages/StudentModify'
import InputScore from './pages/InputScore'
import StudentTest from './pages/StudentTest'
import FindId from './components/FindId'
import FindPw from './components/FindPw'
import PrintProvider from 'react-easy-print'
import PrintPage from './pages/PrintPage'
import PrintContent from './components/Print';
import EditUserInfo from './pages/EditUserInfo'

class App extends React.Component{
	render(){
		return(
			<PrintProvider>
				<BrowserRouter>
					<Switch>
						<Route exact path="/" component={Home}/>
						<Route exact path="/account/login" component={Login}/>
						<Route exact path="/account/signup" component={Signup}/>
						<Route exact path="/account/findid" component={FindId}/>
						<Route exact path="/account/findpw" component={FindPw}/>
						<Route exact path="/account/edit" component={EditUserInfo}/>
						<Route exact path="/gm" component={Grademanage}/>
						<Route exact path="/ac" component={Academy}/>
						<Route exact path="/ac/test" component={Test}/>
						<Route exact path="/ac/test/new" component={NewTest}/>
						<Route exact path="/ac/test/:testid/update" component={TestModify}/>
						<Route exact path="/ac/student" component={Student}/>
						<Route exact path="/ac/student/inputscore" component={InputScore}/>
						<Route exact path="/ac/student/new" component={NewStudent}/>
						<Route exact path="/ac/student/:studentid/update" component={StudentModify}/>
						<Route exact path="/ac/student/:studentid" component={StudentTest}/>
						<Route exact path="/ac/grade/:testid" component={Grade}/>
						<Route exact path="/ac/grade/new" component={NewGrade}/>
						<Route exact path="/ac/group/new" component={NewGroup}/>
						<Route exact path="/printpage" component={PrintPage}/>
						<Route exact path="/printpage/print" component={PrintContent}/>
					</Switch>
				</BrowserRouter>
			</PrintProvider>
		)
	}
}

export default App