import React from 'react';
import './App.css';
import Timer from './tugas12/Timer'
import Clock from './tugas12/Clock'
import DaftarBuah from './tugas13/DaftarBuah'

function App() {
  return (
    <div>
      {/* tugas 11 */}
      {/* <UserInfo/> */}
      {/* tugas 12 */}
      <Timer start={120}/>
      <Clock/>
      {/* tugas 13 */}
      <DaftarBuah/>
    </div>
  );
}

export default App;