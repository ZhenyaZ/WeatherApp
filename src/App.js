import React from "react";
import "@fontsource/roboto/300.css";
import Welcome from "./Components/Welcome Page/Welcome";
import Search from "./Components/Search Page/Search";
import "./App.css";

function App() {
  const [visible, setVisible] = React.useState(false);
  const onSetVisible = (data) => {
    setVisible(data);
  };
  return (
    <div className="App">
      {!visible ? <Welcome onSetVisible={onSetVisible} /> : <Search />}
    </div>
  );
}

export default App;
