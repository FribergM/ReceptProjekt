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
        
            <div className="search_knapp">

                {!showInput ?(
                    <button className ="search-button" onClick ={()=>setShowInput(true)}>
                    {isMobile ? <FaSearch /> : "Sök"}
                </button>
                ):(
                    <div className = "input-content" >
                    <FaSearch className = "input-icon"  onClick ={handleSearch}/>
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
       
    );
}

export default Search;


// import React, { useState, useEffect } from "react";
// import { useNavigate } from 'react-router-dom';
// import { FaSearch } from "react-icons/fa";
// import { AiOutlineClose } from "react-icons/ai"; 
// import './Search.css';

// function Search(allRecipes) {

//     const [isDropdownOpen, setIsDropdownOpen] = useState(false);


//     const [query, setQuery] = useState("");
//     const [showInput, setShowInput] = useState(false);
//     const navigate = useNavigate();
//     const [isMobile, setIsMobile] = useState(window.innerWidth <= 600);

//     const handleSearch = () => {
//         console.log("Search for: ", query);
//         navigate(`/search-result?query=${encodeURIComponent(query)}`);
//         setShowInput(false);
//         setIsDropdownOpen(false)
//         setQuery("");
//     };

//     const handleKeyDown = (event) => {
//         if (event.key === "Enter") {
//             handleSearch();
//         }
//     };

//     const resize = () => {
//         setIsMobile(window.innerWidth <= 600);
//     };

//     useEffect(() => {
//         window.addEventListener('resize', resize);
//         return () => {
//             window.removeEventListener("resize", resize);
//         };
//     }, []);

//     const clearQuery = () => {
//         setQuery(""); 
//     };

//     const handleInputChange =(e)=>{
//         setQuery(e.target.value);
//         setIsDropdownOpen(e.target.value.length >0);
//       }
  
//       const handleRecipeSelect = (recipe) => {
//         setQuery(recipe.title);
//         setIsDropdownOpen(false)
//       }

//     return (
//         <>
//             <div className="search_knapp">
//                 {isMobile ? 
//                     <>
//                         {!showInput ? (
//                             <button className="mobile_search-button" onClick={() => setShowInput(true)}>
//                                 <FaSearch />
//                             </button>
//                         ) : (
//                             <div className = "input-content">
//                                 <FaSearch className = "input-icon" onClick = {handleSearch}/>
//                                 <input
//                                     className="search-input"
//                                     type="text"
//                                     // placeholder="sök för..."
//                                     value={query}
//                                     onChange={handleInputChange}
//                                     onKeyDown={handleKeyDown}
                                    
//                                 />
//                                 {query && ( 
//                                     <button 
//                                         className="clear-button" 
//                                         onClick={clearQuery}
//                                         >
//                                         <AiOutlineClose className = "remove-icon" />
//                                     </button>
//                                 )}
//                             </div>
//                         )}
//                     </>
//                     : (
//                         <div className = "input-content" >
//                             <FaSearch className = "input-icon" />
//                             <input
//                                 className="search-input"
//                                 type="text"
//                                 // placeholder="sök för"
//                                 value={query}
//                                 onChange={handleInputChange}
//                                 onKeyDown={handleKeyDown}
//                             />
//                             {query && ( 
//                                 <button 
//                                     className="clear-button" 
//                                     onClick={clearQuery} 
//                                     >
//                                     <AiOutlineClose className = "remove-icon"  />
//                                 </button>
//                             )}
//                             {isDropdownOpen && filteredRecipes.length > 0 && (
//                                 <ul className ="dropdown-list">
//                                     {filteredRecipes.map(recipe => (
//                                      <li key={recipe.id} onClick={() => handleRecipeSelect(recipe)}>
//                                      {recipe.title} - {recipe.timeInMins} min
//                                      </li>
//                                       ))
//                                     }
//                                 </ul>
//                             )}
//                         </div>
//                     )}
//             </div>
//         </>
//     );
// }

// export default Search;






// import React, { useState, useEffect } from "react";
// import { useNavigate } from 'react-router-dom';
// import { FaSearch } from "react-icons/fa";
// import { AiOutlineClose } from "react-icons/ai"; 
// import './Search.css';

// function Search({ allRecipes }) {
//     const [query, setQuery] = useState("");
//     const [showInput, setShowInput] = useState(false);
//     const [isMobile, setIsMobile] = useState(window.innerWidth <= 600);
//     const [isDropdownOpen, setIsDropdownOpen] = useState(false);
//     const navigate = useNavigate();

//     const resize = () => {
//         setIsMobile(window.innerWidth <= 600);
//     };

//     useEffect(() => {
//         window.addEventListener('resize', resize);
//         return () => {
//             window.removeEventListener("resize", resize);
//         };
//     }, []);

//     const clearQuery = () => {
//         setQuery(""); 
//         setIsDropdownOpen(false);
//     };

//     const handleInputChange = (e) => {
//         const value = e.target.value;
//         setQuery(value);
//         setIsDropdownOpen(value.length > 0);
//     };

//     const handleRecipeSelect = (recipe) => {
//         setQuery(recipe.title);
//         setIsDropdownOpen(false);
//         navigate(`/search-result?query=${encodeURIComponent(recipe.title)}`);
//     };

//     // 根据 query 过滤食谱
//     const filteredRecipes = allRecipes.filter(recipe => 
//         recipe.title.toLowerCase().includes(query.toLowerCase())
//     );

//     const handleKeyDown = (event) => {
//         if (event.key === "Enter") {
//             navigate(`/search-result?query=${encodeURIComponent(query)}`);
//             setQuery("");
//             setIsDropdownOpen(false);
//         }
//     };

//     return (
//         <div className="search_knapp">
//             {isMobile ? 
//                 <>
//                     {!showInput ? (
//                         <button className="mobile_search-button" onClick={() => setShowInput(true)}>
//                             <FaSearch />
//                         </button>
//                     ) : (
//                         <div className="input-content">
//                             <FaSearch className="input-icon" onClick={handleKeyDown}/>
//                             <input
//                                 className="search-input"
//                                 type="text"
//                                 value={query}
//                                 onChange={handleInputChange}
//                                 onKeyDown={handleKeyDown}
//                             />
//                             {query && ( 
//                                 <button className="clear-button" onClick={clearQuery}>
//                                     <AiOutlineClose className="remove-icon" />
//                                 </button>
//                             )}
//                         </div>
//                     )}
//                 </>
//                 : (
//                     <div className="input-content">
//                         <FaSearch className="input-icon" />
//                         <input
//                             className="search-input"
//                             type="text"
//                             value={query}
//                             onChange={handleInputChange}
//                             onKeyDown={handleKeyDown}
//                         />
//                         {query && ( 
//                             <button className="clear-button" onClick={clearQuery}>
//                                 <AiOutlineClose className="remove-icon" />
//                             </button>
//                         )}
//                         {isDropdownOpen && filteredRecipes.length > 0 && (
//                             <ul className="dropdown-list">
//                                 {filteredRecipes.map(recipe => (
//                                     <li key={recipe.id} onClick={() => handleRecipeSelect(recipe)}>
//                                         {recipe.title} - {recipe.timeInMins} min
//                                     </li>
//                                 ))}
//                             </ul>
//                         )}
//                     </div>
//                 )}
//         </div>
//     );
// }

// export default Search;