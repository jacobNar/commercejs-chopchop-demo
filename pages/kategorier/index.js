import React from 'react'

import Header from '../../components/Header'
import ProductGrid from '../../components/ProductGrid'
import { motion } from 'framer-motion'
import { commerce } from "../../lib/commerce"

export async function getStaticProps() {
    const { data } = await commerce.products.list();
  
    const products = data.filter(({ active }) => active);
  
    return {
      props: {
        products,
      },
      revalidate: 60,
    }; 
  }

function Categorypage({ products }) {
    return (
        <div>
            <Header />
            <motion.div
            className="md:min-h-screen py-6 md:py-12 flex items-center md:w-1/2 md:z-40"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
          >
            <ProductGrid
              products={products}
              className="h-112 md:h-96 xl:h-112"
            />
          </motion.div>
        </div>
    )
}

export default Categorypage
