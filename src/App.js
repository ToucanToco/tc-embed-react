import React from 'react';
import './App.css';

class App extends React.Component {

  componentDidMount() {
    const script = document.createElement("script");

    script.src = "https://demo-embed.toucantoco.com/scripts/embedLauncher.js?id=ba817dc8-e1e6-4ee0-8ac8-b461d52e1b20";
    script.type = "text/javascript"
    script.async = true;

    document.querySelector('.embed-container').appendChild(script);
  }

  render() {
    return (
      <div className="App">
        <div className="embed-container"></div>
      </div>
    );
  }
};

export default App;
