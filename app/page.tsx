import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-sentia-black via-sentia-dark to-sentia-dark">
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
      <section className="pt-24 pb-16 px-4 text-center">
        <div className="max-w-6xl mx-auto">
          <div className="mb-8">
            <Image
              src="/sentialab.png"
              alt="SentiaLab Logo"
              width={120}
              height={120}
              className="mx-auto mb-6 drop-shadow-2xl"
            />
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Welcome to <span className="text-sentia-yellow">SentiaLab</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Pioneering the future through cutting-edge robotics, artificial intelligence, and embedded systems
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-sentia-cyan hover:bg-sentia-cyan/80 text-sentia-black font-semibold py-4 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg">
              Explore Our Solutions
            </button>
            <button className="border-2 border-sentia-cyan text-sentia-cyan hover:bg-sentia-cyan hover:text-sentia-black font-semibold py-4 px-8 rounded-full transition-all duration-300">
              Get in Touch
            </button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 bg-sentia-black/30 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-white mb-12">
            About <span className="text-sentia-cyan">SentiaLab</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-sentia-dark/80 rounded-xl backdrop-blur-sm border border-sentia-dark">
              <div className="w-16 h-16 bg-sentia-cyan/20 border border-sentia-cyan rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl text-sentia-cyan">🤖</span>
              </div>
              <h3 className="text-2xl font-semibold text-white mb-4">Robotics</h3>
              <p className="text-gray-300 leading-relaxed">
                Advanced robotic solutions that push the boundaries of automation and human-machine interaction.
              </p>
            </div>
            <div className="text-center p-6 bg-sentia-dark/80 rounded-xl backdrop-blur-sm border border-sentia-dark">
              <div className="w-16 h-16 bg-sentia-yellow/20 border border-sentia-yellow rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl text-sentia-yellow">🧠</span>
              </div>
              <h3 className="text-2xl font-semibold text-white mb-4">Artificial Intelligence</h3>
              <p className="text-gray-300 leading-relaxed">
                Intelligent systems powered by machine learning and deep neural networks for real-world applications.
              </p>
            </div>
            <div className="text-center p-6 bg-sentia-dark/80 rounded-xl backdrop-blur-sm border border-sentia-dark">
              <div className="w-16 h-16 bg-sentia-purple/20 border border-sentia-purple rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl text-sentia-purple">⚡</span>
              </div>
              <h3 className="text-2xl font-semibold text-white mb-4">Embedded Systems</h3>
              <p className="text-gray-300 leading-relaxed">
                High-performance embedded solutions for IoT, edge computing, and mission-critical applications.
              </p>
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
    </div>
  );
}
