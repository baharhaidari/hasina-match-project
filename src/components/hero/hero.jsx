import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import { FaUserAlt, FaFeatherAlt, FaCameraRetro } from "react-icons/fa";

export default function Hero() {
  return (
    <section className="flex items-center justify-center min-h-screen">
      <div className="text-center">
        <motion.h1
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="text-5xl md:text-7xl font-medium drop-shadow-lg mb-8"
        >
          خوش آمدید!
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
          className="text-lg md:text-2xl max-w-3xl mx-auto mb-20"
        >
          اینجا می‌توانید با من آشنا شوید، اشعار و عکس‌های من را ببینید و بیشتر
          درباره من بدانید.
        </motion.p>

        <div className="flex items-center justify-center gap-24">
          {/* "About" Link */}
          <motion.div
            whileHover={{ scale: 1.1, rotate: 3 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <NavLink
              to="/about"
              className="flex items-center gap-3 group text-4xl font-medium "
            >
              <FaUserAlt className="text-2xl colored_text group-hover:text-indigo-600 transition duration-300" />
              <span className="group-hover:underline decoration-indigo-600">
                من کی هستم؟
              </span>
            </NavLink>
          </motion.div>

          {/* "Poems" Link */}
          <motion.div
            whileHover={{ scale: 1.1, rotate: -3 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <NavLink
              to="/poems"
              className="flex items-center gap-3 group text-4xl font-medium"
            >
              <FaFeatherAlt className="text-2xl colored_text group-hover:text-indigo-600 transition duration-300" />
              <span className="group-hover:underline decoration-indigo-600">
                اشعار
              </span>
            </NavLink>
          </motion.div>

          {/* "Photographies" Link */}
          <motion.div
            whileHover={{ scale: 1.1, rotate: 3 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <NavLink
              to="/photographies"
              className="flex items-center gap-3 group text-4xl font-medium"
            >
              <FaCameraRetro className="text-2xl colored_text group-hover:text-indigo-600 transition duration-300" />
              <span className="group-hover:underline decoration-indigo-600">
                عکس ها
              </span>
            </NavLink>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
