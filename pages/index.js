import Head from "next/head";
import { motion } from "framer-motion";

import { commerce } from "../lib/commerce";

import Header from "../components/Header";
import ProductList from "../components/ProductList";
import ProductGrid from "../components/ProductGrid";
import CategoryList from "../components/CategoryList";

export async function getStaticProps() {
  const { data: products } = await commerce.products.list({
    limit: 6,
  });
  const { data: categories } = await commerce.categories.list();
  const merchant = await commerce.merchants.about();

  return {
    props: {
      merchant,
      products,
      categories,
    },
    revalidate: 60,
  }; 
}

function IndexPage({ products, categories, merchant }) {

  return (
    <>
      <Head>
        <title>CaravanOutletVest</title>
      </Head>
      <Header />
      <div className="md:min-h-screen md:flex md:items-center" >
        <div className="flex flex-col md:flex-row space-y-3 md:space-y-2 md:space-x-10 pt-16">
          <div className="md:max-h-screen md:w-1/2 flex justify-between md:sticky md:top-0 pl-1 bg-gray-300">
            <motion.div
              className="md:py-12 hidden md:block md:sticky md:top-1"
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

              <div>
                <div>
                <div className="text-lg md:text-l lg:text-2xl">
                  {merchant.business_description}
              </div>

              <h1 className="text-lg md:text-xl lg:text-4xl">kategorier:</h1>
                  <CategoryList categories={categories} />
                </div>
              </div>
            </motion.div>
          </div>

          <motion.div
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
      </div>
    </>
  );
}

export default IndexPage;
