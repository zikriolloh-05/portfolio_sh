import './style.css'

function TechSection() {
    return (
        <>
            <section className="tech-section">
                <h2 className="tech-title">Что мы делаем</h2>
                <p className="tech-subtitle">Мы создаём проекты с использованием современных технологий</p>

                <div className="tech-grid">
                    <div className="tech-card">
                        <span className="tech-label">Backend</span>
                        <span className="tech-name">C#</span>
                        <span className="tech-desc">
                            ASP.NET Core, Entity Framework, REST API, SQL Server
                        </span>
                    </div>

                    <div className="tech-card">
                        <span className="tech-label">Frontend</span>
                        <span className="tech-name">JS</span>
                        <span className="tech-desc">
                            React, JavaScript, HTML5, CSS3, адаптивная вёрстка
                        </span>
                    </div>

                    <div className="tech-card">
                        <span className="tech-label">Mobile</span>
                        <span className="tech-name">Flutter</span>
                        <span className="tech-desc">
                            Dart, Flutter, iOS и Android, Material Design
                        </span>
                    </div>
                </div>
            </section>
        </>
    )
}
export default TechSection;