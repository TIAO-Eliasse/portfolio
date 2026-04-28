import './App.css'
import { cvData } from './data/cvData'

function App() {
  return (
    <div className="container">
      <header>
        <h1>{cvData.name}</h1>
        <p>{cvData.title}</p>
        <div className="contact-info">
          <span>📍 {cvData.location}</span>
          <span>📞 {cvData.phone}</span>
          <span>📧 <a href={`mailto:${cvData.email}`}>{cvData.email}</a></span>
          <span>🔗 <a href={cvData.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a></span>
          <span>💻 <a href={cvData.github} target="_blank" rel="noopener noreferrer">GitHub</a></span>
        </div>
      </header>

      <section id="about">
        <h2>About Me</h2>
        <p>{cvData.summary}</p>
      </section>

      <section id="education">
        <h2>Education</h2>
        {cvData.education.map((edu, index) => (
          <div key={index} className="item">
            <div className="item-header">
              <h3>{edu.degree}</h3>
              <span className="period">{edu.period}</span>
            </div>
            <div className="institution">{edu.institution}, {edu.location}</div>
            <ul>
              {edu.details.map((detail, idx) => (
                <li key={idx}>{detail}</li>
              ))}
            </ul>
          </div>
        ))}
      </section>

      <section id="publications">
        <h2>Publications</h2>
        {cvData.publications.map((pub, index) => (
          <div key={index} className="item">
            <div className="item-header">
              <h3>{pub.title}</h3>
              <span className="period">{pub.year}</span>
            </div>
            <div className="authors">{pub.authors}</div>
            <div className="status">{pub.status}</div>
            <div className="results">{pub.results}</div>
            {pub.code && (
              <div className="code">
                Code: <a href={pub.code} target="_blank" rel="noopener noreferrer">{pub.code}</a>
              </div>
            )}
          </div>
        ))}
      </section>

      <section id="projects">
        <h2>Research & Collaborative Projects</h2>
        {cvData.projects.map((proj, index) => (
          <div key={index} className="item">
            <div className="item-header">
              <h3>{proj.title}</h3>
              <span className="period">{proj.period}</span>
            </div>
            {proj.institution && <div className="institution">{proj.institution}</div>}
            {proj.type && <div className="type">{proj.type}</div>}
            <ul>
              {proj.details.map((detail, idx) => (
                <li key={idx}>{detail}</li>
              ))}
            </ul>
          </div>
        ))}
      </section>

      <section id="experience">
        <h2>Professional Experience</h2>
        {cvData.experience.map((exp, index) => (
          <div key={index} className="item">
            <div className="item-header">
              <h3>{exp.role}</h3>
              <span className="period">{exp.period}</span>
            </div>
            <div className="company">{exp.company}, {exp.location}</div>
            <ul>
              {exp.details.map((detail, idx) => (
                <li key={idx}>{detail}</li>
              ))}
            </ul>
          </div>
        ))}
      </section>

      <section id="skills">
        <h2>Technical Skills & Expertise</h2>
        <div className="skills-grid">
          <div className="skill-category">
            <h4>Artificial Intelligence</h4>
            <div className="skill-tags">
              {cvData.skills.artificialIntelligence.map((skill, idx) => (
                <span key={idx} className="skill-tag">{skill}</span>
              ))}
            </div>
          </div>
          <div className="skill-category">
            <h4>Statistics & Causal Inference</h4>
            <div className="skill-tags">
              {cvData.skills.statisticsCausalInference.map((skill, idx) => (
                <span key={idx} className="skill-tag">{skill}</span>
              ))}
            </div>
          </div>
          <div className="skill-category">
            <h4>Programming & Tools</h4>
            <div className="skill-tags">
              {cvData.skills.programmingTools.map((skill, idx) => (
                <span key={idx} className="skill-tag">{skill}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="honors">
        <h2>Honors, Awards & Scholarships</h2>
        {cvData.honors.map((honor, index) => (
          <div key={index} className="item">
            <div className="item-header">
              <h3>{honor.title}</h3>
              <span className="period">{honor.period}</span>
            </div>
            {honor.institution && <div className="institution">{honor.institution}</div>}
            <p>{honor.description}</p>
          </div>
        ))}
      </section>

      <section id="certifications">
        <h2>Certifications</h2>
        <ul>
          {cvData.certifications.map((cert, index) => (
            <li key={index}>{cert}</li>
          ))}
        </ul>
      </section>

      <footer>
        <p>&copy; {new Date().getFullYear()} {cvData.name}. All rights reserved.</p>
      </footer>
    </div>
  )
}

export default App
