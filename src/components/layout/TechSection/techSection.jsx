import './style.css'

function TechSection() {
    return (
        <>
            <section class="tech-section">
                <h2 class="tech-title">Что мы делаем</h2>
                <p class="tech-subtitle">Мы создаём проекты с использованием современных технологий</p>

                <div class="tech-grid">
                    <div class="tech-card">
                        <span class="tech-label">Backend</span>
                        <span class="tech-name">C#</span>
                    </div>

                    <div class="tech-card">
                        <span class="tech-label">Frontend</span>
                        <span class="tech-name">JS</span>
                    </div>

                    <div class="tech-card">
                        <span class="tech-label">Mobile</span>
                        <span class="tech-name">Flutter</span>
                    </div>
                </div>
            </section>
        </>
    )
}
export default TechSection;