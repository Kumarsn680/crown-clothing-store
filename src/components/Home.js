import React from 'react'
import { Link } from 'react-router-dom';
import './category.styles.scss'


const Home = ({categories}) => {
  
  return (
    <div className="categories-container">
      {categories.map(({ title, id, image }) => (
        <div
          key={id}
          className="category-container"
          style={{
            backgroundImage: `linear-gradient(rgba(79, 79, 79, 0.5), rgba(79, 79, 79, 0.5)),url(${image})`,
          }}
        >
          <div className="category-body-container">
            <h2 >{title}</h2>
              <p category={title.toLowerCase()}>Shop Now</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Home