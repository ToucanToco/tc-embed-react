import React, { useEffect, useState } from 'react';
import "./index.css"


const TCEmbed = ({host, id, name}) => {
  // The loading state
  const [loading, setLoading] = useState(`Loading TCEmbed ${typeof name != "undefined" ? name:""}...`);

  // useEffect is a hook, will work like ComponentDidMount
  useEffect(() => {
    const script = document.createElement('script');
    script.src = `${host}/scripts/embedLauncher.js?id=${id}`;
    script.type = "text/javascript";
    script.async = true;

    document.querySelector('.embed-container').appendChild(script);

    // after the load, we remove the loading message
    // with this small callback [optional]
    script.onload = setTimeout(() => {
      setLoading("");
    }, 5000);

    return () => {
      document.body.removeChild(script);
    }
  }, [host, id]);


  return (
    <div className="tc-content">
      <div className="loading">{loading}</div>
      <div className="embed-container"></div>
    </div>
  );
}

export default TCEmbed;
