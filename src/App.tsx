import React, { useState, useEffect } from 'react';
import { Menu, ChevronDown, MapPin, Clock, Phone, Instagram, Facebook, Twitter, Star, Users, Utensils, Award, ChefHat, Leaf } from 'lucide-react';
import BurgerLoader from './components/BurgerLoader';

function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);

    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(timer);
    };
  }, []);

  if (isLoading) {
    return <BurgerLoader />;
  }

  const menuItems = [
    {
      name: "Royal Zinger Burger",
      price: "Rs. 599",
      description: "Crispy chicken fillet with our secret spice blend",
      image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=800&q=80",
      category: "Signature"
    },
    {
      name: "Lahori Special Pizza",
      price: "Rs. 1299",
      description: "Tikka chunks, green chilies, and our signature sauce",
      image: "https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?auto=format&fit=crop&w=800&q=80",
      category: "Signature"
    },
    {
      name: "Fusion Wings",
      price: "Rs. 799",
      description: "Wings tossed in masala sauce with mint chutney",
      image: "https://images.unsplash.com/photo-1608039829572-78524f79c4c7?auto=format&fit=crop&w=800&q=80",
      category: "Appetizers"
    },
    {
      name: "Grilled Chicken Salad",
      price: "Rs. 649",
      description: "Fresh greens with grilled chicken and house dressing",
      image: "https://images.unsplash.com/photo-1546793665-c74683f339c1?auto=format&fit=crop&w=800&q=80",
      category: "Healthy"
    },
    {
      name: "Beef Steak",
      price: "Rs. 1599",
      description: "Premium cut with mushroom sauce and mashed potatoes",
      image: "https://images.unsplash.com/photo-1600891964092-4316c288032e?auto=format&fit=crop&w=800&q=80",
      category: "Mains"
    },
    {
      name: "Molten Lava Cake",
      price: "Rs. 449",
      description: "Warm chocolate cake with vanilla ice cream",
      image: "https://images.unsplash.com/photo-1617026061250-62b474264442?auto=format&fit=crop&w=800&q=80",
      category: "Desserts"
    }
  ];

  const features = [
    {
      icon: ChefHat,
      title: "Expert Chefs",
      description: "Our culinary team brings years of experience from top restaurants worldwide"
    },
    {
      icon: Leaf,
      title: "Fresh Ingredients",
      description: "We source the finest local ingredients for authentic flavors"
    },
    {
      icon: Award,
      title: "Award Winning",
      description: "Recognized for excellence in taste and service"
    }
  ];

  const testimonials = [
    {
      name: "Sarah Ahmed",
      role: "Food Critic",
      comment: "The fusion of traditional and modern flavors is absolutely remarkable.",
      rating: 5
    },
    {
      name: "Hassan Khan",
      role: "Regular Customer",
      comment: "Best burgers in Lahore! The quality is consistently excellent.",
      rating: 5
    },
    {
      name: "Amna Malik",
      role: "Food Blogger",
      comment: "A must-visit for anyone seeking an exceptional dining experience.",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white shadow-md' 
          : 'bg-transparent'
      }`}>
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-bold text-red-800 hover:text-red-900 transition-colors">
              Spice & Sizzle
            </div>
            <div className="hidden md:flex space-x-8">
              {['Home', 'About', 'Menu', 'Testimonials', 'Contact'].map((item) => (
                <a 
                  key={item} 
                  href={`#${item.toLowerCase()}`} 
                  className="text-gray-700 hover:text-red-700 transition-colors"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-32 pb-20 px-6 bg-gradient-to-b from-orange-50 to-white">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6 text-gray-900">
                Experience the
                <span className="block text-red-800">
                  Fusion of Flavors
                </span>
              </h1>
              <p className="text-gray-600 text-lg mb-8">
                Where traditional Lahori taste meets modern culinary innovation
              </p>
              <a 
                href="#menu" 
                className="inline-flex items-center px-8 py-3 rounded-full bg-red-700 text-white hover:bg-red-800 transition-colors"
              >
                Explore Menu
              </a>
            </div>
            <div className="md:w-1/2">
              <img 
                src="https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=1000&q=80" 
                alt="Delicious Burger"
                className="rounded-2xl shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-900">
            Why Choose <span className="text-red-800">Us</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow border-t-4 border-red-700">
                <feature.icon className="w-12 h-12 text-red-700 mb-4" />
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Menu Section */}
      <section id="menu" className="py-20 bg-orange-50">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-900">
            Our <span className="text-red-800">Menu</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {menuItems.map((item, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="relative h-48">
                  <img 
                    src={item.image} 
                    alt={item.name} 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 right-4 bg-red-700 text-white px-3 py-1 rounded-full text-sm">
                    {item.category}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{item.name}</h3>
                  <p className="text-gray-600 mb-4">{item.description}</p>
                  <p className="font-bold text-red-800">{item.price}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-900">
            What Our <span className="text-red-800">Customers Say</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="p-6 bg-white rounded-xl shadow-lg border border-red-100">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4 italic">"{testimonial.comment}"</p>
                <div>
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Special Features Section */}
      <section className="py-20 bg-gradient-to-br from-red-800 to-red-900 text-white">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            {[
              { icon: Users, title: "Happy Customers", value: "10,000+" },
              { icon: Utensils, title: "Dishes Served", value: "50,000+" },
              { icon: Award, title: "Awards Won", value: "15+" },
              { icon: Star, title: "Average Rating", value: "4.9" }
            ].map((stat, index) => (
              <div key={index}>
                <stat.icon className="w-8 h-8 mx-auto mb-4" />
                <p className="text-3xl font-bold mb-2">{stat.value}</p>
                <p className="text-red-100">{stat.title}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-orange-50">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-900">
            <span className="text-red-800">Visit Us</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: MapPin, title: "Location", content: ["MM Alam Road, Gulberg III, Lahore"] },
              { icon: Clock, title: "Hours", content: ["Open Daily", "12:00 PM - 12:00 AM"] },
              { icon: Phone, title: "Contact", content: ["+92 300 1234567"] }
            ].map((item, index) => (
              <div key={index} className="bg-white rounded-xl p-8 text-center shadow-lg hover:shadow-xl transition-shadow">
                <item.icon className="w-8 h-8 mx-auto mb-4 text-red-700" />
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                {item.content.map((text, i) => (
                  <p key={i} className="text-gray-600">{text}</p>
                ))}
              </div>
            ))}
          </div>
          <div className="flex justify-center space-x-6 mt-12">
            {[Facebook, Instagram, Twitter].map((Icon, index) => (
              <Icon key={index} className="w-6 h-6 text-gray-600 hover:text-red-700 cursor-pointer transition-colors" />
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">About Us</h3>
              <p className="text-gray-400">Bringing the best of traditional and modern cuisine to your plate since 2020.</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><a href="#menu" className="text-gray-400 hover:text-white transition-colors">Menu</a></li>
                <li><a href="#about" className="text-gray-400 hover:text-white transition-colors">About</a></li>
                <li><a href="#contact" className="text-gray-400 hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Opening Hours</h3>
              <p className="text-gray-400">Monday - Sunday</p>
              <p className="text-gray-400">12:00 PM - 12:00 AM</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Newsletter</h3>
              <p className="text-gray-400 mb-4">Subscribe for updates and exclusive offers</p>
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="w-full px-4 py-2 rounded bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-red-500"
              />
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>© 2024 Spice & Sizzle. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;