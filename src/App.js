import React, { useState } from 'react';
import './app.css';

const App = () => {
  const [ url, setUrl ] = useState("https://www.youtube.com/embed/tgbNymZ7vqY");
  const width = document.body.clientWidth < 800 ? document.body.clientWidth : 800;
  const height = width * (9/16);
  return (
    <div className="container" style={{width}}>
      <form
        onSubmit={e => {
          e.preventDefault();
          const link = e.target.link.value;
          if(link.includes('/embed/'))
            setUrl(link);
          else if(link.includes('youtu.be/'))
            setUrl(`https://youtube.com/embed/${link.split('youtu.be/')[1]}`);
          else
            setUrl(`https://youtube.com/embed/${link.split("?v=")[1]}`);
        }}
      >
        <input type="text" name="link" placeholder="YouTube Link"/>
        <button>Submit</button>
      </form>
      <iframe
        title="embedded youtube player"
        frameBorder={0}
        width={width}
        height={height}
        src={url}
        allow="autoplay"
        allowFullScreen
      />
    </div>
  );
}

export default App;
