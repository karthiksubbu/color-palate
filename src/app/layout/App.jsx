import React, { Component } from "react";

import Controls from "../../features/Controls/Controls";
import ColorPalettes from "../../features/ColorPalettes/ColorPalettes";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Controls />
        <ColorPalettes />
      </div>
    );
  }
}

export default App;
