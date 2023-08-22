import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.tsx'

// 清空默认css
import "reset-css"
// 引入全局CSS
import '@/assets/styles/global.scss'
import Router from "./router"

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Router />
  </React.StrictMode>,
)
