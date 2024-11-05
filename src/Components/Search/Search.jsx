import React, { useState, useEffect, useMemo, useCallback } from "react";
import { useNavigate } from 'react-router-dom';
import { FaSearch } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai"; 
import './Search.css';

function Search({recipes, categories}) {
    
    const [query, setQuery] = useState('');
    const[filteredResults, setFilteredResults] = useState([]);
    

    const [showInput, setShowInput] = useState(false);
    const navigate = useNavigate();
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 600);

const nameArr = useMemo(() => recipes.map(recipe => recipe.title.toLowerCase()),[recipes]);
const timeArr = useMemo(() => recipes.map(recipe => recipe.timeInMins),[recipes]);
const categoryNameArr = useMemo (() => categories.map(category => category.name.toLowerCase()),[categories]) 

const ingredientArr = useMemo(() => {
    return [...new Set(recipes.map(recipe => recipe.ingredients.map(ingredient => ingredient.name.toLowerCase())).flat())];},[recipes])

const handleInputChange = useCallback((event) =>{
    const value = event.target.value.toLowerCase();
    setQuery(value);
    if(value) {
        const nameMatches = nameArr.filter(name => name.includes(value));
        const timeMatches = timeArr.filter(time => time.toString().includes(value));
        const categoryMatches = categoryNameArr.filter(categoryName => categoryName.includes(value))
        const ingredientMatches = ingredientArr.filter(ingredient => ingredient.includes(value));

        const combinedResults =[
            ...nameMatches,
            ...timeMatches,
            ...categoryMatches,
            ...ingredientMatches
        ];

        const uniqueResults =[...new Set(combinedResults)];

        const sortedResult = uniqueResults.sort((a,b) => {
            if(typeof a === 'number' && typeof b ==='number') {
                return a-b;
            }
            if(typeof a === 'string' && typeof b ==='string') {
                return a.localeCompare(b);
            }
            return typeof a === 'number' ? -1 : 1;
        });

        setFilteredResults(sortedResult)
    }else{
        setFilteredResults([])
    }
},[nameArr, timeArr, categoryNameArr])
    const handleSearch = () => {
        if(query) {
            navigate(`/search-result?query=${encodeURIComponent(query)}`);
        setShowInput(false);
        setQuery("");
        setFilteredResults([]);

        }else {
            setShowInput(false);
 
        }
        
    }

    const handleKeyDown = (event) => {
        if(event.key === "Enter") {
            handleSearch();
        }
    }

    const handleResultClick = (result)=> {
        navigate(`/search-result?query=${encodeURIComponent(result)}`);
        setShowInput(false);
        setQuery("");
        setFilteredResults([]);
        
    }

    const resize = () =>{
        setIsMobile(window.innerWidth <= 600)
    }

    useEffect (() =>{
        window.addEventListener('resize', resize)
        return ()=> {
            window.removeEventListener('resize',resize);
        };
    },[])

    const clearQuery = () => {
        setQuery("");
    }


return (
        
    <div className="search_knapp">

        {!showInput ?(
            <button className ="search-button" onClick ={()=>setShowInput(true)}>
            {/* {isMobile ? <FaSearch /> : "Sök"} */}
            {<FaSearch />}
        </button>
        ):(
            <div className = "input-content" >
            <FaSearch className = "input-icon"  onClick ={handleSearch}/>
            
            <input
                className="search-input"
                type="text"
                 placeholder="Sök"
                value={query}
                onChange={handleInputChange}
                onKeyDown={handleKeyDown}
            />
            
            {query && ( 
                <button 
                    className="clear-button" 
                    onClick={clearQuery} 
                    >
                    <AiOutlineClose className = "remove-icon"  />
                </button>
            )}

             {filteredResults.length >0 && (
                <ul className = "search-result">
                    {filteredResults.map((result, index)=>(
                        <li key ={index} onClick ={() => handleResultClick(result)}>
                            {result}
                        </li>   
                    ))
                    }
                </ul>
            )}
        </div>
        )}       
    </div>
       );
    }


export default Search;
