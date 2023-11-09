import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import styles from '../../styles/Category.module.css'

import Products from '../Products/Products'

import { useGetProductsQuery } from '../../features/api/apiSlice.'

const Category = () => {

    const { id } = useParams()

    const defaultParams = {
        title: '',
        price_min: 0,
        price_max: 0,
        categoryId: id
    }

    const [values, setValues] = useState()

    
    const handleChange =({ target: { value, name } }) => {
        setValues({ ...values, [name]: value })
    }

    const [params, setParams] = useState(defaultParams) 

    useEffect(() => {
        if(!id) return;
        setParams({ ...defaultParams, categoryId: id })
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [id])

    const { data, isLoading, isSuccess } = useGetProductsQuery(params)

  return (
    <section className={styles.wrapper}>
        <h2 className={styles.title}>Shoes</h2>

        <form 
        onSubmit={() => {}}
        className={styles.filters}>
            <div className={styles.filter}>
                <input 
                type="text" 
                name="title" 
                placeholder='Product name' 
                onChange={() => {}}
                value={params.title} />
                
                <input 
                type="number" 
                name="price_min" 
                placeholder='0' 
                onChange={() => {}}
                value={params.price_min} />
                
                <input 
                type="number" 
                name="price_max" 
                placeholder='0' 
                onChange={() => {}}
                value={params.price_max} />
            </div>

            <button type='submit' hidden />
        </form>

        {isLoading ? (
            <div className='preloader'>Loading...</div>
        ) : !isSuccess || !data.length ? (
            <div className={styles.back}>
                <span>No results</span>
                <button>Reset</button>
            </div>
        ) : (
            <Products 
            title='' 
            products={data} 
            style ={{ padding: 0 }} 
            amount={data.length}
            />
        )}
    </section>
  )
}

export default Category