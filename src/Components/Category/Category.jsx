// import React, { useState, useEffect } from "react";
// import {FaBars} from 'react-icons/fa';
// import { Link } from "react-router-dom"; 
// import "./Category.css"

// function Category({categories}) {
    // const [showCategories, setShowCategories] = useState(false);

    // const handleToggleCategories = () => {
    //     setShowCategories(!showCategories);
    // };

//     return (
//         <>
//             <div className="navbar"> 
//              <button className="category-button" onClick={handleToggleCategories}>
//              {showCategories ? "Hide" : "Categories"}
//              </button>   
//            {showCategories && (
//                 // <ul className="categori-list">
//                 //     {categories.map((category, index) => (
//                 //         <li key={index} className="category-item">
//                 //             <Link to={`/categories/${category.name}`}>{category.name} : {category.count}</Link>
//                 //         </li>
//                 //     ))}
//                 // </ul>


//                 <ul className ={`categori-list ${showCategories?'show':''}`}>
//                     {categories.map((category,index) =>(
//                         <li key={index} className ="category-item">
//                             <Link to ={`/categories/${category.name}`}>
//                                 {category.name} : {category.count}
//                             </Link>

//                         </li>
//                     ))}

//                 </ul>
//             )}
//             </div>

        //     <div className="mobile-navbar">
        //     <button className="mobile_category-button" onClick={handleToggleCategories}>
        //     {showCategories?"X": <FaBars />}
        //     </button>

        //    {showCategories && (
        //         // <ul className="categori-list">
        //         //     {categories.map((category, index) => (
        //         //         <li key={index} className="category-item">
        //         //             <Link to={`/categories/${category.name}`}>{category.name} : {category.count}</Link>
        //         //         </li>
        //         //     ))}
        //         // </ul>

        //         <ul className = {`categori-list ${showCategories ? 'show' :''}`}>{categories.map((category,index)=>(
        //             <li key={index} className ="category-item">
        //                 <Link to={`/categories/$(category.name)`}>{category.name} : {category.count}</Link>
        //             </li>
        //         ))}

        //         </ul>
        //     )}
        //     </div>
//         </>
        
//     );
// }

// export default Category;


import React, { useState, useEffect } from "react";
import {FaBars} from 'react-icons/fa';
import { Link } from "react-router-dom"; 
import "./Category.css"

function Category({categories}) {

    // const [showCategories, setShowCategories] = useState(false);

    const filteredCategories = categories.slice(0,10)

    // const handleToggleCategories = () => {
    //     setShowCategories(!showCategories);
    // };

    return (
        <>
            <div className="navbar"> 

             <button className="category-button" >
                Categories
                <div className = "category-content">
                {filteredCategories.map((category,index) =>(
                    <Link className = "category-item" key={index} to={`/categories/${category.name}`}>{category.name} : {category.count}</Link>
                ))}
                </div>
             </button>    
            </div>

            
            
                <div className="mobile-navbar">
                   <button className="mobile_category-button" >
                       <FaBars />
                          <div className="category-content">
                              {filteredCategories.map((category, index) => (
                                <Link className = "category-item" key={index} to={`/categories/${category.name}`}>{category.name} : {category.count}</Link>  
                        ))}
                           </div>
                   </button>

            {/* {showCategories && (
                    <div className="category-content">
                        {categories.map((category, index) => (
                            <Link className = "category-item" key={index} to={`/categories/${category.name}`}>{category.name} : {category.count}</Link>  
                        ))}
                    </div>
                )} */}
                </div>

        </>
        
    );
}

export default Category;












