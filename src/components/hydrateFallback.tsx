import { motion } from "framer-motion";

const HydrateFallback = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-base-100">
      <motion.div
        className="p-6 bg-white rounded-lg shadow-lg"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex items-center justify-center space-x-4">
          <div className="w-4 h-4 bg-blue-500 rounded-full animate-bounce"></div>
          <div className="w-4 h-4 bg-green-500 rounded-full animate-bounce delay-200"></div>
          <div className="w-4 h-4 bg-red-500 rounded-full animate-bounce delay-400"></div>
        </div>
        <p className="mt-4 text-center text-gray-700">
          Loading, please wait...
        </p>
      </motion.div>
    </div>
  );
};

export default HydrateFallback;
