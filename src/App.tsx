import './App.css'
import { Route, Routes } from 'react-router-dom'
import URLDiffPage from './tools/url_diff/UrlDiffPage'
import HomePage from './HomePage'

function App() {

  return (
    <div className="App">
      {/* 配置路由 */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/url-diff" element={<URLDiffPage />} />
      </Routes>
    </div>
  )
}

export default App
