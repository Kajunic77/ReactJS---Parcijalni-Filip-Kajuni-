import Header from "./components/Header";
import UserSearch from "./components/UserSearch";
import { BrowserRouter } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <UserSearch />
      </div>
    </BrowserRouter>
  );
};

export default App;
