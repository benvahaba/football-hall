import GlobalStyles from "./components/styles/Global";
import * as model from "./model";

function App() {
  model.getTeams();
  return (
    <>
      <GlobalStyles />
      <div className="App">welcome</div>
    </>
  );
}

export default App;
