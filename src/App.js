import React, { useState } from 'react';

const App = () => {
  const [ url, setUrl ] = useState("https://www.youtube.com/embed/tgbNymZ7vqY");
  return (
    <div >
      <form
        onSubmit={e => {
          e.preventDefault();
          const link = e.target.link.value;
          if(link.includes(`/embed/`))
            setUrl(link);
          else if(link.includes(`youtu.be/`))
            setUrl(`https://youtube.com/embed/${link.split(`youtu.be/`)[1]}`);
          else
            setUrl(`https://youtube.com/embed/${link.split("?v=")[1]}`);
        }}
      >
        <input 
          type="text"
          name="link"
        />
        <button>Submit</button>
      </form>
      <iframe width={window.innerWidth < 420 ? window.innerWidth : 420} src={url} />
    </div>
  );
}

export default App;
