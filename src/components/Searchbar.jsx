import { useState } from "react"
import Results from "./Results"

export default function Searchbar ({data}) {
  const [query, setQuery] = useState("")
  const [fltrdRslts, setFltrdRslts] = useState([])
  
  function filterData() {
    return data.filter((obj) => {
      return Object.values(obj).some((value) =>
        String(value).toLowerCase().includes(query)
      );
    });
  }

  function handleCLick () {
    const filteredResults = filterData()
    setFltrdRslts(filteredResults)
    setQuery("")
  }
  function handleChange (e){
     setQuery(e.target.value.toLowerCase())
    }
  return (
    <div>
      <h1>This is the Searchbar</h1>
      <input type="text" placeholder="search" onChange={handleChange} value={query}  />
      <button onClick={handleCLick} >Go</button>
      <Results results={fltrdRslts}/>
    </div>
   )
}