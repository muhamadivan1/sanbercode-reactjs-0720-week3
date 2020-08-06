import React, { Component } from 'react'
import ItemBuah from './ItemBuah'


class DaftarBuah extends Component {
  constructor(props) {
    super(props)
    this.state = {
      dataHargaBuah : [
        {nama: "Semangka", harga: 10000, berat: 1000},
        {nama: "Anggur", harga: 40000, berat: 500},
        {nama: "Strawberry", harga: 30000, berat: 400},
        {nama: "Jeruk", harga: 30000, berat: 1000},
        {nama: "Mangga", harga: 30000, berat: 500}],
      input : {
        nama: " ",
        harga: " ",
        berat: " "
      },
      indexOfForm: -1
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleChange(event){
    let input = {...this.state.input}
    input[event.target.name] = event.target.value
    this.setState({
      input
    })
  }

  handleSubmit(event){
    event.preventDefault()

    let input = this.state.input
    if(input['nama'].replace(/\s/g, '') !== "" && input['harga'].toString().replace(/\s/g, "") !== "" && input['berat'].toString().replace(/\s/g, "") !== "");
      let newDaftarBuah = this.state.dataHargaBuah
      let index = this.state.indexOfForm
      console.log(index)
      if (index === -1) {
        newDaftarBuah = [...newDaftarBuah, input]
      } else {
        newDaftarBuah[index] = input
      }
      this.setState({
        dataHargaBuah: newDaftarBuah,
        input : {
          nama: '',
          harga: '',
          berat: ''
        },
        indexOfForm: -1
      })
  }

  handleEdit(event){
    let index = event.targeet.value
    let buah = this.state.dataHargaBuah[index]
    this.setState({
      input : {
        nama: buah.nama,
        harga: buah.harga,
        berat: buah.berat
      },
      indexOfForm: index
    })
  }

  handleDelete(event){
    let index = event.targeet.value
    let newDaftarBuah = this.state.dataHargaBuah
    let editDaftarBuah = newDaftarBuah[this.state.indexOfForm]
    newDaftarBuah.splice(index, 1)

    if (editDaftarBuah !== undefined){
      var newIndex = newDaftarBuah.findIndex((el) => el ===editDaftarBuah)
      this.setState({dataHargaBuah: newDaftarBuah, indexOfForm: newIndex})
    } else{
      this.setState({dataHargaBuah:newDaftarBuah})
    }
  }

  render() {
    return (
      <>
        <h1>Tabel Harga Buah</h1>
        <table>
          <tr>
            <header y={'No'}/>
            <header y={'Nama'}/>
            <header y={'Harga'}/>
            <header y={'Berat'}/>
            <header y={'Aksi'}/>
          </tr>
            {this.state.dataHargaBuah.map((el, index) => {
              return(
                <tr key={index}>
                  <row x= {index+1}/>
                  <row x= {el.nama}/>
                  <row x= {el.harga}/>
                  <row x= {el.berat/1000 + ' kg'}/>
                  <td>
                    <button onClick={this.handleEdit} value={index}>Edit</button>
                    &nbsp;
                    <button onClick={this.handleDelete} value={index}>Delete</button>  
                  </td>
                </tr>
              )
            })}
        </table>
        <h1>Form Buah</h1>
        <div id="form-content">
        <form onSubmit={this.handleSubmit}>
          <label> Nama Buah </label>
          <input type="text" name='nama' value={this.state.input.nama} onChange={this.handleChange} placeholder="nama"/><br/><br/>
          <label> Harga Buah </label>
          <input type="text" name='harga' value={this.state.input.harga} onChange={this.handleChange} placeholder="harga"/><br/><br/>
          <label> Berat Buah </label>
          <input type="text" name='berat' value={this.state.input.berat} onChange={this.handleChange} placeholder="berat"/><br/><br/>
          <button>Submit</button>
        </form>
        </div>
      </>
    )
  }
}

export default DaftarBuah