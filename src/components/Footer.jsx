import { FaInstagram, FaGithub, FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <div className="w-full bg-gray-900 text-white border-t border-gray-700">
      <div className="max-w-6xl mx-auto px-4 py-8">
        {/* Animated "Let's Create" Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-8"
        >
          <p className="text-2xl font-bold mb-2">Let's Create Something</p>
          <motion.p
            className="text-3xl font-extrabold text-cyan-400"
            animate={{
              scale: [1, 1.05, 1],
              opacity: [1, 0.8, 1],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            awesome
          </motion.p>
        </motion.div>

        {/* Social Links with subtle animation */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          viewport={{ once: true }}
          className="flex justify-center gap-8 mb-8"
        >
          <motion.a
            href="https://www.instagram.com/sachin_tambeshwar"
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl text-pink-500 hover:text-pink-400 transition-colors"
            whileHover={{ y: -3, scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <FaInstagram />
          </motion.a>
          <motion.a
            href="https://www.linkedin.com/in/sachin-tambeshwar-101706117"
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl text-blue-400 hover:text-blue-300 transition-colors"
            whileHover={{ y: -3, scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <FaLinkedin />
          </motion.a>
          <motion.a
            href="https://github.com/sachintambehwar"
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl text-gray-300 hover:text-white transition-colors"
            whileHover={{ y: -3, scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <FaGithub />
          </motion.a>
        </motion.div>

        {/* Copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center text-sm text-gray-400"
        >
          © {new Date().getFullYear()} Sachin Tambeshwar. All rights reserved.
        </motion.div>
      </div>
    </div>
  );
};

export default Footer;
