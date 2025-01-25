"use client";

import { motion } from "framer-motion";
import Header from "@/components/defined-ui/header";
import Footer from "@/components/defined-ui/footer";

const Join = () => {
  const categories = [
    {
      title: "Students (UG/PG)",
      description:
        "As a student, you can become a Member, Core Member, Secretary/Coordinator, or General Secretary of SciTech Affairs. Take part in shaping the future of innovation at IIT Bhilai!",
      bgColor: "bg-gradient-to-r from-blue-500 to-purple-500",
    },
    {
      title: "Professors",
      description:
        "Professors can become Faculty In-Charge (FIC) of specific clubs, guiding and mentoring students to achieve their goals and drive impactful activities.",
      bgColor: "bg-gradient-to-r from-green-500 to-teal-500",
    },
    {
      title: "Other Affiliates",
      description:
        "While you cannot formally join the club in an official capacity, you are encouraged to communicate with the club and participate in its activities.",
      bgColor: "bg-gradient-to-r from-yellow-500 to-orange-500",
    },
    {
      title: "Non-College Individuals",
      description:
        "You cannot hold positions in the club but can collaborate to conduct events, attend events, or partner with us to drive impactful initiatives.",
      bgColor: "bg-gradient-to-r from-red-500 to-pink-500",
    },
  ];

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
            {categories.map((category, index) => (
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
