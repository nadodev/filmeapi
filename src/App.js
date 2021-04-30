import Router from './routes'
import 'react-toastify/dist/ReactToastify.css'
import { ToastContainer } from 'react-toastify'
import './index.css';
function App() {
  return (
    <div className="App">
      <Router />
      <ToastContainer autoClose={3000} />
    </div>
  );
}
export default App;
