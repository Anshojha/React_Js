import Navbar from './components/navbar';
import HomeBanner from './components/home/homeBanner';
import OurServices from './components/Our Services/services';
import AboutUs from './components/AboutUs/about';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Projects from './components/Projects/projects';
import ProjectsList from '../data';
import { useEffect, useState } from 'react';

function App() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [selectedService, setSelectedService] = useState('');

  useEffect(() => {
    setSelectedProject(
      ProjectsList.filter(
        (project) =>
          project.type.toLowerCase() === selectedService.toLowerCase()
      )
    );
  }, [selectedService]);

  return (
    <>
      <div>
        <Navbar />
        <div>
          <BrowserRouter>
            <Routes>
              <Route
                path="/"
                element={<HomeBanner setSelectedService={setSelectedService} />}
              />
              <Route
                path="/services"
                element={
                  <OurServices setSelectedService={setSelectedService} />
                }
              />
              <Route path="/about" element={<AboutUs />} />
              <Route
                path="/projects"
                element={
                  <Projects
                    selectedProject={selectedProject}
                    selectedService={selectedService}
                  />
                }
              />
            </Routes>
          </BrowserRouter>
        </div>
      </div>
    </>
  );
}

export default App;
