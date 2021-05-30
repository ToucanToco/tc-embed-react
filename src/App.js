import React from 'react';
import TCEmbed from './components/TCEmbed';
import './App.css';


const App = () => {
  const host = "https://demo-embed.toucantoco.com";
  const id = "ba817dc8-e1e6-4ee0-8ac8-b461d52e1b20";

  return (
    <div className="App">
      {/* You import the component here ! */}
      <TCEmbed name={"TCGraph"} host={host} id={id}/>
    </div>
  )
}

export default App;
