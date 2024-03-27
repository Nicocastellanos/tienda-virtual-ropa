import React, { useEffect, useState } from 'react'
import Filter from '../components/Filter';
import '../css/Men.css';
import { Link } from 'react-router-dom';

// Importacion imagenes
import Gorra from '../assets/images/men/gorra-kaki.png'
import Camiseta from '../assets/images/men/camiseta-negra.png'
import ShortK from '../assets/images/men/short-kaki.png'
import Pantalon from '../assets/images/men/pantalon-negro.png'
import CamisetaK from '../assets/images/men/camiseta-kaki.png'
import CamisetaK2 from '../assets/images/men/camiseta-kaki2.png'
import ShortC from '../assets/images/men/short-cafe.png'
import Llavero from '../assets/images/otros/llavero.png'
import Gorra2 from '../assets/images/otros/gorra1.png'

export default function Men() {
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [allProducts] = useState([
        { src: Gorra, title: "Gorra Kaki", precio: "$30.000", color: "Kaki", talla: "M", categoria: "Gorras" },
        { src: Camiseta, title: "Camiseta Negra", precio: "$50.000", color: "Negro", talla: "M", categoria: "Camisetas" },
        { src: ShortK, title: "Pantaloneta Kaki", precio: "$100.000", color: ["Negro", "Blanco"], talla: "L", categoria: "Shorts" },
        { src: Pantalon, title: "Pantalon Negro", precio: "$150.000", color: "Negro", talla: ["XL","S"], categoria: "Pantalones" },
        { src: CamisetaK, title: "Camiseta Kaki", precio: "$100.000", color: "Kaki", talla: ["S", "M"], categoria: "Camisetas" },
        { src: CamisetaK2, title: "Camiseta Kaki", precio: "$100.000", color: ["Kaki","Blanco"], talla:[ "M","L"], categoria: "Camisetas" },
        { src: ShortC, title: "Pantaloneta Cafe", precio: "$100.000", color: "Cafe", talla: "L", categoria: "Shorts" },
        { src: Llavero, title: "Llavero", precio: "$10.000", color: "Negro", talla: "S", categoria: "Llaveros" },
        { src: Gorra2, title: "Gorra", precio: "$30.000", color: ["Kaki", "Negro"], talla: "M", categoria: "Gorras" }
    ]);

    const categories = ["Camisetas", "Shorts", "Pantalones", "Buzos", "Gorras", "Llaveros", "Jeans"];
    const colors = ["Azul", "Cafe", "Negro", "Blanco", "Kaki"];
    const sizes = ["S", "M", "L", "XL"];
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