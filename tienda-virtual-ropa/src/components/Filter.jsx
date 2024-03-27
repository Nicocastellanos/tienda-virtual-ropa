import React, { useState } from 'react';
import '../css/Filter.css';

export default function Filter({ categories, colors, sizes, onFilterChange }) {
    const [showCategory, setShowCategory] = useState(true);
    const [showColor, setShowColor] = useState(true);
    const [showSize, setShowSize] = useState(true);

    const handleToggleCategory = () => {
        setShowCategory(!showCategory);
    }

    const handleToggleColor = () => {
        setShowColor(!showColor);
    }

    const handleToggleSize = () => {
        setShowSize(!showSize);
    }

    const handleFilterChange = (event) => {
        const { name, value } = event.target;
        onFilterChange(name, value);
    }

    return (
        <div className='filter-box'>
            <div className='filter-section'>
                <div className='filter-title'>
                    <span>Categoría</span>
                    <button onClick={handleToggleCategory} className='button-icon'>
                        <img src={`./src/assets/images/icon-${showCategory ? 'minus' : 'plus'}.svg`} alt={showCategory ? 'minimizar' : 'mostrar'} className='icons' />
                    </button>
                </div>
                {showCategory && (
                    <div className='options'>
                        {categories.map((category, index) => (
                            <label key={index} className='label-filter'>
                                <input 
                                    type="checkbox"
                                    name="category"
                                    value={category}
                                    onChange={handleFilterChange}
                                    className='input-filter'
                                />
                                {category}
                            </label>
                        ))}
                    </div>
                )}
            </div>
            <hr className='hr-filter'/>
            <div className='filter-section'>
                <div className='filter-title'>
                    <span>Color</span>
                    <button onClick={handleToggleColor} className='button-icon'>
                        <img src={`./src/assets/images/icon-${showColor ? 'minus' : 'plus'}.svg`} alt={showColor ? 'minimizar' : 'mostrar'} className='icons' />
                    </button>
                </div>
                {showColor && (
                    <div className='options'>
                        {colors.map((color, index) => (
                            <label key={index} className='label-filter'>
                                <input 
                                    type="checkbox"
                                    name="color"
                                    value={color}
                                    className='input-filter'
                                    onChange={handleFilterChange}
                                />
                                {color}
                            </label>
                        ))}
                    </div>
                )}
            </div>
            <hr className='hr-filter'/>
            <div className='filter-section'>
                <div className='filter-title'>
                    <span>Talla</span>
                    <button onClick={handleToggleSize} className='button-icon'>
                        <img src={`./src/assets/images/icon-${showSize ? 'minus' : 'plus'}.svg`} alt={showSize ? 'minimizar' : 'mostrar'} className='icons' />
                    </button>
                </div>
                {showSize && (
                    <div className='options'>
                        {sizes.map((size, index) => (
                            <label key={index}className='label-filter'>
                                <input 
                                    type="checkbox"
                                    name="size"
                                    value={size}
                                    className='input-filter'
                                    onChange={handleFilterChange}
                                />
                                {size}
                            </label>
                        ))}
                    </div>
                )}
            </div>
            <hr className='hr-filter'/>
        </div>
    );
}