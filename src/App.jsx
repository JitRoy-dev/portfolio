import React, { useState } from 'react';
import { Home, User, Code, GraduationCap, Mail, Github, Linkedin, ExternalLink, Download } from 'lucide-react';

const Portfolio = () => {
  const [activeTab, setActiveTab] = useState('home');

  const NavButton = ({ id, icon: Icon, label, isActive, onClick }) => (
    <button
      onClick={onClick}
      className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-300 ${
        isActive
          ? 'bg-blue-600 text-white shadow-lg transform scale-105'
          : 'text-gray-600 hover:text-blue-600 hover:bg-blue-50'
      }`}
    >
      <Icon size={20} />
      <span className="hidden sm:block">{label}</span>
    </button>
  );

  const HomePage = () => (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="text-center space-y-8 px-4">
        <div className="relative">
          <div className="w-32 h-32 mx-auto bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center mb-6 shadow-2xl">
            <User size={64} className="text-white" />
          </div>
          <div className="absolute -top-2 -right-2 w-6 h-6 bg-green-500 rounded-full animate-pulse"></div>
        </div>
        
        <div className="space-y-4">
          <h1 className="text-5xl font-bold text-gray-800 mb-2">
            Hi, I'm <span className="text-blue-600">Jit Roy</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Computer Science Student passionate about building innovative solutions and exploring cutting-edge technologies
          </p>
          <div className="flex flex-wrap justify-center gap-4 mt-8">
            <span className="px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
              Full Stack Developer
            </span>
            <span className="px-4 py-2 bg-purple-100 text-purple-800 rounded-full text-sm font-medium">
              AI Enthusiast
            </span>
            <span className="px-4 py-2 bg-green-100 text-green-800 rounded-full text-sm font-medium">
              Problem Solver
            </span>
          </div>
        </div>
        
        <div className="flex justify-center gap-4">
          <button
            onClick={() => setActiveTab('contact')}
            className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl transform hover:scale-105"
          >
            Get In Touch
          </button>
          <button className="border border-blue-600 text-blue-600 px-8 py-3 rounded-lg hover:bg-blue-50 transition-colors flex items-center gap-2">
            <Download size={20} />
            Resume
          </button>
        </div>
      </div>
    </div>
  );

  const SkillsPage = () => (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">Skills & Technologies</h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
            <h3 className="text-xl font-semibold mb-6 text-gray-800 flex items-center gap-2">
              <Code className="text-blue-600" size={24} />
              Programming Languages
            </h3>
            <div className="space-y-4">
              {[
                { name: 'Python', level: 90 },
                { name: 'JavaScript', level: 85 },
                { name: 'Java', level: 80 },
                { name: 'C++', level: 75 },
                { name: 'TypeScript', level: 70 }
              ].map((skill, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-sm font-medium text-gray-700">{skill.name}</span>
                    <span className="text-sm text-gray-500">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-blue-600 h-2 rounded-full transition-all duration-1000"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
            <h3 className="text-xl font-semibold mb-6 text-gray-800">Web Technologies</h3>
            <div className="grid grid-cols-2 gap-4">
              {[
                'React', 'Node.js', 'Express', 'MongoDB',
                'PostgreSQL', 'HTML5', 'CSS3', 'Tailwind CSS',
                'Next.js', 'GraphQL', 'REST APIs', 'Git'
              ].map((tech, index) => (
                <div key={index} className="bg-gray-50 rounded-lg p-3 text-center text-sm font-medium text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors">
                  {tech}
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
            <h3 className="text-xl font-semibold mb-6 text-gray-800">Tools & Frameworks</h3>
            <div className="space-y-3">
              {[
                'Machine Learning (TensorFlow, PyTorch)',
                'Cloud Platforms (AWS, GCP)',
                'Docker & Kubernetes',
                'Agile Development',
                'Test-Driven Development',
                'CI/CD Pipelines'
              ].map((tool, index) => (
                <div key={index} className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  <span className="text-sm text-gray-700">{tool}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const EducationPage = () => (
    <div className="min-h-screen bg-white py-12">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">Educational Qualifications</h2>
        
        <div className="relative">
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-blue-200"></div>
          
          <div className="space-y-12">
            <div className="relative flex items-start gap-6">
              <div className="flex-shrink-0 w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center shadow-lg">
                <GraduationCap className="text-white" size={24} />
              </div>
              <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow flex-1">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Bachelor of Science in Computer Science</h3>
                <p className="text-blue-600 font-medium mb-2">University of Technology • 2022 - 2026 (Expected)</p>
                <p className="text-gray-600 mb-4">Current GPA: 3.8/4.0</p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-medium text-gray-800 mb-2">Relevant Coursework:</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Data Structures & Algorithms</li>
                      <li>• Object-Oriented Programming</li>
                      <li>• Database Management Systems</li>
                      <li>• Software Engineering</li>
                      <li>• Machine Learning</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-800 mb-2">Achievements:</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Dean's List (2023, 2024)</li>
                      <li>• Academic Excellence Scholarship</li>
                      <li>• Programming Contest Winner</li>
                      <li>• CS Department Recognition</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative flex items-start gap-6">
              <div className="flex-shrink-0 w-16 h-16 bg-green-600 rounded-full flex items-center justify-center shadow-lg">
                <GraduationCap className="text-white" size={24} />
              </div>
              <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow flex-1">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">High School Diploma</h3>
                <p className="text-green-600 font-medium mb-2">Central High School • 2018 - 2022</p>
                <p className="text-gray-600 mb-4">GPA: 3.9/4.0 • Valedictorian</p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-medium text-gray-800 mb-2">Relevant Subjects:</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• AP Computer Science A</li>
                      <li>• AP Calculus BC</li>
                      <li>• AP Physics</li>
                      <li>• AP Statistics</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-800 mb-2">Activities:</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Robotics Club President</li>
                      <li>• Math Olympiad Team</li>
                      <li>• National Honor Society</li>
                      <li>• Volunteer Coding Instructor</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative flex items-start gap-6">
              <div className="flex-shrink-0 w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center shadow-lg">
                <ExternalLink className="text-white" size={24} />
              </div>
              <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow flex-1">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Certifications & Online Learning</h3>
                <div className="space-y-4">
                  <div className="border-l-4 border-blue-500 pl-4">
                    <h4 className="font-medium text-gray-800">AWS Certified Cloud Practitioner</h4>
                    <p className="text-sm text-gray-600">Amazon Web Services • 2024</p>
                  </div>
                  <div className="border-l-4 border-green-500 pl-4">
                    <h4 className="font-medium text-gray-800">Full Stack Web Development</h4>
                    <p className="text-sm text-gray-600">FreeCodeCamp • 2023</p>
                  </div>
                  <div className="border-l-4 border-purple-500 pl-4">
                    <h4 className="font-medium text-gray-800">Machine Learning Specialization</h4>
                    <p className="text-sm text-gray-600">Coursera (Stanford) • 2023</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const AboutPage = () => (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-50 py-12">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">About Me</h2>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h3 className="text-2xl font-semibold mb-4 text-gray-800">My Journey</h3>
              <p className="text-gray-600 leading-relaxed">
                I'm a passionate computer science student with a deep fascination for technology and its potential to solve real-world problems. My journey began in high school when I first discovered programming, and since then, I've been on an exciting path of continuous learning and growth.
              </p>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h3 className="text-2xl font-semibold mb-4 text-gray-800">What Drives Me</h3>
              <p className="text-gray-600 leading-relaxed">
                I believe in the power of technology to make a positive impact on society. Whether it's developing efficient algorithms, creating user-friendly applications, or exploring the frontiers of artificial intelligence, I'm always eager to tackle new challenges and push the boundaries of what's possible.
              </p>
            </div>
          </div>
          
          <div className="space-y-6">
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h3 className="text-2xl font-semibold mb-4 text-gray-800">Current Focus</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  Full-stack web development with React and Node.js
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                  Machine learning and AI applications
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
                  Cloud computing and DevOps practices
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-red-600 rounded-full"></div>
                  Open source contributions
                </li>
              </ul>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h3 className="text-2xl font-semibold mb-4 text-gray-800">Beyond Coding</h3>
              <p className="text-gray-600 leading-relaxed">
                When I'm not coding, you can find me playing chess, hiking in nature, or experimenting with new recipes. I believe that diverse experiences and interests contribute to better problem-solving skills and creativity in programming.
              </p>
            </div>
          </div>
        </div>
        
        <div className="mt-12 bg-white rounded-xl p-8 shadow-lg text-center">
          <h3 className="text-2xl font-semibold mb-4 text-gray-800">Fun Facts About Me</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-4 bg-blue-50 rounded-lg">
              <h4 className="font-medium text-blue-800 mb-2">🏆 Achievements</h4>
              <p className="text-sm text-blue-600">Won 3 hackathons and contributed to 15+ open source projects</p>
            </div>
            <div className="p-4 bg-green-50 rounded-lg">
              <h4 className="font-medium text-green-800 mb-2">☕ Productivity</h4>
              <p className="text-sm text-green-600">Powered by coffee and fueled by curiosity for learning new technologies</p>
            </div>
            <div className="p-4 bg-purple-50 rounded-lg">
              <h4 className="font-medium text-purple-800 mb-2">🎯 Goals</h4>
              <p className="text-sm text-purple-600">Aspiring to work in cutting-edge tech companies and contribute to innovative solutions</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const ContactPage = () => (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">Get In Touch</h2>
        
        <div className="grid md:grid-cols-2 gap-12">
          <div className="flex flex-col gap-8">
            <div className="bg-white rounded-xl p-6 shadow-lg flex-1">
              <h3 className="text-2xl font-semibold mb-6 text-gray-800">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <Mail className="text-blue-600" size={20} />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-800">Email</h4>
                    <p className="text-gray-600">jit@email.com</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center">
                    <Github className="text-gray-600" size={20} />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-800">GitHub</h4>
                    <p className="text-gray-600">github.com/JitRoy-dev</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <Linkedin className="text-blue-600" size={20} />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-800">LinkedIn</h4>
                    <p className="text-gray-600">linkedin.com/in/JitRoy</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-lg flex-1">
              <h3 className="text-xl font-semibold mb-4 text-gray-800">Let's Connect!</h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                I'm always open to discussing new opportunities, collaborating on interesting projects, or just having a conversation about technology. Feel free to reach out!
              </p>
              <div className="flex gap-4 mt-2">
                <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-2 hover:cursor-pointer">
                  <Github size={16} />
                  View GitHub
                </button>
                <button className="border border-blue-600 text-blue-600 px-6 py-2 rounded-lg hover:bg-blue-50 transition-colors flex items-center gap-2 hover:cursor-pointer">
                  <Linkedin size={16} />
                  LinkedIn
                </button>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-xl p-6 shadow-lg">
            <h3 className="text-2xl font-semibold mb-6 text-gray-800">Send a Message</h3>
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                <input
                  type="text"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                  placeholder="Your name"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                <input
                  type="email"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                  placeholder="your.email@example.com"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Subject</label>
                <input
                  type="text"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                  placeholder="What's this about?"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                <textarea
                  rows={6}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors resize-none"
                  placeholder="Tell me about your project or just say hello!"
                />
              </div>
              
              <button
                className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium shadow-lg hover:shadow-xl transform hover:scale-105 hover:cursor-pointer"
              >
                Send Message
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderContent = () => {
    switch (activeTab) {
      case 'home':
        return <HomePage />;
      case 'skills':
        return <SkillsPage />;
      case 'education':
        return <EducationPage />;
      case 'about':
        return <AboutPage />;
      case 'contact':
        return <ContactPage />;
      default:
        return <HomePage />;
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <nav className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-sm border-b border-gray-200 z-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="font-bold text-xl text-gray-800">Jit Roy</div>
            <div className="flex items-center gap-2">
              <NavButton
                id="home"
                icon={Home}
                label="Home"
                isActive={activeTab === 'home'}
                onClick={() => setActiveTab('home')}
              />
              <NavButton
                id="skills"
                icon={Code}
                label="Skills"
                isActive={activeTab === 'skills'}
                onClick={() => setActiveTab('skills')}
              />
              <NavButton
                id="education"
                icon={GraduationCap}
                label="Education"
                isActive={activeTab === 'education'}
                onClick={() => setActiveTab('education')}
              />
              <NavButton
                id="about"
                icon={User}
                label="About"
                isActive={activeTab === 'about'}
                onClick={() => setActiveTab('about')}
              />
              <NavButton
                id="contact"
                icon={Mail}
                label="Contact"
                isActive={activeTab === 'contact'}
                onClick={() => setActiveTab('contact')}
              />
            </div>
          </div>
        </div>
      </nav>
      
      <main className="pt-16">
        {renderContent()}
      </main>
    </div>
  );
};

export default Portfolio;
