import React, {useState} from "react";
import SearchedRecipes from "./SearchedRecipes";


function Search(allRecipes) {
    const[query, setQuery] = useState("");
    const handleSearch = () =>{
        console.log("Search for: ",query)
    };
    return<div className = "search-container">
        <input type="text" placeholder ="Search..." value={query} onChange={(e)=>{
            setQuery(e.target.value)
        }}/>
        <button className = "search-button" onClick = {handleSearch}>Search</button>
        {query && (<SearchedRecipes recipes ={allRecipes} query={query} />)}
    </div>
}

export default Search;