import Image from "next/image";
import ScrollEffects from "./components/ScrollEffects";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-sentia-black via-sentia-dark to-sentia-dark">
      <ScrollEffects />
      
      {/* Scroll Progress Indicator */}
      <div className="fixed top-0 left-0 w-full h-1 bg-sentia-dark/20 z-50">
        <div 
          className="h-full bg-gradient-to-r from-sentia-cyan to-sentia-yellow transition-all duration-300 ease-out scroll-progress"
          style={{width: '0%'}}
        ></div>
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-sentia-black/95 backdrop-blur-md z-50 border-b border-sentia-dark/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <Image
                src="/sentialab.png"
                alt="SentiaLab Logo"
                width={40}
                height={40}
                className="h-10 w-auto"
              />
              <span className="text-2xl font-bold text-white">SentiaLab</span>
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#about" className="text-white hover:text-sentia-cyan transition-colors">About</a>
              <a href="#services" className="text-white hover:text-sentia-cyan transition-colors">Services</a>
              <a href="#contact" className="text-white hover:text-sentia-cyan transition-colors">Contact</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-20 px-4 relative overflow-hidden">
        {/* Animated Background Particles */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-sentia-cyan/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-sentia-purple/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
          <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-sentia-yellow/5 rounded-full blur-2xl animate-pulse" style={{animationDelay: '2s'}}></div>
        </div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-sentia-cyan/10 border border-sentia-cyan/20 text-sentia-cyan text-sm font-medium animate-bounce">
                🚀 Pioneering Tech Innovation
              </div>
              
              <h1 className="text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight">
                Building the
                <span className="block text-transparent bg-gradient-to-r from-sentia-cyan via-sentia-yellow to-sentia-cyan bg-clip-text animate-pulse bg-size-200 bg-pos-0 hover:bg-pos-100 transition-all duration-3000">
                  Future of Tech
                </span>
              </h1>
              
              <p className="text-xl text-gray-300 leading-relaxed max-w-lg opacity-0 animate-fade-in-up" style={{animationDelay: '0.5s', animationFillMode: 'forwards'}}>
                SentiaLab specializes in cutting-edge robotics, artificial intelligence, and embedded systems that transform industries and enhance human capabilities.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 opacity-0 animate-fade-in-up" style={{animationDelay: '1s', animationFillMode: 'forwards'}}>
                <button className="group inline-flex items-center justify-center px-8 py-4 bg-sentia-cyan hover:bg-sentia-cyan/80 text-sentia-black font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-sentia-cyan/25">
                  <span>Explore Solutions</span>
                  <svg className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </button>
                <button className="group inline-flex items-center justify-center px-8 py-4 border-2 border-sentia-dark text-white hover:border-sentia-cyan hover:text-sentia-cyan font-semibold rounded-lg transition-all duration-300 relative overflow-hidden">
                  <span className="relative z-10">Watch Demo</span>
                  <div className="absolute inset-0 bg-sentia-cyan/10 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                </button>
              </div>
              
              {/* Animated Stats */}
              <div className="grid grid-cols-3 gap-8 pt-8 border-t border-sentia-dark/50 opacity-0 animate-fade-in-up" style={{animationDelay: '1.5s', animationFillMode: 'forwards'}}>
                <div className="group cursor-pointer">
                  <div className="text-2xl font-bold text-sentia-cyan group-hover:scale-110 transition-transform duration-300">50+</div>
                  <div className="text-sm text-gray-400">Projects Delivered</div>
                </div>
                <div className="group cursor-pointer">
                  <div className="text-2xl font-bold text-sentia-cyan group-hover:scale-110 transition-transform duration-300">15+</div>
                  <div className="text-sm text-gray-400">Industry Partners</div>
                </div>
                <div className="group cursor-pointer">
                  <div className="text-2xl font-bold text-sentia-cyan group-hover:scale-110 transition-transform duration-300">5+</div>
                  <div className="text-sm text-gray-400">Years Experience</div>
                </div>
              </div>
            </div>
            
            {/* Right Visual with Floating Animation */}
            <div className="relative opacity-0 animate-fade-in-right" style={{animationDelay: '0.8s', animationFillMode: 'forwards'}}>
              <div className="relative z-10 bg-gradient-to-br from-sentia-dark/40 to-sentia-black/40 backdrop-blur-sm rounded-2xl p-8 border border-sentia-cyan/20 hover:border-sentia-cyan/40 transition-all duration-500 hover:transform hover:scale-105">
                <Image
                  src="/sentialab.png"
                  alt="SentiaLab Logo"
                  width={200}
                  height={200}
                  className="mx-auto mb-6 filter brightness-110 hover:brightness-125 transition-all duration-300"
                />
                
                {/* Animated Tech Stack Icons */}
                <div className="grid grid-cols-3 gap-4 mt-8">
                  <div className="bg-sentia-cyan/10 rounded-xl p-4 text-center border border-sentia-cyan/20 hover:bg-sentia-cyan/20 hover:scale-110 transition-all duration-300 cursor-pointer">
                    <div className="text-2xl mb-2 animate-bounce" style={{animationDelay: '2s'}}>🤖</div>
                    <div className="text-xs text-gray-300">Robotics</div>
                  </div>
                  <div className="bg-sentia-yellow/10 rounded-xl p-4 text-center border border-sentia-yellow/20 hover:bg-sentia-yellow/20 hover:scale-110 transition-all duration-300 cursor-pointer">
                    <div className="text-2xl mb-2 animate-bounce" style={{animationDelay: '2.5s'}}>🧠</div>
                    <div className="text-xs text-gray-300">AI/ML</div>
                  </div>
                  <div className="bg-sentia-purple/10 rounded-xl p-4 text-center border border-sentia-purple/20 hover:bg-sentia-purple/20 hover:scale-110 transition-all duration-300 cursor-pointer">
                    <div className="text-2xl mb-2 animate-bounce" style={{animationDelay: '3s'}}>⚡</div>
                    <div className="text-xs text-gray-300">IoT</div>
                  </div>
                </div>
              </div>
              
              {/* Enhanced Background Decoration with Animation */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-sentia-cyan/20 rounded-full blur-xl animate-pulse"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-sentia-purple/20 rounded-full blur-xl animate-pulse" style={{animationDelay: '1s'}}></div>
              <div className="absolute top-1/2 -right-8 w-16 h-16 bg-sentia-yellow/20 rounded-full blur-lg animate-pulse" style={{animationDelay: '2s'}}></div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 px-4 bg-sentia-black/30 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              What We <span className="text-sentia-cyan">Specialize In</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our expertise spans across three core technological domains that are shaping the future of industry and innovation.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Robotics */}
            <div className="group relative overflow-hidden bg-gradient-to-br from-sentia-dark/80 to-sentia-black/80 rounded-2xl p-8 border border-sentia-cyan/20 hover:border-sentia-cyan/40 transition-all duration-500">
              <div className="absolute inset-0 bg-gradient-to-br from-sentia-cyan/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <div className="w-16 h-16 bg-sentia-cyan/20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-3xl">🤖</span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Advanced Robotics</h3>
                <p className="text-gray-300 leading-relaxed mb-6">
                  From autonomous systems to collaborative robots, we design and develop robotic solutions that enhance productivity and safety across industries.
                </p>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-sentia-cyan rounded-full mr-3"></span>
                    Industrial Automation
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-sentia-cyan rounded-full mr-3"></span>
                    Autonomous Navigation
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-sentia-cyan rounded-full mr-3"></span>
                    Human-Robot Interaction
                  </li>
                </ul>
              </div>
            </div>
            
            {/* AI */}
            <div className="group relative overflow-hidden bg-gradient-to-br from-sentia-dark/80 to-sentia-black/80 rounded-2xl p-8 border border-sentia-yellow/20 hover:border-sentia-yellow/40 transition-all duration-500">
              <div className="absolute inset-0 bg-gradient-to-br from-sentia-yellow/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <div className="w-16 h-16 bg-sentia-yellow/20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-3xl">🧠</span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Artificial Intelligence</h3>
                <p className="text-gray-300 leading-relaxed mb-6">
                  Intelligent systems powered by machine learning, computer vision, and natural language processing to solve complex real-world challenges.
                </p>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-sentia-yellow rounded-full mr-3"></span>
                    Machine Learning Models
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-sentia-yellow rounded-full mr-3"></span>
                    Computer Vision
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-sentia-yellow rounded-full mr-3"></span>
                    Predictive Analytics
                  </li>
                </ul>
              </div>
            </div>
            
            {/* Embedded Systems */}
            <div className="group relative overflow-hidden bg-gradient-to-br from-sentia-dark/80 to-sentia-black/80 rounded-2xl p-8 border border-sentia-purple/20 hover:border-sentia-purple/40 transition-all duration-500">
              <div className="absolute inset-0 bg-gradient-to-br from-sentia-purple/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <div className="w-16 h-16 bg-sentia-purple/20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-3xl">⚡</span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Embedded Systems</h3>
                <p className="text-gray-300 leading-relaxed mb-6">
                  High-performance embedded solutions for IoT devices, edge computing, and mission-critical applications with real-time requirements.
                </p>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-sentia-purple rounded-full mr-3"></span>
                    IoT Device Development
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-sentia-purple rounded-full mr-3"></span>
                    Real-time Systems
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-sentia-purple rounded-full mr-3"></span>
                    Edge Computing
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-4 bg-sentia-dark/20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-white mb-12">
            Our <span className="text-sentia-cyan">Services</span>
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Custom Robotics", desc: "Tailored robotic solutions for industrial and consumer applications" },
              { title: "AI Development", desc: "Machine learning models and AI integration services" },
              { title: "IoT Solutions", desc: "Connected device ecosystems and smart infrastructure" },
              { title: "Consulting", desc: "Expert guidance on technology adoption and digital transformation" }
            ].map((service, index) => (
              <div key={index} className="p-6 bg-sentia-black/60 rounded-xl border border-sentia-dark hover:border-sentia-cyan/50 transition-all duration-300 hover:transform hover:scale-105">
                <h4 className="text-xl font-semibold text-sentia-cyan mb-3">{service.title}</h4>
                <p className="text-gray-300 text-sm leading-relaxed">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 bg-sentia-black/90">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
            Let's Build the <span className="text-sentia-cyan">Future</span> Together
          </h2>
          <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
            Ready to transform your ideas into reality? Get in touch with our team of experts.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a
              href="mailto:contact@sentialab.com"
              className="bg-sentia-cyan hover:bg-sentia-cyan/80 text-sentia-black font-semibold py-4 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Email Us
            </a>
            <a
              href="tel:+1234567890"
              className="border-2 border-sentia-cyan text-sentia-cyan hover:bg-sentia-cyan hover:text-sentia-black font-semibold py-4 px-8 rounded-full transition-all duration-300"
            >
              Call Us
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 bg-sentia-black border-t border-sentia-purple/20">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <Image
                src="/sentialab.png"
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

      {/* Floating Action Button */}
      <div className="fixed bottom-8 right-8 z-50">
        <button className="group bg-sentia-cyan hover:bg-sentia-cyan/80 text-sentia-black p-4 rounded-full shadow-2xl hover:shadow-sentia-cyan/25 transition-all duration-300 transform hover:scale-110 animate-bounce">
          <svg className="w-6 h-6 group-hover:rotate-12 transition-transform duration-300" fill="currentColor" viewBox="0 0 20 20">
            <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
            <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
          </svg>
          <span className="absolute -top-2 -right-2 w-3 h-3 bg-sentia-yellow rounded-full animate-pulse"></span>
        </button>
      </div>
    </div>
  );
}
