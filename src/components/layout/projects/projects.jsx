import React from 'react';
import Title from '../../ui/title/title';
import projects from '/src/mocks/projects';
import './style.css';

function Projects() {
  return (
    <section id="projects" className="projects">
      <div className="container">
        <Title number="03">мой опыт</Title>
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

            {/* <div class="project-desc">Проект: Система управления мобильным приложением «Пайванд Кошелёк»</div>
            <div class="role-detail">Роль: Full-stack .NET Developer</div>

            <div class="achievements-label">Ключевые достижения:</div>

            <div class="achievement-item">Миграция проекта с .NET 6 на .NET 8 с оптимизацией архитектуры.</div>
            <div class="achievement-item">Разработка модуля отчётности с фильтрацией данных и экспортом в XML, Excel и CSV.</div>
            <div class="achievement-item">Реализация полноценного модуля идентификации клиентов (frontend + backend).</div>
            <div class="achievement-item">Настройка системы администрирования: управление ролями, правами доступа, лимитами переводов, комиссиями и кешбэком.</div>
            <div class="achievement-item">Работа в команде с использованием Git / GitHub.</div> */}

          </div>

          {/* <hr class="divider"></hr> */}

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