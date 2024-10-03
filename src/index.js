import ReactDOM from 'react-dom'
import React from 'react'
import App from './App'
import { Provider } from 'react-redux'
import './index.css'; 
// import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css'
import 'antd/dist/reset.css';
// import store from './redux/store'
import { BrowserRouter as Router } from 'react-router-dom'
import store from './redux/store'

const savedDarkMode = localStorage.getItem('dark-mode') === 'true';
if (savedDarkMode) {
  document.documentElement.classList.add('dark');
} else {
  document.documentElement.classList.remove('dark');
} 
ReactDOM.render(
    <Provider store={store}>
        <Router>
            <App/>
            </Router>
    </Provider>
            

,document.getElementById("root"))