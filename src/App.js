import Home from './pages/home';
import Setting from './pages/setting';
import { Router, Route, Link } from './router';

export default function App() {
  return (
    <Router>
      <Link to="/">首页</Link>
      <Link to="/setting">setting</Link>
      <Route path='/' component={Home} />
      <Route path='/setting' component={Setting} />
    </Router>
  )
}