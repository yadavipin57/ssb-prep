import "./App.css";
import Body from "./components/staticComp/Body";
import { UserProvider } from "./utils/contexts/userContext";

function App() {
  return (
    <UserProvider>
      <Body/>
    </UserProvider>
  )
}

export default App;
