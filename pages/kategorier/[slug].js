import { commerce } from "../../lib/commerce";
import ProductList from "../../components/ProductGrid"
import React from "react"
import ProductGrid from "../../components/ProductGrid";
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
        <React.Fragment>
            <h1>{category.name}</h1>

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
              <div className="pt-3">
                <CategoryList categories={categories} />
              </div>
            </motion.div>
        </React.Fragment>
    )
}