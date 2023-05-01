import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const LeftNac = () => {
    const [categories, setCategories] = useState([]);

    useEffect( () => {
        fetch('http://localhost:5000/categories')
        .then(res => res.json())
        .then(data => setCategories(data))
        .catch(error => console.log(error))
    }, [])

    return (
        <div>
            <h3>All Category</h3>
            <div className='ps-5 mt-3'>
                {
                    categories.map(category => <p
                        key={category.id}
                    >
                        <Link to={`/category/${category.id}`} className='text-decoration-none text-secondary fs-5'>{category.name}</Link>
                    </p>)
                }
            </div>
        </div>
    );
};

export default LeftNac;