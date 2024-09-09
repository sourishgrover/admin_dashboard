import {
  BarChart2,
  IndianRupee,
  Menu,
  Settings,
  ShoppingBag,
  ShoppingCart,
  TrendingUp,
  User,
} from "lucide-react";
import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Link } from "react-router-dom";

const SIDEBAR_ITEMS = [
  {
    name: "Overview",
    icon: BarChart2,
    color: "#6366f1",
    path: "/",
  },
  {
    name: "Products",
    icon: ShoppingBag,
    color: "#8B5CF6",
    path: "/products",
  },
  {
    name: "Users",
    icon: User,
    color: "#EC4899",
    path: "/users",
  },
  {
    name: "Sales",
    icon: IndianRupee,
    color: "#10B981",
    path: "/sales",
  },
  {
    name: "Order",
    icon: ShoppingCart,
    color: "#F59E0B",
    path: "/order",
  },
  {
    name: "Analytiscs",
    icon: TrendingUp,
    color: "#3B82F6",
    path: "/analytics",
  },
  {
    name: "Settings",
    icon: Settings,
    color: "#6EE7B7",
    path: "/settings",
  },
];

const Sidebar = () => {
  const [isOpen, isSetOpen] = useState(true);
  return (
    <>
      <motion.div
        className={`relative transition-all duration-300 ease-in-out flex-shrink-0 ${
          isSetOpen ? "w-64" : "w-16"
        }`}
        animate={{ width: isOpen ? 256 : 80 }}
      >
        <div className="h-full bg-gray-900 bg-opacity-50 backderop-blur-md p-4 flex flex-col border-r border-gray-700">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => isSetOpen(!isOpen)}
            className="p-2 rounded-full hover:bg-gray-700 transition-colors max-w-fit"
          >
            <Menu size={24} />
          </motion.button>

          <nav className='mt-8 flex-grow'>
					{SIDEBAR_ITEMS.map((item) => (
						<Link key={item.path} to={item.path}>
							<motion.div className='flex items-center p-4 text-sm font-medium rounded-lg hover:bg-gray-700 transition-colors mb-2'>
								<item.icon size={20} style={{ color: item.color, minWidth: "20px" }} />
								<AnimatePresence>
									{isOpen && (
										<motion.span
											className={`ml-4 whitespace-nowrap`}
											initial={{ opacity: 0, width: 0 }}
											animate={{ opacity: 1, width: "auto" }}
											exit={{ opacity: 0, width: 0 }}
											transition={{ duration: 0.2, delay: 0.3 }}
										>
											{ item.name }
										</motion.span>
									)}
								</AnimatePresence>
							</motion.div>
						</Link>
					))}
				</nav>
        </div>
      </motion.div>
    </>
  );
};

export default Sidebar;
