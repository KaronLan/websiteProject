import React, {useState} from 'react'
import './Searchbar.css'
import QueryStatsIcon from '@mui/icons-material/QueryStats';
import ClearIcon from '@mui/icons-material/Clear';

function Searchbar({placeholder, data}) {

    const [filteredData, setFilterData]  = useState([]);
    const [wordEntered, setWordEntered] = useState("");

    const handleFilter = (event) =>{
        const searchWord = event.target.value
        setWordEntered(searchWord);
        const newFilter = data.filter((value) =>{
            return value.Name.toLowerCase().includes(searchWord.toLowerCase())
        });

        if(searchWord === ""){
            setFilterData([])
        } else{
            setFilterData(newFilter)
        }

    };

  const clearInput = () =>{
    setFilterData([]);
    setWordEntered("");
  };

  return (
    <div className='search'>
        <div className="searchInputs">
            <input type = "text" placeholder={placeholder} value = {wordEntered}  onChange={handleFilter}/>
            <div className="searchIcon">
                {filteredData.length === 0 ? <QueryStatsIcon /> : <ClearIcon id = "clearBtn" onClick ={clearInput} />}
            </div>
        </div>
        { filteredData.length != 0 && (
            <div className="dataResult">
                {filteredData.slice(0, 10).map((value,key) => {
                     return(
                        <a className='dataItem' >
                            <p>{value.Name}</p>
                        </a>
                    );
                })}
            </div>
        )}
   </div>
  );
}

export default Searchbar
