import React from 'react';
import { TableBase } from './components/TableBase';

function App() {
  const Dummy_Data = [
    {
      songTitle:"Love Gun",
      artist:"Kiss",
      genre:"Rock-N-Roll",
      album:"Love Gun",
      releaseDate:"June 30, 1977",
    }
   ]
  return (
    <div>
      <TableBase items={Dummy_Data}/>
    </div>
  );
}

export default App;
