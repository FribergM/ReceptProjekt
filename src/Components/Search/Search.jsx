import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import { FaSearch } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai"; 
import './Search.css';

function Search(allRecipes) {
    const [query, setQuery] = useState("");
    const [showInput, setShowInput] = useState(false);
    const navigate = useNavigate();
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 600);

    const handleSearch = () => {
        console.log("Search for: ", query);
        navigate(`/search-result?query=${encodeURIComponent(query)}`);
        setShowInput(false);
        setQuery("");
    };

    const handleKeyDown = (event) => {
        if (event.key === "Enter") {
            handleSearch();
        }
    };

    const resize = () => {
        setIsMobile(window.innerWidth <= 600);
    };

    useEffect(() => {
        window.addEventListener('resize', resize);
        return () => {
            window.removeEventListener("resize", resize);
        };
    }, []);

    const clearQuery = () => {
        setQuery(""); 
    };

    return (
        <>
            <div className="search_knapp">
                {isMobile ? 
                    <>
                        {!showInput ? (
                            <button className="mobile_search-button" onClick={() => setShowInput(true)}>
                                <FaSearch />
                            </button>
                        ) : (
                            <div className = "input-content">
                                <FaSearch className = "input-icon" onClick = {handleSearch}/>
                                <input
                                    className="search-input"
                                    type="text"
                                    // placeholder="sök för..."
                                    value={query}
                                    onChange={(e) => setQuery(e.target.value)}
                                    onKeyDown={handleKeyDown}
                                    
                                />
                                {query && ( 
                                    <button 
                                        className="clear-button" 
                                        onClick={clearQuery}
                                        >
                                        <AiOutlineClose className = "remove-icon" />
                                    </button>
                                )}
                            </div>
                        )}
                    </>
                    : (
                        <div className = "input-content" >
                            <FaSearch className = "input-icon" />
                            <input
                                className="search-input"
                                type="text"
                                // placeholder="sök för"
                                value={query}
                                onChange={(e) => setQuery(e.target.value)}
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
                        </div>
                    )}
            </div>
        </>
    );
}

export default Search;