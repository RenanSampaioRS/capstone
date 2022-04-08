import Routes from "./routes";
import { GlobalStyle } from "./stylesGlobal";

function App() {
  return (
    <div className="App">
      <GlobalStyle/>
      <div>
        <Routes />
      </div>
    </div>
  );
}

export default App;
