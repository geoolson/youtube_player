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
          setUrl(`https://youtube.com/embed/${link.split("?v=")[1]}`);
        }}
      >
        <input 
          type="text"
          name="link"
        />
        <button>Submit</button>
      </form>
      <iframe width={420} height={315} src={url} />
    </div>
  );
}

export default App;
