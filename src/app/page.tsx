'use client'
import React, { useState, useEffect } from 'react';
import { ChevronDown, Wrench, Zap, Network, Phone, Mail, MapPin, ExternalLink, Download } from 'lucide-react';

const Portfolio = () => {
  const [scrollY, setScrollY] = useState(0);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const skills = [
    { name: 'HVAC Systems', level: 95, category: 'current' },
    { name: 'Electrical Wiring', level: 90, category: 'current' },
    { name: 'Troubleshooting', level: 92, category: 'current' },
    { name: 'System Installation', level: 88, category: 'current' },
    { name: 'Fiber Optic Theory', level: 75, category: 'learning' },
    { name: 'Cable Splicing', level: 70, category: 'learning' },
    { name: 'Network Infrastructure', level: 65, category: 'learning' },
    { name: 'Signal Testing', level: 68, category: 'learning' },
  ];

  const experience = [
    {
      title: 'Senior HVAC Technician',
      company: 'Climate Solutions Inc.',
      period: '2020 - Present',
      description: 'Lead technician responsible for complex commercial HVAC installations and maintenance. Specialized in electrical diagnostics and system optimization.',
      skills: ['Commercial HVAC', 'Electrical Systems', 'Team Leadership']
    },
    {
      title: 'HVAC Installation Specialist',
      company: 'Comfort Systems LLC',
      period: '2018 - 2020',
      description: 'Focused on residential and light commercial HVAC installations with emphasis on energy efficiency and precision wiring.',
      skills: ['Residential HVAC', 'Energy Efficiency', 'Precision Installation']
    },
    {
      title: 'Apprentice Technician',
      company: 'Metro Heating & Air',
      period: '2016 - 2018',
      description: 'Gained foundational experience in HVAC systems, electrical work, and customer service while completing certification.',
      skills: ['HVAC Fundamentals', 'Electrical Basics', 'Customer Service']
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-purple-900/20 to-teal-900/20"></div>
        <div 
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: `radial-gradient(circle at 20% 80%, rgba(120, 119, 198, 0.3) 0%, transparent 50%),
                            radial-gradient(circle at 80% 20%, rgba(59, 130, 246, 0.3) 0%, transparent 50%),
                            radial-gradient(circle at 40% 40%, rgba(14, 165, 233, 0.3) 0%, transparent 50%)`,
            transform: `translateY(${scrollY * 0.5}px)`
          }}
        ></div>
        
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <div className="mb-8 relative">
            <h1 className="text-7xl md:text-9xl font-black bg-gradient-to-r from-white via-blue-200 to-teal-200 bg-clip-text text-transparent mb-4 tracking-tight">
              JONATHON
            </h1>
            <h2 className="text-4xl md:text-6xl font-light text-blue-300 mb-2 tracking-wider">SILVA</h2>
            <div className="h-1 w-32 bg-gradient-to-r from-blue-500 to-teal-400 mx-auto mb-6"></div>
          </div>
          
          <div className="space-y-4 mb-12">
            <p className="text-xl md:text-2xl text-gray-300 font-light">
              HVAC Technician → Fiber Optic Specialist
            </p>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed">
              Bringing precision engineering and electrical expertise from HVAC systems 
              to the cutting-edge world of fiber optic infrastructure
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-teal-500 rounded-full text-white font-semibold hover:from-blue-700 hover:to-teal-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
              View My Work
            </button>
            <button className="px-8 py-4 border-2 border-blue-400 rounded-full text-blue-400 font-semibold hover:bg-blue-400 hover:text-black transition-all duration-300 flex items-center gap-2">
              <Download size={20} />
              Download Resume
            </button>
          </div>
        </div>
        
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown size={32} className="text-blue-400" />
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-4 relative">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-5xl font-bold mb-8 bg-gradient-to-r from-blue-400 to-teal-400 bg-clip-text text-transparent">
                Transitioning Expertise
              </h2>
              <div className="space-y-6 text-gray-300 text-lg leading-relaxed">
                <p>
                  With over 8 years of experience in HVAC systems, I've mastered the art of precision 
                  installation, electrical diagnostics, and complex system troubleshooting. Now, I'm 
                  channeling this expertise into the rapidly growing field of fiber optic infrastructure.
                </p>
                <p>
                  My background in electrical systems and attention to detail makes fiber optic splicing 
                  a natural progression. The same precision required for HVAC electrical work translates 
                  perfectly to the microscopic world of fiber optic connections.
                </p>
                <p>
                  Currently pursuing fiber optic certification while leveraging my existing skills in 
                  installation, project management, and technical problem-solving.
                </p>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-gradient-to-br from-blue-900/30 to-teal-900/30 p-8 rounded-2xl backdrop-blur-sm border border-blue-500/20">
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-blue-400 mb-2">8+</div>
                    <div className="text-gray-400">Years HVAC</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-teal-400 mb-2">500+</div>
                    <div className="text-gray-400">Projects Completed</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-purple-400 mb-2">98%</div>
                    <div className="text-gray-400">Client Satisfaction</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-green-400 mb-2">24/7</div>
                    <div className="text-gray-400">Emergency Service</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 px-4 relative">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-teal-400 bg-clip-text text-transparent">
            Technical Expertise
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold mb-8 text-blue-400 flex items-center gap-3">
                <Wrench size={28} />
                Current Expertise
              </h3>
              {skills.filter(skill => skill.category === 'current').map((skill, index) => (
                <div key={index} className="mb-6">
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-300 font-medium">{skill.name}</span>
                    <span className="text-blue-400 font-bold">{skill.level}%</span>
                  </div>
                  <div className="h-3 bg-gray-800 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-gradient-to-r from-blue-500 to-blue-400 rounded-full transition-all duration-1000 ease-out"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
            
            <div>
              <h3 className="text-2xl font-semibold mb-8 text-teal-400 flex items-center gap-3">
                <Network size={28} />
                Developing Skills
              </h3>
              {skills.filter(skill => skill.category === 'learning').map((skill, index) => (
                <div key={index} className="mb-6">
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-300 font-medium">{skill.name}</span>
                    <span className="text-teal-400 font-bold">{skill.level}%</span>
                  </div>
                  <div className="h-3 bg-gray-800 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-gradient-to-r from-teal-500 to-teal-400 rounded-full transition-all duration-1000 ease-out"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-20 px-4 relative">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-teal-400 bg-clip-text text-transparent">
            Professional Journey
          </h2>
          
          <div className="space-y-12">
            {experience.map((job, index) => (
              <div key={index} className="relative">
                <div className="bg-gradient-to-br from-gray-900/50 to-gray-800/50 p-8 rounded-2xl border border-gray-700/50 backdrop-blur-sm hover:border-blue-500/30 transition-all duration-300">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-2">{job.title}</h3>
                      <p className="text-blue-400 text-lg font-medium">{job.company}</p>
                    </div>
                    <div className="text-gray-400 font-medium mt-2 md:mt-0">
                      {job.period}
                    </div>
                  </div>
                  
                  <p className="text-gray-300 mb-4 leading-relaxed">
                    {job.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {job.skills.map((skill, skillIndex) => (
                      <span 
                        key={skillIndex}
                        className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm border border-blue-500/30"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4 relative">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl font-bold mb-8 bg-gradient-to-r from-blue-400 to-teal-400 bg-clip-text text-transparent">
            Let's Connect
          </h2>
          <p className="text-xl text-gray-300 mb-12">
            Ready to bring precision and expertise to your fiber optic projects
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-gradient-to-br from-gray-900/50 to-gray-800/50 p-6 rounded-xl border border-gray-700/50 backdrop-blur-sm">
              <Phone size={32} className="text-blue-400 mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Phone</h3>
              <p className="text-gray-400">(555) 123-4567</p>
            </div>
            
            <div className="bg-gradient-to-br from-gray-900/50 to-gray-800/50 p-6 rounded-xl border border-gray-700/50 backdrop-blur-sm">
              <Mail size={32} className="text-teal-400 mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Email</h3>
              <p className="text-gray-400">jonathon.silva@email.com</p>
            </div>
            
            <div className="bg-gradient-to-br from-gray-900/50 to-gray-800/50 p-6 rounded-xl border border-gray-700/50 backdrop-blur-sm">
              <MapPin size={32} className="text-purple-400 mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Location</h3>
              <p className="text-gray-400">Available Nationwide</p>
            </div>
          </div>
          
          <button className="px-12 py-4 bg-gradient-to-r from-blue-600 to-teal-500 rounded-full text-white font-semibold hover:from-blue-700 hover:to-teal-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl text-lg">
            Start a Conversation
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-gray-800">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-gray-500">
            © 2025 Jonathon Silva. Precision meets innovation in fiber optic solutions.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;