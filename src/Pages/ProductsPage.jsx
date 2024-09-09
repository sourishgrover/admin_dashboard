import React from "react";
import Header from "../Components/Header";
import { StatsCard } from "../Components/StatsCard";
import { motion } from "framer-motion";
import { AlertTriangle, DollarSign, IndianRupee, Package, TrendingUp } from "lucide-react";
import ProductsTable from "../Products/ProductsTable";
import CategoryDistChart from "../overviewPage/CategoryDistChart";
import SalesTrendChart from "../Products/SalesTrendChart";

const ProductsPage = () => {
  return (
    <>
      <div className="flex-1 overflow-auto relative z-10">
        <Header title="Products" />
      <main className="max-w-7xl mx-auto py-6 px-4 lg:px-6">
        <motion.div
          className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <StatsCard
           name='Total Products' icon={Package} content={1234} color='#6366F1'
          />
          <StatsCard
             name='Top Selling' icon={TrendingUp} content={89} color='#10B981'
          />
          <StatsCard
           name='Low Stock' icon={AlertTriangle} content={23} color='#F59E0B'
          />
          <StatsCard
            name='Total Revenue' icon={IndianRupee} content={"543000 Rupees"} color='#EF4444'
          />
        </motion.div>

        <ProductsTable/>


        <div className="grid grid-col-1 lg:grig-col-2 gap-8">
          <SalesTrendChart/>
          <CategoryDistChart/>

        </div>
      </main>
         


      </div>
    </>
  );
};

export default ProductsPage;
