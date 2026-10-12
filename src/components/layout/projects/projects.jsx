import React from 'react';
import Title from '../../ui/title/title';
import projects from '/src/mocks/projects';
import './style.css';


function Projects() {
  return (
    <section id="projects" className="projects">
      <div className="container">
        <Title className='aboutName' number="03">мой опыт</Title>
        <div class="projects-grid">
          <div class="project-card">
            <h3>Payvand.tj</h3>

            <div class="meta-row">
              <span class="meta-location">.NET-разработчик · Полный рабочий день</span>
            </div>

            {/* <div class="role-row"> */}
              <span class="meta-location">Душанбе, Таджикистан · Работа в офисе</span>
            {/* </div> */}

            <div class="date-range">янв. 2024 – дек. 2025</div>

          </div>

          <div class="project-card">
            <h3>Finca.tj</h3>

            <div class="role-row">
              <span class="meta-location">.NET-разработчик · Полный рабочий день</span>
            </div>
            <div class="meta-location">Душанбе, Таджикистан · Работа в офисе</div>

            <div class="date-range">янв. 2026 – настоящее время</div>

          </div>

        </div>
      </div>
    </section>
  );
}

export default Projects;