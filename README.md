# 🍝 Mangia - Italian Recipe Hub

Welcome to **Mangia**, an Italian recipe site where users can explore, search for, and discover a variety of authentic Italian recipes. The platform allows users to browse by category, search for specific recipes, and view detailed recipe instructions. Additionally, users can rate recipes, leave comments, and share their favorite dishes with others.

## 🔍 Usage
- Navigate to the homepage to browse featured recipes or search for a specific dish.
- Click on any recipe card to view its details, including ingredients and instructions.
- Use the rating feature to give feedback on a recipe and leave comments to share your experience.

## 🌟 Features
- **Explore by Category**: Browse recipes based on different categories.
- **Search Functionality**: Quickly find recipes using the search bar based on ingredients recipe names or cooking time.
- **Detailed Recipe Views**: Each recipe includes a comprehensive list of ingredients and step-by-step instructions.
- **Rate and Comment**: Users can rate recipes with stars and leave comments to share their thoughts.
- **Recipe Sharing**: Easily share the link to your favorite recipe.
- **Print Option**: Print the recipe details for offline use.

## 📂 Project Structure and Component Breakdown

The project is structured with reusable components and well-organized pages to provide a scalable and maintainable codebase.

### 🗂 Folder Structure
public/ (Static assets like images and icons + Netlify routing rule)
src/
- assets/
- components/
  - CardContainer/
  - Category/
  - CategoryPreview/
  - Comment/
  - CommentContainer/
  - CommentForm/
  - Footer/
  - Header/
  - Navbar/
  - Pages/
  - Rating/
  - RecipeCard/
  - RecipeCarousel/
  - RecipeDetails/
  - RecipeShare/
  - Search/
- pages/ (Main pages of the application)
  - StartPage.jsx
  - CategoryPage.jsx
  - SearchResultPage.jsx
  - RecipesPage.jsx
- api.js (API interaction functions)
- util.js (Utility functions)
- App.jsx (Main app component)
- main.jsx (Entry point of the React application)
- index.css (Global styles)

### 🌐 Pages and Their Components

#### 1. **Global Components**
These components are used across the entire application, ensuring a consistent layout:
- **Header**: Displays the Mangia Logo, which also functions as a 'Home' button.
- **Navbar**: Contains navigation links for quick access to categories and search bar.
- **Footer**: Provides additional links and information at the bottom of the page.

#### 2. **StartPage**
   - **CategoryPreview**: Displays a selection of recipes for each category for users to explore.
   - **RecipeCarousel**: Features recipe cards in a scrolling carousel.
   - **RecipeCard**: Represents a single recipe with a thumbnail, title, and basic info.

#### 3. **CategoryPage**
   - **CardContainer**: Organizes recipe cards into a grid layout for the chosen category.
   - **RecipeCard**: Displays individual recipes within the selected category.

#### 4. **SearchResultPage**
   - **SearchResult**: Manages the display of recipes based on user search input.
   - **CardContainer**: Organizes recipe cards into a grid layout for the search results.
   - **RecipeCard**: Renders each recipe found through the search functionality.

#### 5. **RecipesPage**
   - **RecipeDetails**: Shows a comprehensive view of the selected recipe, including instructions and ingredients.
   - **PrintRecipe**: Allows users to print the recipe details for offline reference.
   - **RecipeShare**: Enables users to easily copy the link to the recipe page.
   - **Rating**: Provides star ratings for users to rate the recipe.
   - **CommentForm**: Lets users submit comments on the recipe page.
   - **CommentContainer**: Displays a list of comments made by users about the recipe.
     - **Comment**: Represents an individual user comment.

## 🛠 Tech Stack
- **Frontend**: React, Vite
- **Styling**: CSS
- **Backend**: Node.js
- **Database**: External Swagger API
