import React, { useState, useEffect } from 'react'
import axios from 'axios'
import './hooks.css'

const Lists = () => {
    const [DataBuah,setDataBuah] = useState(null)
    const [inputName, setInputName] = useState("")
    const [inputHarga, setInputHarga] = useState("")
    const [inputBerat, setInputBerat] = useState("")
    const [indexOfForm, setIndexOfForm] = useState(-1)

    useEffect(() => {
        if(dataHargaBuah === null){
            axios.get('http://backendexample.sanbercloud.com/api/fruits')
                .then(res => {
                    setDataBuah(res.data.map(el => {
                        return (
                            id : el.id,
                            name : el.name,
                            harga: el.harga,
                            berat: el.berat
                        )
                    }))
                })
        }
    }, [dataHargaBuah]) 
  
    handleDelete(event){
      let index = event.target.value
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
  
  
    handleChange(event){
      let typeOfInput = event.target.name
      switch (typeOfInput){
        case "nama":
          {
            this.setState({inputName: event.target.value});
            break
          }
          case "harga":
          {
            this.setState({inputHarga: event.target.value});
            break
          }
          case "berat":
          {
            this.setState({inputBerat: event.target.value});
            break
          }
        default:
          {break;}
      }
    }
  
    handleSubmit(event){
      event.preventDefault()
      let nama = this.state.inputName
      let harga = this.state.inputHarga
      let berat = this.state.inputBerat
  
      if(nama.replace(/\s/g,'') !== "" && harga.replace(/\s/g,'') !== ''){
        let newDaftarBuah = this.state.dataHargaBuah
        let index = this.state.indexOfForm
  
        if (index === -1){
          newDaftarBuah = [...newDaftarBuah, {nama,harga,berat}]
        } else{
          newDaftarBuah[index]= {nama,harga,berat}
        }
  
        this.setState({
          dataHargaBuah: newDaftarBuah,
          inputName: "",
          inputHarga: "",
          inputBerat: 0
        })
      }
    }
  
    handleEdit(event){
      let index = event.target.value
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
    
    render() {
      return (
        <>
          <div className="container">
            <h1>Tabel Harga Buah</h1>
            <table>
                <thead>
                    <tr>
                        <th>No</th>
                        <th>Nama</th>
                        <th>Harga</th>
                        <th>Berat</th>
                        <th>Aksi</th>
                    </tr>
                </thead>
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
          </div>
          
          <div className="tambahData">
            <h1>Form Buah</h1>
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