import React, { useEffect, useState, useRef } from 'react';
import TechLogo from './components/TechLogo';

interface Project {
  id: number;
  title: string;
  description: string;
  image_url: string;
  github_url: string;
  live_url: string;
}

function App() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [isVisible, setIsVisible] = useState(false);
  const [visibleSections, setVisibleSections] = useState(new Set());
  const [typedText, setTypedText] = useState('');
  const [showCursor, setShowCursor] = useState(true);
  const skillsRef = useRef<HTMLElement>(null);
  const projectsRef = useRef<HTMLElement>(null);
  const contactRef = useRef<HTMLElement>(null);  useEffect(() => {
    const apiUrl = import.meta.env.VITE_API_URL || 'http://localhost:5000';
    fetch(`${apiUrl}/api/projects`)
      .then((res) => res.json())
      .then((data) => setProjects(data))
      .catch((error) => {
        console.log('API not available, using static projects only');
        // Graceful fallback - your static projects will still show
      });
    
    // Trigger animations on load
    setTimeout(() => setIsVisible(true), 300);
    
    // Typing effect for title
    const title = "AI/ML Engineer";
    let currentIndex = 0;
    const typingInterval = setInterval(() => {
      if (currentIndex <= title.length) {
        setTypedText(title.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(typingInterval);
      }
    }, 150);

    // Cursor blinking effect
    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 500);

    // Intersection Observer for scroll animations
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleSections(prev => new Set(prev).add(entry.target.id));
          }
        });
      },
      { threshold: 0.1 }
    );

    // Observe sections
    setTimeout(() => {
      if (skillsRef.current) observer.observe(skillsRef.current);
      if (projectsRef.current) observer.observe(projectsRef.current);
      if (contactRef.current) observer.observe(contactRef.current);
    }, 100);

    return () => {
      clearInterval(typingInterval);
      clearInterval(cursorInterval);
      observer.disconnect();
    };
  }, []);return (    <div className="min-h-screen text-gray-800 relative overflow-hidden" style={{background: 'linear-gradient(135deg, #2C5F5E 0%, #1A3A3A 50%, #2C5F5E 100%)'}}>      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 left-10 w-20 h-20 bg-yellow-400 rounded-full opacity-10 animate-pulse"></div>
        <div className="absolute top-32 right-20 w-16 h-16 bg-orange-300 rounded-full opacity-20 animate-bounce" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-yellow-500 rounded-full opacity-15 animate-ping" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-40 right-1/3 w-24 h-24 bg-orange-400 rounded-full opacity-10 animate-pulse" style={{animationDelay: '3s'}}></div>
        
        {/* Floating particles */}
        <div className="absolute top-1/4 left-1/6 w-2 h-2 bg-yellow-300 rounded-full opacity-30 animate-ping" style={{animationDelay: '0.5s', animationDuration: '4s'}}></div>
        <div className="absolute top-3/4 right-1/4 w-3 h-3 bg-orange-400 rounded-full opacity-20 animate-bounce" style={{animationDelay: '2.5s', animationDuration: '6s'}}></div>
        <div className="absolute top-1/2 left-3/4 w-1 h-1 bg-yellow-500 rounded-full opacity-40 animate-pulse" style={{animationDelay: '4s', animationDuration: '3s'}}></div>
      </div>      {/* Header/Navigation */}
      <header className={`py-4 relative z-10 transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'}`} style={{backgroundColor: 'rgba(44, 95, 94, 0.95)', backdropFilter: 'blur(10px)'}}>        <div className="max-w-6xl mx-auto px-4 flex items-center justify-between">
          <TechLogo />
          <nav className="flex gap-8">
            <a href="#about" className="hover:text-yellow-300 transition-all duration-300 hover:scale-110 relative group" style={{color: '#D4B896'}}>
              About
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-yellow-300 transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="#skills" className="hover:text-yellow-300 transition-all duration-300 hover:scale-110 relative group" style={{color: '#D4B896'}}>
              Skills
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-yellow-300 transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="#projects" className="hover:text-yellow-300 transition-all duration-300 hover:scale-110 relative group" style={{color: '#D4B896'}}>
              Projects
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-yellow-300 transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="#contact" className="hover:text-yellow-300 transition-all duration-300 hover:scale-110 relative group" style={{color: '#D4B896'}}>
              Contact
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-yellow-300 transition-all duration-300 group-hover:w-full"></span>
            </a>
          </nav>
        </div>
      </header>      {/* Hero/About Section */}
      <section id="about" className={`flex flex-col items-center justify-center py-20 relative overflow-hidden transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`} style={{background: 'linear-gradient(135deg, #E8D5B7 0%, #D4B896 50%, #C4A373 100%)', transitionDelay: '200ms'}}>
        <div className="absolute inset-0 opacity-10" style={{background: 'url("data:image/svg+xml,%3Csvg width="40" height="40" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="%23000" fill-opacity="0.1"%3E%3Cpath d="m0 0h40v40h-40z"/%3E%3C/g%3E%3C/svg%3E")'}}></div>
        <div className="relative z-10">
          <img src="https://media.licdn.com/dms/image/v2/D4D03AQFxrivpIJ3u2Q/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1689748203542?e=1756339200&v=beta&t=EAyc6XfH4xQrWUa0WmMSPFUqxRM8nMXclUc12w6CIh8" alt="Profile" className={`w-36 h-36 rounded-full shadow-2xl mb-6 transition-all duration-1000 hover:scale-110 hover:rotate-3 ${isVisible ? 'scale-100 rotate-0' : 'scale-0 rotate-180'}`} style={{border: '4px solid #8B6914', transitionDelay: '400ms'}} />
          <h1 className={`text-5xl font-bold mb-4 transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`} style={{color: '#2C5F5E', transitionDelay: '600ms'}}>Mohammad Farhan Alam</h1>
          <h2 className={`text-2xl font-semibold mb-6 transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`} style={{color: '#8B6914', transitionDelay: '800ms'}}>
            {typedText}
            <span className={`${showCursor ? 'opacity-100' : 'opacity-0'} transition-opacity duration-100`}>|</span>
          </h2>          <p className={`text-center max-w-2xl mb-8 text-lg leading-relaxed transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`} style={{color: '#5D4E37', transitionDelay: '1000ms'}}>
            Passionate about building intelligent systems, deploying machine learning models, and solving real-world problems with data-driven solutions. Experienced in Python, TensorFlow, PyTorch, and cloud ML platforms.
          </p>
          <div className={`flex gap-6 mb-2 transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`} style={{transitionDelay: '1200ms'}}>
            <a href="mailto:mohammadfarhanalam09@gmail.com" className="flex items-center gap-2 hover:text-yellow-600 transition-all duration-300 hover:scale-110 text-lg" style={{color: '#8B6914'}}>
              <span className="animate-bounce">📧</span> Email
            </a>
            <a href="https://www.linkedin.com/in/farhanrhine" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-yellow-600 transition-all duration-300 hover:scale-110 text-lg" style={{color: '#8B6914'}}>
              <span className="animate-pulse">💼</span> LinkedIn
            </a>
            <a href="https://github.com/farhanrhine" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-yellow-600 transition-all duration-300 hover:scale-110 text-lg" style={{color: '#8B6914'}}>
              <span className="animate-spin" style={{animationDuration: '3s'}}>🐙</span> GitHub
            </a>
          </div>
        </div>
      </section>      {/* Skills Section */}      <section ref={skillsRef} id="skills" className={`py-16 transition-all duration-1000 ${visibleSections.has('skills') ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`} style={{background: 'linear-gradient(135deg, #F5F0E8 0%, #E8D5B7 100%)'}}>
        <div className="max-w-4xl mx-auto">
          <div className={`flex items-center justify-center gap-2 mb-8 transition-all duration-1000 ${visibleSections.has('skills') ? 'scale-100' : 'scale-75'}`} style={{transitionDelay: '200ms'}}>
            <span className="text-3xl animate-bounce">🛠️</span>
            <h2 className="text-3xl font-bold text-center" style={{color: '#2C5F5E'}}>Skills</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">            {/* Languages */}
            <div className={`p-6 rounded-xl shadow-2xl transition-all duration-1000 hover:scale-105 hover:rotate-1 card-hover glow-border ${visibleSections.has('skills') ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`} style={{background: 'linear-gradient(135deg, #E8D5B7 0%, #D4B896 100%)', border: '3px solid #8B6914', transitionDelay: '400ms'}}>
              <div className="flex items-center justify-center gap-3 mb-6">
                <h3 className="font-bold text-2xl" style={{color: '#2C5F5E'}}>Languages</h3>
              </div>
              <ul className="space-y-3">
                <li className="flex items-center justify-center gap-3 text-lg hover:scale-110 transition-transform float-animation" style={{color: '#5D4E37'}}>
                  <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg" alt="Python" className="w-6 h-6" />
                  Python
                </li>
              </ul>
            </div>

            {/* Libraries */}
            <div className={`p-6 rounded-xl shadow-2xl transition-all duration-1000 hover:scale-105 hover:rotate-1 card-hover glow-border ${visibleSections.has('skills') ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`} style={{background: 'linear-gradient(135deg, #E8D5B7 0%, #D4B896 100%)', border: '3px solid #8B6914', transitionDelay: '600ms'}}>
              <div className="flex items-center justify-center gap-3 mb-6">
                <h3 className="font-bold text-2xl" style={{color: '#2C5F5E'}}>Libraries</h3>
              </div>
              <ul className="space-y-3">
                <li className="flex items-center justify-center gap-3 text-lg hover:scale-110 transition-transform" style={{color: '#5D4E37'}}>
                  <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/numpy/numpy-original.svg" alt="NumPy" className="w-6 h-6 float-animation" />
                  NumPy
                </li>
                <li className="flex items-center justify-center gap-3 text-lg hover:scale-110 transition-transform" style={{color: '#5D4E37', animationDelay: '0.5s'}}>
                  <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/pandas/pandas-original.svg" alt="Pandas" className="w-6 h-6 float-animation" />
                  Pandas
                </li>
                <li className="flex items-center justify-center gap-3 text-lg hover:scale-110 transition-transform" style={{color: '#5D4E37', animationDelay: '1s'}}>
                  <img src="https://seaborn.pydata.org/_static/logo-mark-lightbg.svg" alt="Seaborn" className="w-6 h-6 float-animation" />
                  Seaborn
                </li>
                <li className="flex items-center justify-center gap-3 text-lg hover:scale-110 transition-transform" style={{color: '#5D4E37', animationDelay: '1.5s'}}>
                  <img src="https://matplotlib.org/_static/logo2_compressed.svg" alt="Matplotlib" className="w-6 h-6 float-animation" />
                  Matplotlib
                </li>
              </ul>
            </div>

            {/* Frameworks */}
            <div className={`p-6 rounded-xl shadow-2xl transition-all duration-1000 hover:scale-105 hover:rotate-1 card-hover glow-border ${visibleSections.has('skills') ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`} style={{background: 'linear-gradient(135deg, #E8D5B7 0%, #D4B896 100%)', border: '3px solid #8B6914', transitionDelay: '800ms'}}>
              <div className="flex items-center justify-center gap-3 mb-6">
                <h3 className="font-bold text-2xl" style={{color: '#2C5F5E'}}>Frameworks</h3>
              </div>
              <ul className="space-y-3">
                <li className="flex items-center justify-center gap-3 text-lg hover:scale-110 transition-transform" style={{color: '#5D4E37'}}>
                  <img src="https://upload.wikimedia.org/wikipedia/commons/0/05/Scikit_learn_logo_small.svg" alt="Scikit-learn" className="w-6 h-6 float-animation" />
                  Scikit-learn
                </li>
                <li className="flex items-center justify-center gap-3 text-lg hover:scale-110 transition-transform" style={{color: '#5D4E37', animationDelay: '0.5s'}}>
                  <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/tensorflow/tensorflow-original.svg" alt="TensorFlow" className="w-6 h-6 float-animation" />
                  TensorFlow
                </li>
              </ul>
            </div>

            {/* MLOps */}
            <div className={`p-6 rounded-xl shadow-2xl transition-all duration-1000 hover:scale-105 hover:rotate-1 card-hover glow-border ${visibleSections.has('skills') ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`} style={{background: 'linear-gradient(135deg, #E8D5B7 0%, #D4B896 100%)', border: '3px solid #8B6914', transitionDelay: '1000ms'}}>
              <div className="flex items-center justify-center gap-3 mb-6">
                <h3 className="font-bold text-2xl" style={{color: '#2C5F5E'}}>MLOps</h3>
              </div>
              <ul className="space-y-3">
                <li className="flex items-center justify-center gap-3 text-lg hover:scale-110 transition-transform" style={{color: '#5D4E37'}}>
                  <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/docker/docker-original.svg" alt="Docker" className="w-6 h-6 float-animation" />                  Docker
                </li>
                <li className="flex items-center justify-center gap-3 text-lg hover:scale-110 transition-transform" style={{color: '#5D4E37', animationDelay: '0.5s'}}>
                  <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/jenkins/jenkins-original.svg" alt="Jenkins" className="w-6 h-6 float-animation" />
                  Jenkins
                </li>
                <li className="flex items-center justify-center gap-3 text-lg hover:scale-110 transition-transform" style={{color: '#5D4E37', animationDelay: '1s'}}>
                  <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/github/github-original.svg" alt="GitHub" className="w-6 h-6 float-animation" />
                  GitHub
                </li>
                <li className="flex items-center justify-center gap-3 text-lg hover:scale-110 transition-transform" style={{color: '#5D4E37', animationDelay: '1.5s'}}>
                  <img src="https://svgmix.com/uploads/azure-patterns/c5bbb9-mlflow.svg" alt="MLflow" className="w-6 h-6 float-animation" />
                  MLflow
                </li>
                <li className="flex items-center justify-center gap-3 text-lg hover:scale-110 transition-transform" style={{color: '#5D4E37', animationDelay: '2s'}}>
                  <img src="https://www.astronomer.io/monogram/astronomer-monogram-RGB.svg" alt="Airflow" className="w-6 h-6 float-animation" />
                  Airflow
                </li>
              </ul>
            </div>

            {/* Databases */}
            <div className={`p-6 rounded-xl shadow-2xl transition-all duration-1000 hover:scale-105 hover:rotate-1 card-hover glow-border ${visibleSections.has('skills') ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`} style={{background: 'linear-gradient(135deg, #E8D5B7 0%, #D4B896 100%)', border: '3px solid #8B6914', transitionDelay: '1200ms'}}>
              <div className="flex items-center justify-center gap-3 mb-6">
                <h3 className="font-bold text-2xl" style={{color: '#2C5F5E'}}>Databases</h3>
              </div>
              <ul className="space-y-3">
                <li className="flex items-center justify-center gap-3 text-lg hover:scale-110 transition-transform" style={{color: '#5D4E37'}}>
                  <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original.svg" alt="MySQL" className="w-6 h-6 float-animation" />
                  MySQL
                </li>
              </ul>
            </div>

            {/* Gen AI */}
            <div className={`p-6 rounded-xl shadow-2xl transition-all duration-1000 hover:scale-105 hover:rotate-1 card-hover glow-border ${visibleSections.has('skills') ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`} style={{background: 'linear-gradient(135deg, #E8D5B7 0%, #D4B896 100%)', border: '3px solid #8B6914', transitionDelay: '1400ms'}}>
              <div className="flex items-center justify-center gap-3 mb-6">
                <h3 className="font-bold text-2xl" style={{color: '#2C5F5E'}}>Gen AI</h3>
              </div>
              <ul className="space-y-3">
                <li className="flex items-center justify-center gap-3 text-lg hover:scale-110 transition-transform" style={{color: '#5D4E37'}}>
                  <img src="https://files.brandlogos.net/svg/sbXzVXnLZr/langchain-logo-brandlogos.net_dexzv4edm.svg" alt="LangChain" className="w-6 h-6 float-animation" />
                  LangChain
                </li>
                <li className="flex items-center justify-center gap-3 text-lg hover:scale-110 transition-transform" style={{color: '#5D4E37', animationDelay: '0.5s'}}>
                  <span className="text-2xl animate-pulse float-animation">✨</span>
                  Prompt Engineering
                </li>
                <li className="flex items-center justify-center gap-3 text-lg hover:scale-110 transition-transform" style={{color: '#5D4E37', animationDelay: '1s'}}>
                  <span className="text-2xl animate-bounce float-animation">🔍</span>
                  RAG
                </li>
              </ul>
            </div></div>
        </div>
      </section>      {/* Projects Section */}
      <section ref={projectsRef} id="projects" className={`py-16 transition-all duration-1000 ${visibleSections.has('projects') ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`} style={{background: 'linear-gradient(135deg, #2C5F5E 0%, #1A3A3A 100%)'}}>
        <div className="max-w-5xl mx-auto">
          <div className={`flex items-center justify-center gap-3 mb-12 transition-all duration-1000 ${visibleSections.has('projects') ? 'scale-100' : 'scale-75'}`} style={{transitionDelay: '200ms'}}>
            <span className="text-4xl animate-bounce">💼</span>
            <h2 className="text-4xl font-bold text-center" style={{color: '#D4B896'}}>Projects</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Static Projects */}            <div className={`rounded-xl shadow-2xl p-8 flex flex-col transition-all duration-1000 hover:scale-105 hover:-rotate-1 hover:shadow-yellow-400/20 card-hover glow-border ${visibleSections.has('projects') ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`} style={{background: 'linear-gradient(135deg, #E8D5B7 0%, #D4B896 100%)', border: '3px solid #8B6914', transitionDelay: '400ms'}}>
              <div className="flex items-center gap-3 mb-4">
                <span className="text-2xl animate-bounce wiggle-hover">✈️</span>
                <h3 className="text-xl font-bold" style={{color: '#2C5F5E'}}>Airline Satisfaction Prediction (MLOps)</h3>
              </div>
              <p className="mb-4 leading-relaxed" style={{color: '#5D4E37'}}>Developed an end-to-end ML pipeline using Airflow, Docker, MLflow, DVC, Jenkins, GitHub, Flask, AWS.</p>
              <img src="https://images.unsplash.com/photo-1556075798-4825dfaaf498?w=400&h=200&fit=crop" alt="Airline Satisfaction Prediction" className="mb-4 rounded-lg shadow-md hover:scale-105 transition-transform" />              <div className="mt-auto flex gap-4">
                <a href="https://github.com/farhanrhine/END-TO-END-MLOPS-Project-" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-yellow-600 transition-colors font-semibold hover:scale-110 transform glow-animation" style={{color: '#8B6914'}}>
                  <span className="animate-pulse">🐙</span> GitHub
                </a>
                <a href="https://your-airline-mlops-app.streamlit.app" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-yellow-600 transition-colors font-semibold hover:scale-110 transform glow-animation" style={{color: '#8B6914'}}>
                  <span className="animate-spin wiggle-hover" style={{animationDuration: '2s'}}>🌐</span> Live Demo
                </a>
              </div>
            </div>
            <div className={`rounded-xl shadow-2xl p-8 flex flex-col transition-all duration-1000 hover:scale-105 hover:-rotate-1 hover:shadow-yellow-400/20 card-hover glow-border ${visibleSections.has('projects') ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`} style={{background: 'linear-gradient(135deg, #E8D5B7 0%, #D4B896 100%)', border: '3px solid #8B6914', transitionDelay: '600ms'}}>
              <div className="flex items-center gap-3 mb-4">
                <span className="text-2xl animate-spin wiggle-hover" style={{animationDuration: '3s'}}>🏅</span>
                <h3 className="text-xl font-bold" style={{color: '#2C5F5E'}}>Olympic Data Analysis</h3>
              </div>
              <p className="mb-4 leading-relaxed" style={{color: '#5D4E37'}}>Explored performance trends and medal analysis using pandas, matplotlib, seaborn.</p>
              <img src="https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=400&h=200&fit=crop" alt="Olympic Data Analysis" className="mb-4 rounded-lg shadow-md hover:scale-105 transition-transform" />              <div className="mt-auto flex gap-4">
                <a href="https://github.com/farhanrhine/Olympic-data-analysis" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-yellow-600 transition-colors font-semibold hover:scale-110 transform glow-animation" style={{color: '#8B6914'}}>
                  <span className="animate-pulse">🐙</span> GitHub
                </a>
                <a href="https://olympic-data-analysis-frhn.streamlit.app" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-yellow-600 transition-colors font-semibold hover:scale-110 transform glow-animation" style={{color: '#8B6914'}}>
                  <span className="animate-spin wiggle-hover" style={{animationDuration: '2s'}}>🌐</span> Live Demo
                </a>
              </div>
            </div>
            <div className={`rounded-xl shadow-2xl p-8 flex flex-col transition-all duration-1000 hover:scale-105 hover:-rotate-1 hover:shadow-yellow-400/20 card-hover glow-border ${visibleSections.has('projects') ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`} style={{background: 'linear-gradient(135deg, #E8D5B7 0%, #D4B896 100%)', border: '3px solid #8B6914', transitionDelay: '800ms'}}>
              <div className="flex items-center gap-3 mb-4">
                <span className="text-2xl animate-pulse wiggle-hover">🤖</span>
                <h3 className="text-xl font-bold" style={{color: '#2C5F5E'}}>RAG Chatbot with LangChain</h3>
              </div>
              <p className="mb-4 leading-relaxed" style={{color: '#5D4E37'}}>Created a chatbot using LangChain, HuggingFace API, Ollama, Vector Databases for contextual responses with documents.</p>
              <img src="https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=400&h=200&fit=crop" alt="RAG Chatbot with LangChain" className="mb-4 rounded-lg shadow-md hover:scale-105 transition-transform" />              <div className="mt-auto flex gap-4">
                <a href="https://github.com/farhanrhine/RAG-app-convert-any-document-into-text-and-generated-audio-" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-yellow-600 transition-colors font-semibold hover:scale-110 transform glow-animation" style={{color: '#8B6914'}}>
                  <span className="animate-pulse">🐙</span> GitHub
                </a>
                <a href="https://9jeugmsq7ncyyo7yl8rvvo.streamlit.app/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-yellow-600 transition-colors font-semibold hover:scale-110 transform glow-animation" style={{color: '#8B6914'}}>
                  <span className="animate-spin wiggle-hover" style={{animationDuration: '2s'}}>🌐</span> Live Demo
                </a>
              </div>
            </div>
            {/* Dynamic projects from backend */}            {projects.map((project, index) => (
              <div key={project.id} className={`rounded-xl shadow-2xl p-8 flex flex-col transition-all duration-1000 hover:scale-105 hover:-rotate-1 hover:shadow-yellow-400/20 card-hover glow-border ${visibleSections.has('projects') ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`} style={{background: 'linear-gradient(135deg, #E8D5B7 0%, #D4B896 100%)', border: '3px solid #8B6914', transitionDelay: `${1000 + (index * 200)}ms`}}>
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-2xl animate-bounce wiggle-hover">🚀</span>
                  <h3 className="text-xl font-bold" style={{color: '#2C5F5E'}}>{project.title}</h3>
                </div>
                <p className="mb-4 leading-relaxed" style={{color: '#5D4E37'}}>{project.description}</p>
                {project.image_url && (
                  <img src={project.image_url} alt={project.title} className="mb-4 rounded-lg shadow-md hover:scale-105 transition-transform" />
                )}
                <div className="mt-auto flex gap-4">
                  {project.github_url && (
                    <a href={project.github_url} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-yellow-600 transition-colors font-semibold hover:scale-110 transform glow-animation" style={{color: '#8B6914'}}>
                      <span className="animate-pulse">🐙</span> GitHub
                    </a>
                  )}
                  {project.live_url && (
                    <a href={project.live_url} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-yellow-600 transition-colors font-semibold hover:scale-110 transform glow-animation" style={{color: '#8B6914'}}>
                      <span className="animate-spin wiggle-hover" style={{animationDuration: '2s'}}>🌐</span> Live Demo
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>      {/* Contact Section */}
      <section ref={contactRef} id="contact" className={`py-16 transition-all duration-1000 ${visibleSections.has('contact') ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`} style={{background: 'linear-gradient(135deg, #E8D5B7 0%, #D4B896 100%)'}}>
        <div className="max-w-2xl mx-auto text-center">
          <div className={`flex items-center justify-center gap-3 mb-8 transition-all duration-1000 ${visibleSections.has('contact') ? 'scale-100' : 'scale-75'}`} style={{transitionDelay: '200ms'}}>
            <span className="text-4xl animate-bounce">📞</span>
            <h2 className="text-4xl font-bold" style={{color: '#2C5F5E'}}>Contact</h2>
          </div>
          <p className={`mb-8 text-xl leading-relaxed transition-all duration-1000 ${visibleSections.has('contact') ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`} style={{color: '#5D4E37', transitionDelay: '400ms'}}>Interested in working together or have a question? Reach out!</p>
          <a href="mailto:mohammadfarhanalam09@gmail.com" className={`inline-flex items-center gap-3 text-white px-8 py-4 rounded-xl hover:opacity-90 transition-all shadow-2xl text-lg font-semibold transform hover:scale-105 hover:shadow-yellow-400/30 ${visibleSections.has('contact') ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`} style={{backgroundColor: '#8B6914', transitionDelay: '600ms'}}>
            <span className="animate-pulse">📧</span> Email Me
          </a>        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t" style={{background: 'linear-gradient(135deg, #2C5F5E 0%, #1A3A3A 100%)', borderColor: 'rgba(212, 184, 150, 0.2)'}}>
        <div className="max-w-4xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <TechLogo />
          </div>
          <div className="flex flex-col md:flex-row items-center gap-4 text-sm" style={{color: '#B8A082'}}>
            <span>© 2025 Mohammad Farhan Alam. All rights reserved.</span>
            <div className="flex gap-4">
              <a href="https://github.com/farhanrhine" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-300 transition-colors duration-300 flex items-center gap-1">
                <span>🐙</span> GitHub
              </a>
              <a href="https://www.linkedin.com/in/farhanrhine" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-300 transition-colors duration-300 flex items-center gap-1">
                <span>💼</span> LinkedIn
              </a>
              <a href="mailto:mohammadfarhanalam09@gmail.com" className="hover:text-yellow-300 transition-colors duration-300 flex items-center gap-1">
                <span>📧</span> Email
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
