import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.tsx'

// 清空默认css
import "reset-css"
// 引入全局CSS
import '@/assets/styles/global.scss'
// Array method:
// import App from "@/App.tsx";
// Component method:
import Router from "./router/index_component.tsx"
// Array method:
// import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
      {/*component method:*/}
      <Router />
      {/*array method:*/}
      {/*<BrowserRouter>*/}
      {/*    <App/>*/}
      {/*</BrowserRouter>*/}
  </React.StrictMode>,
)
