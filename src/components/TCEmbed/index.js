import React, { useEffect } from 'react';


const TCEmbed = ({host, id}) => {

  // useEffect is a hook, will work like ComponentDidMount
  useEffect(() => {
    const script = document.createElement('script');
    script.src = `${host}/scripts/embedLauncher.js?id=${id}`;

    document.querySelector('.embed-container').appendChild(script);

    return () => {
      document.body.removeChild(script);
    }
  }, [host, id]);

  return <div className="embed-container"></div>;
}

export default TCEmbed;
