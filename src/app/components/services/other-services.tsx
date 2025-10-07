import { Home, Shovel, Layers, Grid, Flame, Hammer } from "lucide-react";

export default function OtherServices() {
  const services = [
    { 
      name: "New Builds", 
      icon: Home,
      description: "Complete construction solutions from foundation to finish"
    },
    { 
      name: "Ground Works", 
      icon: Shovel,
      description: "Expert excavation, drainage, and site preparation"
    },
    { 
      name: "Driveways", 
      icon: Layers,
      description: "Durable, attractive driveways built to last"
    },
    { 
      name: "Patios", 
      icon: Grid,
      description: "Transform your outdoor space with quality paving"
    },
    { 
      name: "Roofing", 
      icon: Hammer,
      description: "Professional roofing installation and repairs"
    },
    { 
      name: "Chimney Repair / Removals", 
      icon: Flame,
      description: "Safe chimney repairs and removal services"
    },
  ];

  return (
    <section className="w-full bg-gradient-to-b from-gray-50 to-white text-black px-6 lg:px-12 py-24">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-20">
          <span className="inline-block text-red-600 text-sm lg:text-base font-semibold tracking-widest uppercase mb-4">
            Explore More Services
          </span>
          <h2 className="font-bold text-5xl lg:text-6xl mt-2 text-gray-900 mb-6">
            Other Services We Offer
          </h2>
          <div className="w-24 h-1 bg-red-600 mx-auto mb-6"></div>
          <p className="mt-6 text-lg lg:text-xl max-w-3xl mx-auto text-gray-600 leading-relaxed">
            Beyond our specialised brickwork and cavity walls, we provide a wide
            range of construction and home improvement services to meet all your
            project needs.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <div
              key={i}
              className="group relative bg-white rounded-xl shadow-sm border border-gray-100 p-8 text-center hover:shadow-xl hover:border-red-100 hover:-translate-y-1 transition-all duration-300 cursor-pointer"
            >
              {/* Icon Container */}
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-red-50 mb-6 group-hover:bg-red-600 transition-colors duration-300">
                <service.icon className="w-10 h-10 text-red-600 group-hover:text-white transition-colors duration-300" />
              </div>
              
              {/* Service Name */}
              <h3 className="font-bold text-2xl mb-3 text-gray-900 group-hover:text-red-600 transition-colors duration-300">
                {service.name}
              </h3>
              
              {/* Description */}
              <p className="text-gray-600 text-base leading-relaxed">
                {service.description}
              </p>

              {/* Decorative element */}
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-red-600 to-red-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 rounded-b-xl"></div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <p className="text-gray-600 text-lg mb-6">
            Need a custom solution? We're here to help with any construction project.
          </p>
          <button className="inline-flex items-center px-8 py-4 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700 transition-colors duration-300 shadow-lg hover:shadow-xl">
            Get a Free Quote
            <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}