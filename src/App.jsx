import './App.css'
import Body from './components/staticComp/Body'
import { AuthProvider } from './contexts/AuthContext.jsx';

function App() {

  return (
    <AuthProvider>
      <Body />
    </AuthProvider>
  );
}

export default App