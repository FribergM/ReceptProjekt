// import React, { useState, useEffect } from "react";
// import {FaBars} from 'react-icons/fa';
// import { Link } from "react-router-dom"; 
// import "./Category.css"

// function Category({categories}) {
//     const [isMobile, setIsMobile] = useState(window.innerWidth <= 600)

//     const [showCategories, setShowCategories] = useState(false);

//     const filteredCategories = categories.slice(0,10)

//     const resize = ()=> {
//         setIsMobile(window.innerWidth <= 600)
//     }

//     const toggleSidebar = () => {
//         setShowCategories((prev) => !prev);
//     };
    
//     const handleBackgroundClick = () => {
//         if (showCategories) {
//             setShowCategories(false);
//         }
//     }

//     useEffect (()=> {
//         window.addEventListener('resize', resize)

        
//         return () => {
//             window.removeEventListener("resize", resize);
//         };
//     },[])

//     return (
//         <>
//             <div className="sidebar-container">
//                 <button onClick={toggleSidebar} className="sidebar-toggle">
//                     {isMobile ?<FaBars />:"Kategorier"}
//                 </button>

//                 {showCategories && <div className="overlay" onClick={handleBackgroundClick} />}

//                 <div className={`sidebar ${showCategories ? 'active' : ''}`}>
//                     {filteredCategories.map((category,index) =>(
//                         <Link className="category-item" key={index} to={`/categories/${category.name}`} onClick={toggleSidebar}>{category.name}</Link>
//                     ))}
//                 </div>
//              </div>
//         </>       
//     );
// }

// export default Category;


/*2*/

import React, { useState, useEffect, useRef } from "react";
import {FaBars} from 'react-icons/fa';
import { Link } from "react-router-dom"; 
import "./Category.css"

function Category({categories}) {
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 600)

    const [showCategories, setShowCategories] = useState(false);

    const scrollRef = useRef(null);

    const filteredCategories = categories.slice(0,10)

    const resize = ()=> {
        setIsMobile(window.innerWidth <= 600)
    }

    const toggleSidebar = () => {
        setShowCategories((prev) => !prev);
    };
    
    const handleBackgroundClick = () => {
        if (showCategories) {
            setShowCategories(false);
        }
    }

    useEffect (()=> {
        window.addEventListener('resize', resize)

        
        return () => {
            window.removeEventListener("resize", resize);
        };
    },[])

    const scrollLeft = () =>{
        if(scrollRef.current) {
            scrollRef.current.scrollBy({
                left: -150,
                behavior: "smooth",
            });
        }
    }

    const scrollRight = () => {
        if(scrollRef.current) {
            scrollRef.current.scrollBy({
                left: 150,
                behavior: "smooth",
            });
        }

    }

    

    // return (
    //     <>
    //         <div className="sidebar-container">
    //             <button onClick={toggleSidebar} className="sidebar-toggle">
    //                 {isMobile ?<FaBars />:"Kategorier"}
    //             </button>

    //             {showCategories && <div className="overlay" onClick={handleBackgroundClick} />}

    //             <div className={`sidebar ${showCategories ? 'active' : ''}`}>
    //                 {filteredCategories.map((category,index) =>(
    //                     <Link className="category-item" key={index} to={`/categories/${category.name}`} onClick={toggleSidebar}>{category.name}</Link>
    //                 ))}
    //             </div>
    //          </div>
    //     </>       
    // );

    return (
        <>
            <div className="categori-container">
                {isMobile ? (
                    <>
                        <button onClick={toggleSidebar} className="sidebar-toggle">
                            <FaBars />
                        </button>

                        {showCategories && <div className="overlay" onClick={handleBackgroundClick} />}

                        <div className={`sidebar ${showCategories ? 'active' : ''}`}>
                            {categories.map((category, index) => (
                                <Link className="sidebar-item" key={index} to={`/categories/${category.name}`} onClick={toggleSidebar}>
                                    {category.name}
                                </Link>
                            ))}
                        </div>
                    </>
                ) : (
                    
                    <div className="category-menu">
                        <button className="scroll-button left" onClick={scrollLeft}>
                            &lt;
                        </button>

                        <div className="category-list" ref={scrollRef}>
                            {categories.map((category) => (
                                <Link key={category.name} to={`/categories/${category.name}`} className="category-item">
                                    {category.name}
                                </Link>
                            ))}
                        </div>

                        <button className="scroll-button right" onClick={scrollRight}>
                            &gt;
                        </button>
                    </div>
                )}
            </div>
        </>
    );
}

export default Category;


