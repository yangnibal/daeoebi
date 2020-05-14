import React from 'react'
import Layout from '../components/Layout'
import Header from '../components/Header'
import Bg from '../images/index.png'
import { Link } from 'react-router-dom'
import './Home.scss'

class Home extends React.Component{
    render(){
        return(
            <Layout>
                <Header/>
                <div className="home-content-container">
                    <Link to="" className="home-content">[대외비 성적 등급 관리] 프로그램</Link>
                    <Link to="" className="home-content">[대외비 교재 출력 관리] 프로그램</Link>
                </div>
                <div className="background-container">
                    <img src={Bg} alt={Bg} className="home-background"/>    
                </div>
            </Layout>
        )
    }
}

export default Home