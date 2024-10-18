// import React, {useState, useEffect} from "react";
// import { useNavigate } from 'react-router-dom';
// import {FaSearch} from "react-icons/fa";


// function Search(allRecipes) {
//     const [query, setQuery] = useState("");
//     const [showInput, setShowInput] = useState(false);
//     const navigate = useNavigate();
//     const [isMobile, setIsMobile] = useState(window.innerWidth <= 600)

//     const handleSearch = () =>{
//         console.log("Search for: ",query)
//         navigate(`/search-result?query=${encodeURIComponent(query)}`);
//         setShowInput(false);
//     };

//     const handleKeyDown =(event => {
//         if(event.key === "Enter") {
//             handleSearch()
//         }
//     })

//     const resize = () => {
//         setIsMobile(window.innerWidth <= 600)
//     }

//    useEffect (( )=> {
//     window.addEventListener('resize', resize)
//     return () =>{
//         window.removeEventListener("resize",resize);
//     };
//    },[])

  
//     return(
//         <>
//             <div className = "search_knapp">
//                 {isMobile ? 
//                 <>
//                 {!showInput ? (
//                     <button  className="mobile_search-button"  onClick={() => setShowInput(true)}>
//                     <FaSearch />
//                     </button>
//                 ) : (
//                     <div>
//                     <input
//                         className="search-input"
//                         type="text"
//                         placeholder="sök för..."
//                         value={query}
//                         onChange={(e) => setQuery(e.target.value)}
//                         onKeyDown={handleKeyDown}
//                     /> 
//                     </div>
//                 )}
//                </>
                
//                 :(<input 
//                     className="search-input"
//                     type = "text"
//                     placeholder="sök för"
//                     value ={query}
//                     onChange ={(e) => setQuery(e.target.value)}
//                     onKeyDown={handleKeyDown}/>)}
//             </div>
//         </>
//     )
// }

// export default Search;




// import React, {useState, useEffect} from "react";
// import { useNavigate } from 'react-router-dom';
// import {FaSearch} from "react-icons/fa";



// function Search(allRecipes) {
//     const [query, setQuery] = useState("");
//     const [showInput, setShowInput] = useState(false);
//     const navigate = useNavigate();
//     const [isMobile, setIsMobile] = useState(window.innerWidth <= 600)

//     const handleSearch = () =>{
//         console.log("Search for: ",query)
//         navigate(`/search-result?query=${encodeURIComponent(query)}`);
//         setShowInput(false);
//     };

//     const handleKeyDown =(event => {
//         if(event.key === "Enter") {
//             handleSearch()
//         }
//     })

//     const resize = () => {
//         setIsMobile(window.innerWidth <= 600)
//     }

//    useEffect (( )=> {
//     window.addEventListener('resize', resize)
//     return () =>{
//         window.removeEventListener("resize",resize);
//     };
//    },[])

//    const clearQuery = () => {
//     setQuery("")
//    }

  
//     return(
//         <>
//             <div className = "search_knapp">
//                 {isMobile ? 
//                 <>
//                 {!showInput ? (
//                     <button  className="mobile_search-button"  onClick={() => setShowInput(true)}>
//                     <FaSearch />
//                     </button>
//                 ) : (
//                     <div className = "input-container">
//                         <FaSearch className ="search-icon"/>
//                     <input
//                         className="search-input"
//                         type="text"
//                         placeholder="sök för..."
//                         value={query}
//                         onChange={(e) => setQuery(e.target.value)}
//                         onKeyDown={handleKeyDown}
//                     /> 
//                     </div>
//                 )}
//                </>
                
//                 :(<input 
//                     className="search-input"
//                     type = "text"
//                     placeholder="sök för"
//                     value ={query}
//                     onChange ={(e) => setQuery(e.target.value)}
//                     onKeyDown={handleKeyDown}/>)}
//             </div>
//         </>
//     )
// }

// export default Search;



// import React, { useState, useEffect } from "react";
// import { useNavigate } from 'react-router-dom';
// import { FaSearch } from "react-icons/fa";
// import { AiOutlineClose } from "react-icons/ai"; // 引入 X 图标

// function Search(allRecipes) {
//     const [query, setQuery] = useState("");
//     const [showInput, setShowInput] = useState(false);
//     const navigate = useNavigate();
//     const [isMobile, setIsMobile] = useState(window.innerWidth <= 600);

//     const handleSearch = () => {
//         console.log("Search for: ", query);
//         navigate(`/search-result?query=${encodeURIComponent(query)}`);
//         setShowInput(false);
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
//         setQuery(""); // 清空输入框
//     };

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
//                             <div style={{ display: 'flex', alignItems: 'center', position: 'relative' }}>
//                                 <FaSearch style={{ position: 'absolute', left: '10px', color: '#888' }} onClick = {handleSearch}/>
//                                 <input
//                                     className="search-input"
//                                     type="text"
//                                     placeholder="sök för..."
//                                     value={query}
//                                     onChange={(e) => setQuery(e.target.value)}
//                                     onKeyDown={handleKeyDown}
//                                     style={{ paddingLeft: '30px', paddingRight: '30px' }} // 留出空间给图标
//                                 />
//                                 {query && ( // 如果有输入内容，显示 X 图标
//                                     <button 
//                                         className="clear-button" 
//                                         onClick={clearQuery} 
//                                         style={{
//                                             position: 'absolute', 
//                                             right: '1px', 
//                                             background: 'none', 
//                                             border: 'none', 
//                                             cursor: 'pointer', 
//                                             padding: '20', 
//                                             margin: '0',
//                                             height: '100%', // 使按钮高度与输入框一致
//                                             display: 'flex', 
//                                             alignItems: 'center'
//                                         }}>
//                                         <AiOutlineClose style={{ color: '#888' }} />
//                                     </button>
//                                 )}
//                             </div>
//                         )}
//                     </>
//                     : (
//                         <div style={{ display: 'flex', alignItems: 'center', position: 'relative' }}>
//                             <FaSearch style={{ position: 'absolute', left: '10px', color: '#888' }} 
//                             onClick={handleSearch}/>
//                             <input
//                                 className="search-input"
//                                 type="text"
//                                 placeholder="sök för"
//                                 value={query}
//                                 onChange={(e) => setQuery(e.target.value)}
//                                 onKeyDown={handleKeyDown}
//                                 style={{ paddingLeft: '30px', paddingRight: '30px' }} // 留出空间给图标
//                             />
//                             {query && ( // 如果有输入内容，显示 X 图标
//                                 <button 
//                                     className="clear-button" 
//                                     onClick={clearQuery} 
//                                     style={{
//                                         position: 'absolute', 
//                                         right: '1px', 
//                                         background: 'none', 
//                                         border: 'none', 
//                                         cursor: 'pointer', 
//                                         padding: '10', 
//                                         margin: '0',
//                                         height: '100%', // 使按钮高度与输入框一致
//                                         display: 'flex', 
//                                         alignItems: 'center'
//                                     }}>
//                                     <AiOutlineClose style={{ color: '#888' }} />
//                                 </button>
//                             )}
//                         </div>
//                     )}
//             </div>
//         </>
//     );
// }

// export default Search;
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