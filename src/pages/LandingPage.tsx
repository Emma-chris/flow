import { Link } from "react-router-dom";
import hero from "../assets/undraw_chat-interface_vofq.svg";
import FadeInWhenVisible from "../components/FadeInWhenVisible";
import { ScrollToTopButton } from "../components/ScrollToTopButton";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
// import ScrollToTopButton from "../components/ScrollToTopButton";

export const LandingPage = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-600 via-indigo-700 to-purple-800 text-white flex flex-col">
      {/* Navbar */}
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all ${
          scrolled
            ? "bg-indigo-900/90 backdrop-blur-md shadow-md"
            : "bg-transparent"
        }`}
      >
        <div className="flex justify-between items-center px-6 py-4 max-w-7xl mx-auto">
          <h1 className="text-2xl font-bold">🌟 MyApp</h1>

          {/* Desktop Menu */}
          <nav className="hidden md:flex space-x-6">
            <Link to="/login" className="hover:text-gray-300">
              Login
            </Link>
            <Link to="/register" className="hover:text-gray-300">
              Register
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden focus:outline-none"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Dropdown with animation */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="md:hidden bg-indigo-800/95 backdrop-blur-md shadow-lg px-6 py-4 space-y-4"
            >
              <Link
                to="/login"
                className="block hover:text-gray-300"
                onClick={() => setMenuOpen(false)}
              >
                Login
              </Link>
              <Link
                to="/register"
                className="block hover:text-gray-300"
                onClick={() => setMenuOpen(false)}
              >
                Register
              </Link>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Hero Section */}
      <main className="flex flex-col md:flex-row items-center justify-center flex-grow px-6 md:px-20 gap-10 text-center md:text-left">
        {/* Text */}
        <FadeInWhenVisible direction="left">
          <div className="flex-1">
            <h2 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight">
              Stay Productive, <br /> Track Your Progress 🚀
            </h2>
            <p className="text-lg md:text-xl text-gray-200 mb-8 max-w-xl">
              Manage your habits, visualize progress with charts, and achieve
              your goals — all in one place.
            </p>
            <div className="space-x-4">
              <Link
                to="/register"
                className="px-6 py-3 bg-yellow-400 text-gray-900 font-semibold rounded-xl shadow-lg hover:bg-yellow-300 transition"
              >
                Get Started
              </Link>
              <Link
                to="/login"
                className="px-6 py-3 border border-white font-semibold rounded-xl hover:bg-white hover:text-indigo-700 transition"
              >
                Login
              </Link>
            </div>
          </div>
        </FadeInWhenVisible>

        {/* Image */}
        <FadeInWhenVisible direction="right" delay={0.2}>
          <div className="flex-1">
            <img
              src={hero} // <-- local image or online link
              alt="Productivity illustration"
              className="w-full max-w-md mx-auto"
            />
          </div>
        </FadeInWhenVisible>
      </main>

      {/* Features */}
      <section className="bg-white text-gray-900 py-16 px-6">
        <h3 className="text-3xl font-bold text-center mb-12">
          Why Choose MyApp?
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
          <FadeInWhenVisible delay={0.1}>
            <div className="p-6 bg-gray-100 rounded-xl shadow hover:shadow-lg transition">
              <h4 className="text-xl font-semibold mb-3">📊 Analytics</h4>
              <p>Track your tasks and habits with interactive charts.</p>
            </div>
          </FadeInWhenVisible>

          <FadeInWhenVisible delay={0.2}>
            <div className="p-6 bg-gray-100 rounded-xl shadow hover:shadow-lg transition">
              <h4 className="text-xl font-semibold mb-3">⚡ Fast & Simple</h4>
              <p>Lightweight, responsive, and easy to use on any device.</p>
            </div>
          </FadeInWhenVisible>

          <FadeInWhenVisible delay={0.3}>
            <div className="p-6 bg-gray-100 rounded-xl shadow hover:shadow-lg transition">
              <h4 className="text-xl font-semibold mb-3">🔒 Secure</h4>
              <p>Your data is safe with modern authentication flow.</p>
            </div>
          </FadeInWhenVisible>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-gradient-to-br from-indigo-50 to-white py-20 px-6">
        <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">
          What Our Users Say ❤️
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <FadeInWhenVisible delay={0.1}>
            <div className="p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition">
              <p className="text-gray-700 italic mb-4">
                "This app completely changed the way I manage my habits. I feel
                more productive every day!"
              </p>
              <div className="flex items-center gap-3">
                <img
                  src="https://randomuser.me/api/portraits/women/44.jpg"
                  alt="User testimonial"
                  className="w-12 h-12 rounded-full"
                />
                <div>
                  <h4 className="font-semibold text-gray-900">Sarah Johnson</h4>
                  <p className="text-gray-500 text-sm">Marketing Manager</p>
                </div>
              </div>
            </div>
          </FadeInWhenVisible>

          <FadeInWhenVisible delay={0.2}>
            <div className="p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition">
              <p className="text-gray-700 italic mb-4">
                "Clean, simple, and powerful. The charts make it so easy to
                track my progress at a glance."
              </p>
              <div className="flex items-center gap-3">
                <img
                  src="https://randomuser.me/api/portraits/men/46.jpg"
                  alt="User testimonial"
                  className="w-12 h-12 rounded-full"
                />
                <div>
                  <h4 className="font-semibold text-gray-900">David Kim</h4>
                  <p className="text-gray-500 text-sm">Software Engineer</p>
                </div>
              </div>
            </div>
          </FadeInWhenVisible>

          <FadeInWhenVisible delay={0.3}>
            <div className="p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition">
              <p className="text-gray-700 italic mb-4">
                "I love how simple it is to use. It keeps me motivated to stay
                on track with my goals."
              </p>
              <div className="flex items-center gap-3">
                <img
                  src="https://randomuser.me/api/portraits/women/65.jpg"
                  alt="User testimonial"
                  className="w-12 h-12 rounded-full"
                />
                <div>
                  <h4 className="font-semibold text-gray-900">Emily Carter</h4>
                  <p className="text-gray-500 text-sm">Entrepreneur</p>
                </div>
              </div>
            </div>
          </FadeInWhenVisible>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-indigo-700 text-white py-20 px-6 text-center">
        <FadeInWhenVisible direction="up">
          <h3 className="text-4xl font-bold mb-6">
            Ready to Boost Your Productivity? 🚀
          </h3>
          <p className="text-lg mb-8 max-w-2xl mx-auto text-gray-200">
            Join thousands of users who are already achieving their goals with
            MyApp. Start your journey today and track your habits like never
            before.
          </p>
        </FadeInWhenVisible>
      </section>

      {/* Pricing Section */}
      <section className="bg-gray-50 py-20 px-6">
        <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">
          Choose Your Plan 💳
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Free Plan */}
          <FadeInWhenVisible delay={0.1}>
            <div className="p-8 bg-white rounded-2xl shadow hover:shadow-lg transition flex flex-col">
              <h4 className="text-xl font-semibold mb-3">Free</h4>
              <p className="text-gray-600 mb-6">Perfect to get started</p>
              <p className="text-4xl font-bold mb-6">$0</p>
              <ul className="text-gray-600 space-y-2 mb-8 flex-grow">
                <li>✔️ Track up to 5 habits</li>
                <li>✔️ Basic charts</li>
                <li>✔️ Email reminders</li>
              </ul>
              <Link
                to="/register"
                className="px-6 py-3 bg-indigo-600 text-white rounded-xl shadow hover:bg-indigo-500 transition text-center"
              >
                Get Started
              </Link>
            </div>
          </FadeInWhenVisible>

          {/* Pro Plan */}
          <FadeInWhenVisible delay={0.2}>
            <div className="p-8 bg-indigo-700 text-white rounded-2xl shadow-lg hover:shadow-2xl transition flex flex-col scale-105">
              <h4 className="text-xl font-semibold mb-3">Pro</h4>
              <p className="mb-6">Best for individuals</p>
              <p className="text-4xl font-bold mb-6">
                $9<span className="text-lg">/mo</span>
              </p>
              <ul className="space-y-2 mb-8 flex-grow">
                <li>✔️ Unlimited habits</li>
                <li>✔️ Advanced charts</li>
                <li>✔️ Priority support</li>
              </ul>
              <Link
                to="/register"
                className="px-6 py-3 bg-yellow-400 text-gray-900 rounded-xl shadow hover:bg-yellow-300 transition text-center font-semibold"
              >
                Start Free Trial
              </Link>
            </div>
          </FadeInWhenVisible>

          {/* Enterprise Plan */}
          <FadeInWhenVisible delay={0.3}>
            <div className="p-8 bg-white rounded-2xl shadow hover:shadow-lg transition flex flex-col">
              <h4 className="text-xl font-semibold mb-3">Enterprise</h4>
              <p className="text-gray-600 mb-6">For teams & companies</p>
              <p className="text-4xl font-bold mb-6">
                $29<span className="text-lg">/mo</span>
              </p>
              <ul className="text-gray-600 space-y-2 mb-8 flex-grow">
                <li>✔️ Everything in Pro</li>
                <li>✔️ Team dashboards</li>
                <li>✔️ Custom integrations</li>
              </ul>
              <Link
                to="/register"
                className="px-6 py-3 bg-indigo-600 text-white rounded-xl shadow hover:bg-indigo-500 transition text-center"
              >
                Contact Sales
              </Link>
            </div>
          </FadeInWhenVisible>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center py-6 bg-indigo-900">
        <p>&copy; {new Date().getFullYear()} MyApp. All rights reserved.</p>
      </footer>

      {/* Floating Scroll-to-Top Button */}
      <ScrollToTopButton />
    </div>
  );
};
