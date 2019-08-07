import React from "react";

import Calendar from "./components/Calendar";

import "./App.css";

class App extends React.Component {
  render() {
    const dayOfTheMonth = [];
    {console.log(dayOfTheMonth);}
    return (
      <div className="App">
        <main>
          <Calendar data={dayOfTheMonth} />
        </main>
      </div>
    );
  }
}

export default App;