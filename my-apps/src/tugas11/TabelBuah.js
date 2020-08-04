import React from 'react';
import '../tugas11/style.css';

let dataHargaBuah = [
  {nama: "Semangka", harga: 10000, berat: 1000},
  {nama: "Anggur", harga: 40000, berat: 500},
  {nama: "Strawberry", harga: 30000, berat: 400},
  {nama: "Jeruk", harga: 30000, berat: 1000},
  {nama: "Mangga", harga: 30000, berat: 500}
]


class NamaBuah extends React.Component {
  render () {
      return <h1>{this.props.nama}</h1>
  }
}

class Harga extends React.Component {
  render () {
      return <h1>{this.props.harga}</h1>
  }
}

class Berat extends React.Component {
  render () {
      return <h1>{this.props.berat} kg</h1>
  }
}

class TabelBuah extends React.Component {
  render() {
    return (
      <>
      <h1 className="header">Tabel Harga Buah</h1>
      <table width="720px" className="TabelBuah" border="1px" color="black">
        <tr className="tr">
          <th>Nama</th>
          <th>Harga</th>
          <th>Berat</th>
        </tr>
        {dataHargaBuah.map(el=> {
          return (
            <tr className="tr2">
              <td><NamaBuah nama={el.nama}/></td>
              <td><Harga harga={el.harga}/></td>
              <td><Berat berat={el.berat/1000}/></td>
            </tr> 
          )
        })}
      </table>
      </>
    )
  }
}
  
  

export default TabelBuah