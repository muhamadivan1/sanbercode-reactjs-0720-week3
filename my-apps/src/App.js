import React from 'react';
import './App.css';
import UserInfo from './tugas11/TabelBuah'
import Timer from './tugas12/Timer'
import Clock from './tugas12/Clock'

function App() {
  return (
    <div>
      {/* tugas 11 */}
      <UserInfo/>
      {/* tugas 12 */}
      <Timer start={120}/>
      <Clock/>
    </div>
  );
}

export default App;