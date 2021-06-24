import React, {useState} from "react";

const ShoesForm = () => {
// axios
    const submitHandler = event => {
        event.preventDefault()
        // https://haidarazramanurung-92082-default-rtdb.asia-southeast1.firebasedatabase.app/
        fetch("https://haidarazramanurung-92082-default-rtdb.asia-southeast1.firebasedatabase.app/shoes.json",{
            method: 'POST',
            body: JSON.stringify(inputState),
            headers: {'Content-Type': 'application/json'}
        }).then(response => {
            console.log(response.json())
        })
    }

    const [inputState, setInputState] = useState({
        jenis: '',
        warna: '',
        bahan: '',
        merk: '',
        ukuran: '',
        harga: ''

    })
    console.log(inputState)
    return (        
        <div>
            <font color="Red">
            <p align ="center"> JENIS DAN HARGA SEPATU </p>
            </font>
            
            <form onSubmit={submitHandler}>
                <div>
                <p align ="center">
                    <label htmlFor={"title"}>Jenis Sepatu     :      </label>
                    <input
                        type="text"
                        id="title"
                        value={inputState.jenis}
                        onChange={
                            event => {
                                const newJenis = event.target.value
                                setInputState(prevInputState => ({
                                    jenis: newJenis,
                                    warna: prevInputState.warna,
                                    bahan: prevInputState.bahan,
                                    merk: prevInputState.merk,
                                    ukuran: prevInputState.ukuran,
                                    harga: prevInputState.harga
                                }))
                            }
                        }
                    />
                    </p>
                </div>
              
                <div>
                <p align ="center">
                    <label htmlFor={"warna"}>Warna Sepatu    :   </label>
                    <input
                        type="text"
                        id="warna"
                        value={inputState.warna}
                        onChange={
                            event => {
                                const newWarna = event.target.value
                                setInputState(prevInputState => ({
                                    warna: newWarna,
                                    bahan: prevInputState.bahan,
                                    merk: prevInputState.merk,
                                    ukuran: prevInputState.ukuran,
                                    harga: prevInputState.harga,
                                    jenis: prevInputState.jenis
                                }))
                            }
                        }
                    />
                    </p>
                </div>

                <div>
                <p align ="center">
                    <label htmlFor={"bahan"}>Bahan Sepatu    :   </label>
                    <input
                        type="text"
                        id="bahan"
                        value={inputState.bahan}
                        onChange={
                            event => {
                                const newBahan = event.target.value
                                setInputState(prevInputState => ({
                                    bahan: newBahan,
                                    merk: prevInputState.merk,
                                    ukuran: prevInputState.ukuran,
                                    harga: prevInputState.harga,
                                    jenis: prevInputState.jenis,
                                    warna: prevInputState.warna
                                }))
                            }
                        }
                    />
                    </p>
                </div>

                <div>
                <p align ="center">
                    <label htmlFor={"merk"}>Merk Sepatu      :   </label>
                    <input
                        type="text"
                        id="merk"
                        value={inputState.merk}
                        onChange={
                            event => {
                                const newMerk = event.target.value
                                setInputState(prevInputState => ({
                                    merk: newMerk,
                                    ukuran: prevInputState.ukuran,
                                    harga: prevInputState.harga,
                                    jenis: prevInputState.jenis,
                                    warna: prevInputState.warna,
                                    bahan: prevInputState.bahan

                                }))
                            }
                        }
                    />
                    </p>
                </div>

                <div>
                <p align ="center">
                    <label htmlFor={"ukuran"}>Ukuran Sepatu    :   </label>
                    <input
                        type="number"
                        id="ukuran"
                        value={inputState.Ukuran}
                        onChange={
                            event => {
                                const newUkuran = event.target.value
                                setInputState(prevInputState => ({
                                    ukuran: newUkuran,
                                    harga: prevInputState.harga,
                                    jenis: prevInputState.jenis,
                                    warna: prevInputState.warna,
                                    bahan: prevInputState.bahan,
                                    merk: prevInputState.merk
                                }))
                            }
                        }
                    />
                    </p>
                </div>

                <div>
                <p align ="center">
                <label htmlFor={"harga"}>Harga Sepatu    :   </label>
                    <input
                        type="number"
                        id="harga"
                        value={inputState.harga}
                        onChange={
                            event => {
                                const newHarga = event.target.value
                                setInputState(prevInputState => ({
                                    harga: newHarga,
                                    jenis: prevInputState.jenis,
                                    warna: prevInputState.warna,
                                    bahan: prevInputState.bahan, 
                                    merk: prevInputState.merk,
                                    ukuran: prevInputState.ukuran        
                                }))
                            }
                        }
                    />
                    </p>
                </div>

                <div>
                <p align ="center">
                    <button type="submit"><font color="Red">Tambah</font></button>
                    </p>
                </div>
            </form>
        </div>
    )
}

export default ShoesForm