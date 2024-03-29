import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import '../css/Pages.css'
import Filter from '../components/Filter'

//importacion de imagenes
import Gorra from '../assets/images/woman/gorra-morada.png'
import Vestido from '../assets/images/woman/vestido-mujer.png'
import Vestido2 from '../assets/images/woman/vestido2-mujer.png'
import Pantalon from '../assets/images/woman/pantalon-mujer.png'
import Chaqueta from '../assets/images/woman/chaqueta-mujer.png'
import Pantalon2 from '../assets/images/woman/pantalon2-mujer.png'
import Jean from '../assets/images/woman/jean-mujer.png'
import Vestido3 from '../assets/images/woman/vestido3-mujer.png'
import Camiseta from '../assets/images/woman/camiseta2-mujer.png'

export default function Women() {
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [allProducts] = useState([
        { src: Gorra, title: "Gorra Morada", precio: "$30.000", color: "Morado", talla: "M", categoria: "Gorras" },
        { src: Vestido, title: "Vestido Kaki", precio: "$150.000", color: "Kaki", talla: "M", categoria: "Vestidos" },
        { src: Vestido2, title: "Vestido Blanco", precio: "$180.000", color: "Blanco", talla: "L", categoria: "Vestidos" },
        { src: Pantalon, title: "Pantalon Blanco", precio: "$150.000", color: "Blanco", talla: ["M","S"], categoria: "Pantalones" },
        { src: Chaqueta, title: "Chaqueta Rosada", precio: "$200.000", color: "Rosado", talla: ["S", "M"], categoria: "Chaquetas" },
        { src: Pantalon2, title: "Pantalon Kaki", precio: "$120.000", color: ["Kaki","Blanco"], talla:[ "M","L"], categoria: "Pantalones" },
        { src: Jean, title: "Jean", precio: "$180.000", color: "blanco", talla: ["M", "S", "L"], categoria: "Jeans" },
        { src: Vestido3, title: "Vestido Negro", precio: "$180.000", color: "Negro", talla: "S", categoria: "Vestidos" },
        { src: Camiseta, title: "Camiseta Blanca", precio: "$90.000", color: "Blanco", talla: ["S","M"], categoria: "Camisetas" }
    ]);

    const categories = ["Camisetas", "Vestidos", "Pantalones", "Gorras", "Chaquetas", "Jeans"];
    const colors = ["Rosado", "Morado", "Negro", "Blanco", "Kaki"];
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
