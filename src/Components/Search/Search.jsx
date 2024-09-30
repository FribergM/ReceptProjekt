import React from "react";
import {useState} from "react";

function Search() {
    const[query, setQuery] = useState("");
    const handleSearch = () =>{
        console.log("Search for: ",query)
        searchSomething(query);
    };
    return<div className = "search-container">
        <input type="text" placeholder ="Search..." value={query} onChange={(e)=>{
            setQuery(e.target.value)
        }}/>
        <button className = "search-button" onClick = {handleSearch}>Search</button>
        
    </div>
}

function searchSomething(query) {
    return "answer"
}

export default Search;