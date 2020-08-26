import React, { useState } from 'react';
import './app.css';

const App = () => {
  const [ url, setUrl ] = useState("https://www.youtube.com/embed/tgbNymZ7vqY");
  const width = document.body.clientWidth < 420 ? document.body.clientWidth : 420;
  const height = width * (9/16);
  return (
    <div className="container">
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
        <input type="text" name="link" placeholder="Youtube Link"/>
        <button>Submit</button>
      </form>
      <iframe
        frameBorder={0}
        width={width}
        height={height}
        src={url}
      />
    </div>
  );
}

export default App;
