import ReactDOM from 'react-dom/client'
import './styles/index.css'
import {
	BrowserRouter
  } from "react-router-dom";
import { MainApp } from './09-useContext/MainApp';
  
ReactDOM.createRoot(document.getElementById('root')).render(
	<BrowserRouter>
		<MainApp/>
	</BrowserRouter>
)
