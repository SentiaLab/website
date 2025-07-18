import Image from "next/image";
import ScrollEffects from "./components/ScrollEffects";
import ParticleBackground from "./components/ParticleBackground";
import { assetPath } from "./lib/utils";
import { 
  FaRocket, 
  FaRobot, 
  FaBrain, 
  FaBolt, 
  FaNetworkWired, 
  FaLightbulb, 
  FaChartBar,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt 
} from "react-icons/fa";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-sentia-black via-sentia-dark to-sentia-dark relative">
      <ParticleBackground />
      <ScrollEffects />
      
      {/* Scroll Progress Indicator */}
      <div className="fixed top-0 left-0 w-full h-1 bg-sentia-dark/20 z-50">
        <div 
          className="h-full bg-gradient-to-r from-sentia-cyan to-sentia-yellow transition-all duration-300 ease-out scroll-progress"
          style={{width: '0%'}}
        ></div>
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-sentia-black/80 backdrop-blur-2xl z-50 border-b border-sentia-cyan/10 shadow-2xl shadow-sentia-black/50 transition-all duration-500 navbar-scroll">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo Section - Clean Design */}
            <div className="flex items-center space-x-3 group">
              <Image
                src={assetPath("/sentialab.png")}
                alt="SentiaLab Logo"
                width={40}
                height={40}
                className="h-10 w-auto filter brightness-110 group-hover:brightness-125 transition-all duration-300"
              />
              <div className="flex flex-col">
                <span className="text-2xl font-bold text-white group-hover:text-sentia-cyan transition-colors duration-300">SentiaLab</span>
                <span className="text-xs text-sentia-cyan/60 font-medium tracking-wider uppercase">Tech Innovation</span>
              </div>
            </div>

            {/* Desktop Navigation with Modern Pills */}
            <div className="hidden md:flex items-center space-x-2">
              <div className="flex items-center bg-sentia-dark/40 rounded-full p-1 border border-sentia-dark/50 backdrop-blur-sm">
                <a href="#about" className="relative px-6 py-3 text-white hover:text-sentia-black font-medium rounded-full transition-all duration-300 group nav-link">
                  <span className="relative z-10">About</span>
                  <div className="absolute inset-0 bg-sentia-cyan scale-0 group-hover:scale-100 rounded-full transition-transform duration-300 origin-center"></div>
                </a>
                <a href="#services" className="relative px-6 py-3 text-white hover:text-sentia-black font-medium rounded-full transition-all duration-300 group nav-link">
                  <span className="relative z-10">Services</span>
                  <div className="absolute inset-0 bg-sentia-cyan scale-0 group-hover:scale-100 rounded-full transition-transform duration-300 origin-center"></div>
                </a>
                <a href="#contact" className="relative px-6 py-3 text-white hover:text-sentia-black font-medium rounded-full transition-all duration-300 group nav-link">
                  <span className="relative z-10">Contact</span>
                  <div className="absolute inset-0 bg-sentia-cyan scale-0 group-hover:scale-100 rounded-full transition-transform duration-300 origin-center"></div>
                </a>
              </div>
              
              {/* CTA Button */}
              <div className="ml-4">
                <a href="#contact" className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-sentia-cyan to-sentia-yellow hover:from-sentia-cyan/80 hover:to-sentia-yellow/80 text-sentia-black font-semibold rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-sentia-cyan/25">
                  <span>Get Started</span>
                  <svg className="ml-2 w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </a>
              </div>
            </div>
            
            {/* Enhanced Mobile Menu Button */}
            <div className="md:hidden">
              <button className="relative group p-3 rounded-xl bg-sentia-dark/40 border border-sentia-dark/50 hover:border-sentia-cyan/40 transition-all duration-300 mobile-menu-btn">
                <div className="flex flex-col space-y-1.5">
                  <span className="w-6 h-0.5 bg-white group-hover:bg-sentia-cyan transition-colors duration-300 rounded-full transform group-hover:rotate-45 group-hover:translate-y-2 transition-transform"></span>
                  <span className="w-6 h-0.5 bg-white group-hover:bg-sentia-cyan transition-colors duration-300 rounded-full group-hover:opacity-0"></span>
                  <span className="w-6 h-0.5 bg-white group-hover:bg-sentia-cyan transition-colors duration-300 rounded-full transform group-hover:-rotate-45 group-hover:-translate-y-2 transition-transform"></span>
                </div>
                
                {/* Mobile Menu Tooltip */}
                <div className="absolute right-0 top-full mt-2 bg-sentia-black/90 text-white px-3 py-2 rounded-lg text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                  Menu
                  <div className="absolute bottom-full left-1/2 -translate-x-1/2 border-4 border-transparent border-b-sentia-black/90"></div>
                </div>
              </button>
            </div>
          </div>
        </div>
        
        {/* Mobile Navigation Dropdown */}
        <div className="md:hidden mobile-menu hidden">
          <div className="bg-sentia-black/95 backdrop-blur-2xl border-t border-sentia-cyan/10 shadow-2xl">
            <div className="max-w-7xl mx-auto px-4 py-6 space-y-4">
              <a href="#about" className="block py-3 px-4 text-white hover:text-sentia-cyan hover:bg-sentia-cyan/10 rounded-xl transition-all duration-300 font-medium">
                <div className="flex items-center space-x-3">
                  <span className="w-2 h-2 bg-sentia-cyan rounded-full"></span>
                  <span>About Us</span>
                </div>
              </a>
              <a href="#services" className="block py-3 px-4 text-white hover:text-sentia-cyan hover:bg-sentia-cyan/10 rounded-xl transition-all duration-300 font-medium">
                <div className="flex items-center space-x-3">
                  <span className="w-2 h-2 bg-sentia-yellow rounded-full"></span>
                  <span>Our Services</span>
                </div>
              </a>
              <a href="#contact" className="block py-3 px-4 text-white hover:text-sentia-cyan hover:bg-sentia-cyan/10 rounded-xl transition-all duration-300 font-medium">
                <div className="flex items-center space-x-3">
                  <span className="w-2 h-2 bg-sentia-purple rounded-full"></span>
                  <span>Contact</span>
                </div>
              </a>
              
              {/* Mobile CTA */}
              <div className="pt-4 border-t border-sentia-dark/50">
                <a href="#contact" className="block w-full text-center py-4 bg-gradient-to-r from-sentia-cyan to-sentia-yellow text-sentia-black font-semibold rounded-xl transition-all duration-300 transform hover:scale-105">
                  Get Started Today
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-20 px-4 relative overflow-hidden">
        {/* Enhanced Animated Background Particles */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-sentia-cyan/10 rounded-full blur-3xl animate-pulse morphing"></div>
          <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-sentia-purple/10 rounded-full blur-3xl animate-pulse morphing" style={{animationDelay: '1s'}}></div>
          <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-sentia-yellow/5 rounded-full blur-2xl animate-pulse morphing" style={{animationDelay: '2s'}}></div>
          
          {/* Floating geometric shapes */}
          <div className="absolute top-20 right-20 w-16 h-16 border border-sentia-cyan/20 rounded-lg floating parallax" data-speed="0.3"></div>
          <div className="absolute bottom-32 left-16 w-12 h-12 bg-sentia-yellow/10 rounded-full floating parallax" data-speed="0.4" style={{animationDelay: '1.5s'}}></div>
          <div className="absolute top-1/3 right-1/3 w-8 h-8 border border-sentia-purple/30 rotate-45 floating parallax" data-speed="0.2" style={{animationDelay: '3s'}}></div>
        </div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-sentia-cyan/10 border border-sentia-cyan/20 text-sentia-cyan text-sm font-medium animate-bounce pulse-glow">
                <FaRocket className="mr-2" />
                Pioneering Tech Innovation
              </div>
              
              <h1 className="text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight">
                Building the
                <span className="block text-transparent bg-gradient-to-r from-sentia-cyan via-sentia-yellow to-sentia-cyan bg-clip-text text-shimmer bg-size-200 bg-pos-0 hover:bg-pos-100 transition-all duration-3000">
                  Future of Tech
                </span>
              </h1>
              
              <p className="text-xl text-gray-300 leading-relaxed max-w-lg animate-on-scroll">
                SentiaLab specializes in cutting-edge robotics, artificial intelligence, and embedded systems that transform industries and enhance human capabilities.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 animate-on-scroll">
                <button className="group inline-flex items-center justify-center px-8 py-4 bg-sentia-cyan hover:bg-sentia-cyan/80 text-sentia-black font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-sentia-cyan/25 pulse-glow">
                  <span>Explore Solutions</span>
                  <svg className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </button>
                <button className="group inline-flex items-center justify-center px-8 py-4 border-2 border-sentia-dark text-white hover:border-sentia-cyan hover:text-sentia-cyan font-semibold rounded-lg transition-all duration-300 relative overflow-hidden card-hover">
                  <span className="relative z-10">Watch Demo</span>
                  <div className="absolute inset-0 bg-sentia-cyan/10 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                </button>
              </div>
              
              {/* Enhanced Animated Stats with Counters */}
              <div className="grid grid-cols-3 gap-8 pt-8 border-t border-sentia-dark/50 animate-on-scroll">
                <div className="group cursor-pointer text-center">
                  <div className="counter text-3xl font-bold text-sentia-cyan group-hover:scale-110 transition-transform duration-300" data-target="50">0+</div>
                  <div className="text-sm text-gray-400">Projects Delivered</div>
                </div>
                <div className="group cursor-pointer text-center">
                  <div className="counter text-3xl font-bold text-sentia-cyan group-hover:scale-110 transition-transform duration-300" data-target="15">0+</div>
                  <div className="text-sm text-gray-400">Industry Partners</div>
                </div>
                <div className="group cursor-pointer text-center">
                  <div className="counter text-3xl font-bold text-sentia-cyan group-hover:scale-110 transition-transform duration-300" data-target="5">0+</div>
                  <div className="text-sm text-gray-400">Years Experience</div>
                </div>
              </div>
            </div>
            
            {/* Right Visual with Enhanced Floating Animation */}
            <div className="relative animate-on-scroll">
              <div className="relative z-10 bg-gradient-to-br from-sentia-dark/40 to-sentia-black/40 backdrop-blur-sm rounded-2xl p-8 border border-sentia-cyan/20 hover:border-sentia-cyan/40 transition-all duration-500 card-hover pulse-glow">
                <Image
                  src={assetPath("/sentialab.png")}
                  alt="SentiaLab Logo"
                  width={200}
                  height={200}
                  className="mx-auto mb-6 filter brightness-110 hover:brightness-125 transition-all duration-300 floating"
                />
                
                {/* Enhanced Animated Tech Stack Icons */}
                <div className="grid grid-cols-3 gap-4 mt-8">
                  <div className="stagger-item bg-sentia-cyan/10 rounded-xl p-4 text-center border border-sentia-cyan/20 hover:bg-sentia-cyan/20 card-hover cursor-pointer" data-delay="0">
                    <FaRobot className="text-2xl mb-2 mx-auto text-sentia-cyan floating" />
                    <div className="text-xs text-gray-300">Robotics</div>
                  </div>
                  <div className="stagger-item bg-sentia-yellow/10 rounded-xl p-4 text-center border border-sentia-yellow/20 hover:bg-sentia-yellow/20 card-hover cursor-pointer" data-delay="200">
                    <FaBrain className="text-2xl mb-2 mx-auto text-sentia-yellow floating" style={{animationDelay: '1s'}} />
                    <div className="text-xs text-gray-300">AI/ML</div>
                  </div>
                  <div className="stagger-item bg-sentia-purple/10 rounded-xl p-4 text-center border border-sentia-purple/20 hover:bg-sentia-purple/20 card-hover cursor-pointer" data-delay="400">
                    <FaBolt className="text-2xl mb-2 mx-auto text-sentia-purple floating" style={{animationDelay: '2s'}} />
                    <div className="text-xs text-gray-300">IoT</div>
                  </div>
                </div>
              </div>
              
              {/* Enhanced Background Decoration with More Animation */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-sentia-cyan/20 rounded-full blur-xl animate-pulse floating"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-sentia-purple/20 rounded-full blur-xl animate-pulse floating" style={{animationDelay: '1s'}}></div>
              <div className="absolute top-1/2 -right-8 w-16 h-16 bg-sentia-yellow/20 rounded-full blur-lg animate-pulse floating" style={{animationDelay: '2s'}}></div>
              
              {/* Additional decorative elements */}
              <div className="absolute top-8 left-8 w-3 h-3 bg-sentia-cyan rounded-full animate-ping" style={{animationDelay: '3s'}}></div>
              <div className="absolute bottom-8 right-8 w-2 h-2 bg-sentia-yellow rounded-full animate-ping" style={{animationDelay: '4s'}}></div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 px-4 bg-sentia-black/30 backdrop-blur-sm relative">
        {/* Parallax background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-20 h-20 border border-sentia-cyan/10 rounded-full parallax" data-speed="0.3"></div>
          <div className="absolute bottom-20 right-20 w-16 h-16 bg-sentia-purple/5 rounded-lg rotate-45 parallax" data-speed="0.4"></div>
        </div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16 animate-on-scroll">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              What We <span className="text-sentia-cyan text-shimmer">Specialize In</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our expertise spans across three core technological domains that are shaping the future of industry and innovation.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Robotics */}
            <div className="stagger-item group relative overflow-hidden bg-gradient-to-br from-sentia-dark/80 to-sentia-black/80 rounded-2xl p-8 border border-sentia-cyan/20 hover:border-sentia-cyan/40 transition-all duration-500 card-hover" data-delay="0">
              <div className="absolute inset-0 bg-gradient-to-br from-sentia-cyan/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <div className="w-16 h-16 bg-sentia-cyan/20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 pulse-glow">
                  <FaRobot className="text-3xl text-sentia-cyan floating" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Advanced Robotics</h3>
                <p className="text-gray-300 leading-relaxed mb-6">
                  From autonomous systems to collaborative robots, we design and develop robotic solutions that enhance productivity and safety across industries.
                </p>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-sentia-cyan rounded-full mr-3 animate-pulse"></span>
                    Industrial Automation
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-sentia-cyan rounded-full mr-3 animate-pulse" style={{animationDelay: '0.5s'}}></span>
                    Autonomous Navigation
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-sentia-cyan rounded-full mr-3 animate-pulse" style={{animationDelay: '1s'}}></span>
                    Human-Robot Interaction
                  </li>
                </ul>
              </div>
            </div>
            
            {/* AI */}
            <div className="stagger-item group relative overflow-hidden bg-gradient-to-br from-sentia-dark/80 to-sentia-black/80 rounded-2xl p-8 border border-sentia-yellow/20 hover:border-sentia-yellow/40 transition-all duration-500 card-hover" data-delay="200">
              <div className="absolute inset-0 bg-gradient-to-br from-sentia-yellow/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <div className="w-16 h-16 bg-sentia-yellow/20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 pulse-glow">
                  <FaBrain className="text-3xl text-sentia-yellow floating" style={{animationDelay: '1s'}} />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Artificial Intelligence</h3>
                <p className="text-gray-300 leading-relaxed mb-6">
                  Intelligent systems powered by machine learning, computer vision, and natural language processing to solve complex real-world challenges.
                </p>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-sentia-yellow rounded-full mr-3 animate-pulse"></span>
                    Machine Learning Models
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-sentia-yellow rounded-full mr-3 animate-pulse" style={{animationDelay: '0.5s'}}></span>
                    Computer Vision
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-sentia-yellow rounded-full mr-3 animate-pulse" style={{animationDelay: '1s'}}></span>
                    Predictive Analytics
                  </li>
                </ul>
              </div>
            </div>
            
            {/* Embedded Systems */}
            <div className="stagger-item group relative overflow-hidden bg-gradient-to-br from-sentia-dark/80 to-sentia-black/80 rounded-2xl p-8 border border-sentia-purple/20 hover:border-sentia-purple/40 transition-all duration-500 card-hover" data-delay="400">
              <div className="absolute inset-0 bg-gradient-to-br from-sentia-purple/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <div className="w-16 h-16 bg-sentia-purple/20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 pulse-glow">
                  <FaBolt className="text-3xl text-sentia-purple floating" style={{animationDelay: '2s'}} />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Embedded Systems</h3>
                <p className="text-gray-300 leading-relaxed mb-6">
                  High-performance embedded solutions for IoT devices, edge computing, and mission-critical applications with real-time requirements.
                </p>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-sentia-purple rounded-full mr-3 animate-pulse"></span>
                    IoT Device Development
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-sentia-purple rounded-full mr-3 animate-pulse" style={{animationDelay: '0.5s'}}></span>
                    Real-time Systems
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-sentia-purple rounded-full mr-3 animate-pulse" style={{animationDelay: '1s'}}></span>
                    Edge Computing
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-4 bg-sentia-dark/20 relative">
        {/* Parallax decorations */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-10 right-10 w-24 h-24 border border-sentia-cyan/10 rounded-full parallax" data-speed="0.2"></div>
          <div className="absolute bottom-10 left-10 w-16 h-16 bg-sentia-yellow/5 rounded-lg parallax" data-speed="0.3"></div>
        </div>
        
        <div className="max-w-6xl mx-auto relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-white mb-12 animate-on-scroll">
            Our <span className="text-sentia-cyan text-shimmer">Services</span>
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Custom Robotics", desc: "Tailored robotic solutions for industrial and consumer applications", icon: FaRobot, delay: 0 },
              { title: "AI Development", desc: "Machine learning models and AI integration services", icon: FaBrain, delay: 100 },
              { title: "IoT Solutions", desc: "Connected device ecosystems and smart infrastructure", icon: FaNetworkWired, delay: 200 },
              { title: "Consulting", desc: "Expert guidance on technology adoption and digital transformation", icon: FaLightbulb, delay: 300 }
            ].map((service, index) => {
              const IconComponent = service.icon;
              return (
                <div key={index} className={`stagger-item group p-6 bg-sentia-black/60 rounded-xl border border-sentia-dark hover:border-sentia-cyan/50 transition-all duration-300 card-hover cursor-pointer relative overflow-hidden`} data-delay={service.delay}>
                  <div className="absolute inset-0 bg-gradient-to-br from-sentia-cyan/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="relative z-10">
                    <IconComponent className="text-3xl mb-4 text-sentia-cyan floating group-hover:scale-110 transition-transform duration-300" style={{animationDelay: `${index * 0.5}s`}} />
                    <h4 className="text-xl font-semibold text-sentia-cyan mb-3 group-hover:text-white transition-colors duration-300">{service.title}</h4>
                    <p className="text-gray-300 text-sm leading-relaxed">{service.desc}</p>
                  </div>
                  
                  {/* Decorative corner accent */}
                  <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-sentia-cyan/10 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Showcase/Portfolio Section */}
      <section className="py-24 px-4 bg-sentia-black/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Innovation in <span className="text-sentia-yellow">Action</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Discover how we&apos;re transforming industries with cutting-edge technology solutions.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Smart Factory Automation",
                category: "Robotics",
                description: "Autonomous manufacturing system increasing efficiency by 300%",
                metrics: "300% Efficiency Boost",
                color: "cyan"
              },
              {
                title: "AI-Powered Diagnostics",
                category: "Artificial Intelligence",
                description: "Medical imaging AI with 99.2% accuracy in early detection",
                metrics: "99.2% Accuracy",
                color: "yellow"
              },
              {
                title: "IoT Smart Cities",
                category: "Embedded Systems",
                description: "Connected infrastructure reducing energy consumption by 40%",
                metrics: "40% Energy Saved",
                color: "purple"
              }
            ].map((project, index) => (
              <div key={index} className="group relative bg-gradient-to-br from-sentia-dark/60 to-sentia-black/60 rounded-2xl p-6 border border-sentia-dark hover:border-sentia-cyan/40 transition-all duration-500 hover:transform hover:scale-105 cursor-pointer overflow-hidden">
                <div className={`absolute inset-0 bg-gradient-to-br ${project.color === 'cyan' ? 'from-sentia-cyan/5' : project.color === 'yellow' ? 'from-sentia-yellow/5' : 'from-sentia-purple/5'} to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                
                <div className="relative z-10">
                  <div className={`inline-block px-3 py-1 rounded-full text-xs font-medium mb-4 ${project.color === 'cyan' ? 'bg-sentia-cyan/20 text-sentia-cyan' : project.color === 'yellow' ? 'bg-sentia-yellow/20 text-sentia-yellow' : 'bg-sentia-purple/20 text-sentia-purple'}`}>
                    {project.category}
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-sentia-cyan transition-colors duration-300">
                    {project.title}
                  </h3>
                  
                  <p className="text-gray-300 text-sm leading-relaxed mb-4">
                    {project.description}
                  </p>
                  
                  <div className={`inline-flex items-center px-4 py-2 rounded-lg ${project.color === 'cyan' ? 'bg-sentia-cyan/10 text-sentia-cyan' : project.color === 'yellow' ? 'bg-sentia-yellow/10 text-sentia-yellow' : 'bg-sentia-purple/10 text-sentia-purple'} text-sm font-semibold`}>
                    <FaChartBar className="mr-2" />
                    {project.metrics}
                  </div>
                </div>
                
                <div className="absolute -bottom-2 -right-2 w-20 h-20 bg-sentia-cyan/10 rounded-full blur-xl group-hover:bg-sentia-cyan/20 transition-all duration-500"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 px-4 bg-sentia-black/90 relative overflow-hidden">
        {/* Background Animation */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-32 h-32 bg-sentia-cyan/5 rounded-full blur-2xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-40 h-40 bg-sentia-purple/5 rounded-full blur-2xl animate-pulse" style={{animationDelay: '1s'}}></div>
        </div>
        
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Contact Info */}
            <div className="space-y-8">
              <div>
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  Let&apos;s Build the <span className="text-sentia-cyan">Future</span> Together
                </h2>
                <p className="text-xl text-gray-300 leading-relaxed">
                  Ready to transform your ideas into reality? Get in touch with our team of experts and discover how we can accelerate your innovation journey.
                </p>
              </div>
              
              {/* Contact Methods */}
              <div className="space-y-6">
                <div className="flex items-center space-x-4 group cursor-pointer">
                  <div className="w-12 h-12 bg-sentia-cyan/20 rounded-xl flex items-center justify-center group-hover:bg-sentia-cyan/30 transition-colors duration-300">
                    <FaEnvelope className="w-6 h-6 text-sentia-cyan" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold">Email Us</h4>
                    <p className="text-gray-400 text-sm">contact@sentialab.com</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4 group cursor-pointer">
                  <div className="w-12 h-12 bg-sentia-yellow/20 rounded-xl flex items-center justify-center group-hover:bg-sentia-yellow/30 transition-colors duration-300">
                    <FaPhone className="w-6 h-6 text-sentia-yellow" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold">Call Us</h4>
                    <p className="text-gray-400 text-sm">+1 (555) 123-4567</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4 group cursor-pointer">
                  <div className="w-12 h-12 bg-sentia-purple/20 rounded-xl flex items-center justify-center group-hover:bg-sentia-purple/30 transition-colors duration-300">
                    <FaMapMarkerAlt className="w-6 h-6 text-sentia-purple" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold">Visit Us</h4>
                    <p className="text-gray-400 text-sm">Silicon Valley, CA</p>
                  </div>
                </div>
              </div>
              
              {/* Quick Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-6">
                <a
                  href="mailto:contact@sentialab.com"
                  className="inline-flex items-center justify-center px-8 py-4 bg-sentia-cyan hover:bg-sentia-cyan/80 text-sentia-black font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-sentia-cyan/25"
                >
                  <span>Start a Project</span>
                  <svg className="ml-2 w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </a>
                <button className="inline-flex items-center justify-center px-8 py-4 border-2 border-sentia-cyan text-sentia-cyan hover:bg-sentia-cyan hover:text-sentia-black font-semibold rounded-lg transition-all duration-300">
                  Schedule Consultation
                </button>
              </div>
            </div>
            
            {/* Right Side - Quick Contact Form */}
            <div className="bg-gradient-to-br from-sentia-dark/40 to-sentia-black/40 backdrop-blur-sm rounded-2xl p-8 border border-sentia-cyan/20">
              <h3 className="text-2xl font-bold text-white mb-6">Quick Contact</h3>
              
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <input
                      type="text"
                      placeholder="Your Name"
                      className="w-full px-4 py-3 bg-sentia-dark/50 border border-sentia-dark rounded-lg text-white placeholder-gray-400 focus:border-sentia-cyan focus:outline-none focus:ring-2 focus:ring-sentia-cyan/20 transition-all duration-300"
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      placeholder="Your Email"
                      className="w-full px-4 py-3 bg-sentia-dark/50 border border-sentia-dark rounded-lg text-white placeholder-gray-400 focus:border-sentia-cyan focus:outline-none focus:ring-2 focus:ring-sentia-cyan/20 transition-all duration-300"
                    />
                  </div>
                </div>
                
                <div>
                  <select className="w-full px-4 py-3 bg-sentia-dark/50 border border-sentia-dark rounded-lg text-white focus:border-sentia-cyan focus:outline-none focus:ring-2 focus:ring-sentia-cyan/20 transition-all duration-300">
                    <option value="">Select Service</option>
                    <option value="robotics">Custom Robotics</option>
                    <option value="ai">AI Development</option>
                    <option value="iot">IoT Solutions</option>
                    <option value="consulting">Consulting</option>
                  </select>
                </div>
                
                <div>
                  <textarea
                    rows={4}
                    placeholder="Tell us about your project..."
                    className="w-full px-4 py-3 bg-sentia-dark/50 border border-sentia-dark rounded-lg text-white placeholder-gray-400 focus:border-sentia-cyan focus:outline-none focus:ring-2 focus:ring-sentia-cyan/20 transition-all duration-300 resize-none"
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-sentia-cyan to-sentia-yellow hover:from-sentia-cyan/80 hover:to-sentia-yellow/80 text-sentia-black font-semibold py-4 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 bg-sentia-black border-t border-sentia-purple/20">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <Image
                src={assetPath("/sentialab.png")}
                alt="SentiaLab Logo"
                width={32}
                height={32}
                className="h-8 w-auto"
              />
              <span className="text-xl font-bold text-white">SentiaLab</span>
            </div>
            <p className="text-sentia-purple text-sm">
              © 2025 SentiaLab. All rights reserved. | Robotics • AI • Embedded Systems
            </p>
          </div>
        </div>
      </footer>

      {/* Floating Action Buttons */}
      <div className="fixed bottom-8 right-8 z-50 flex flex-col space-y-4">
        {/* Scroll to Top Button */}
        <button className="group bg-sentia-purple/20 hover:bg-sentia-purple/40 backdrop-blur-sm text-sentia-purple border border-sentia-purple/30 p-3 rounded-full shadow-lg hover:shadow-sentia-purple/25 transition-all duration-300 transform hover:scale-110 opacity-0 scroll-to-top">
          <svg className="w-5 h-5 group-hover:-translate-y-1 transition-transform duration-300" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M3.293 9.707a1 1 0 010-1.414l6-6a1 1 0 011.414 0l6 6a1 1 0 01-1.414 1.414L11 5.414V17a1 1 0 11-2 0V5.414L4.707 9.707a1 1 0 01-1.414 0z" clipRule="evenodd" />
          </svg>
          
          {/* Tooltip */}
          <div className="absolute right-full mr-4 top-1/2 -translate-y-1/2 bg-sentia-black/90 text-white px-3 py-2 rounded-lg text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
            Back to Top
            <div className="absolute left-full top-1/2 -translate-y-1/2 border-4 border-transparent border-l-sentia-black/90"></div>
          </div>
        </button>
      </div>
    </div>
  );
}
