import { commerce } from "../../lib/commerce"
import ProductList from "../../components/ProductGrid"
import React from "react"
import ProductGrid from "../../components/ProductGrid";
import Header from "../../components/Header";
import { motion } from "framer-motion";


export async function getStaticProps({ params }) {
    const { slug } = params;
  
    const category = await commerce.categories.retrieve(slug, {
      type: "slug",
    });
  
    const { data: products } = await commerce.products.list({
      category_slug: [slug],
    });
  
    return {
      props: {
        category,
        products,
      },
    };
  }

export async function getStaticPaths() {
    const {data: categories} = await commerce.categories.list()

    return {
        paths: categories.map((category) => ({
            params: {
                slug: category.slug,
            },
        })),
        fallback: false,
    }
}

export default function CategoryPage({ category, products }) {
    return (
        <div className="flex flex-col md:flex-row space-y-3 md:space-y-0 md:space-x-10">
          <div className="md:max-h-screen md:w-1/2 flex items-end justify-between md:sticky md:top-0">
            <Header />

            <motion.div
              className="md:py-12 hidden md:block md:sticky md:top-0"
              initial={{ opacity: 0, y: 50 }}
              animate={{
                opacity: 1,
                y: 0,
                transition: {
                  delay: 0.25,
                },
              }}
              exit={{ opacity: 0, y: -50 }}
            >
              <div className="text-lg md:text-l lg:text-2xl">
              {category.description}
              </div>

            </motion.div>
          </div>

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