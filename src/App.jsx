import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Newsletterpage from './pages/Newsletterpage'
import Aboutpage from './pages/Aboutpage'
import BlogDetail1 from './pages/BlogDetail1'
import BlogDetail2 from './pages/BlogDetail2'
import BlogDetail3 from './pages/BlogDetail3'
import BlogDetail4 from './pages/BlogDetail4'
import BlogDetail5 from './pages/BlogDetail5'
import BlogDetail6 from './pages/BlogDetail6'
import BlogDetail7 from './pages/BlogDetail7'
import BlogDetail8 from './pages/BlogDetail8'
import BlogDetail9 from './pages/BlogDetail9'
import BlogDetail10 from './pages/BlogDetail10'

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/Blogs" element={<Home />} />
          <Route path="/Blogs/about" element={<Aboutpage />} />
          <Route path="/Blogs/newsletter" element={<Newsletterpage />} />
          <Route path='Blogs/blog/1' element={<BlogDetail1/>} />
          <Route path='Blogs/blog/2' element={<BlogDetail2/>} />
          <Route path='Blogs/blog/3' element={<BlogDetail3/>} />
          <Route path='Blogs/blog/4' element={<BlogDetail4/>} />
          <Route path='Blogs/blog/5' element={<BlogDetail5/>} />
          <Route path='Blogs/blog/6' element={<BlogDetail6/>} />
          <Route path='Blogs/blog/7' element={<BlogDetail7/>} />
          <Route path='Blogs/blog/8' element={<BlogDetail8/>} />
          <Route path='Blogs/blog/9' element={<BlogDetail9/>} />
          <Route path='Blogs/blog/10' element={<BlogDetail10/>} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
