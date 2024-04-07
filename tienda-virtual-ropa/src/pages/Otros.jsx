import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Filter from '../components/Filter.jsx'

// importaciones imagenes
import Gorra from '../assets/images/woman/gorra-morada.png'
import Gorra2 from '../assets/images/otros/gorra1.png'
import Llavero from '../assets/images/otros/llavero.png'
import Pin from '../assets/images/otros/pin.png'
import Llavero1 from '../assets/images/otros/llavero1.png'
import Gorra3 from '../assets/images/otros/gorra2.png'
import Pin2 from '../assets/images/otros/pin1.png'

export default function Women() {
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [allProducts] = useState([
        { src: Gorra, title: "Gorra Morada", precio: "$30.000", color: "Morado", talla: "M", categoria: "Gorras" },
        { src: Gorra2, title: "Gorra Kaki", precio: "$20.000", color: "Morado", talla: "M", categoria: "Gorras" },
        { src: Llavero, title: "Llavero", precio: "$15.000", color: "Morado", talla: "M", categoria: "Gorras" },
        { src: Pin, title: "Pin", precio: "$10.000", color: "Morado", talla: "M", categoria: "Gorras" },
        { src: Llavero1, title: "Llavero", precio: "$30.000", color: "Morado", talla: "M", categoria: "Llaveros" },
        { src: Gorra3, title: "Gorra", precio: "$45.000", color: "Kaki", talla: "M", categoria: "Gorras" },
        { src: Pin2, title: "Pin", precio: "$15.000", color: "Negro", talla: "M", categoria: "Pines" },
    ]);

    const categories = ["Llaveros", "Pines", "Gorras"];
    const colors = ["Azul", "Negro", "Kaki"];
    const sizes = ["S", "M", "L"];
    const [appliedFilters, setAppliedFilters] = useState({ category: "", color: "", size: "" });

    const handleFilterChange = (name, value) => {
        setAppliedFilters(prevFilters => ({ ...prevFilters, [name]: value }));
    }

    useEffect(() => {
        let filtered = [...allProducts];

        if (appliedFilters.category !== "") {
            filtered = filtered.filter(product => product.categoria === appliedFilters.category);
        }

        if (appliedFilters.color !== "") {
            filtered = filtered.filter(product => product.color.includes(appliedFilters.color));
        }

        if (appliedFilters.size !== "") {
            filtered = filtered.filter(product => product.talla.includes(appliedFilters.size));
        }

        // Si todos los filtros están deseleccionados, mostrar todos los productos
        if (appliedFilters.category === "" && appliedFilters.color === "" && appliedFilters.size === "") {
            setFilteredProducts(allProducts);
        } else {
            setFilteredProducts(filtered);
        }
    }, [appliedFilters]);

    return (
        <div className='men-page'>
            <div className='filter-container'>
                <Filter
                    categories={categories}
                    colors={colors}
                    sizes={sizes}
                    onFilterChange={handleFilterChange}
                />
            </div>
            <div className='container-men'>
                {filteredProducts.length > 0 ? (
                    filteredProducts.map((item, index) => (
                        <div className='card-men' key={index}>
                            <div className='card-top-men'>
                                <Link><img src={item.src} alt={item.title} className='img-men' /></Link>
                            </div>
                            <div className='card-bottom-men'>
                                <p className='title-men'>{item.title}</p>
                                <span className='precio-men'>{item.precio}</span>
                            </div>
                        </div>
                    ))
                ) : (
                    <p className='p-notfound'>No se encontraron productos que coincidan con los filtros seleccionados.</p>
                )}
            </div>
        </div>
    );
}

