"use client";

import { motion } from "framer-motion";
import Header from "@/components/defined-ui/header";
import Footer from "@/components/defined-ui/footer";
import { joinCategories } from "@/data/history";

const Join = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-grow bg-gradient-to-b from-gray-900 to-black text-white">
        <section className="container mx-auto px-6 py-16">
          <motion.h1
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-extrabold text-center mb-12 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent"
          >
            Join the SciTech Council
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center text-gray-300 mb-16 max-w-2xl mx-auto"
          >
            Explore how you can be part of our vibrant community of innovators,
            regardless of your affiliation with IIT Bhilai.
          </motion.p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
            {joinCategories.map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className={`rounded-2xl p-6 ${category.bgColor} text-white shadow-lg hover:shadow-xl transform hover:scale-105 transition-all`}
              >
                <h3 className="text-2xl font-bold mb-4">{category.title}</h3>
                <p className="text-gray-200">{category.description}</p>
              </motion.div>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Join;
