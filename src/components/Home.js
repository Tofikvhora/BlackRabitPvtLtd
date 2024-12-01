// src/components/Home.js
import React from "react";
import { motion } from "framer-motion";
import "./Home.css";

const Home = () => {
  return (
    <div id="home" className="home">
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Welcome to Black Rabbit Pvt Ltd
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.5 }}
      >
        Your trusted transportation service provider, vehicle owner, and brokerage network.
      </motion.p>
    </div>
  );
};

export default Home;
