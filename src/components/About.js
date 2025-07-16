import useAnimateSkills from "../hooks/useAnimateSkills";

function About() {
    useAnimateSkills();
  return (
    <section className="about">
      <h1 className = "aname" >About Me</h1>
      <p className="atagline">
        I specialize in <strong>React.js</strong>, <strong>HTML</strong>, <strong>CSS</strong>, and <strong>JavaScript</strong>. I’ve also worked with <strong>Tailwind CSS</strong> for responsive designs and have experience connecting frontend to backend using <strong>Node.js</strong> and <strong>MongoDB</strong>.
      </p>
      <p className="atagline">
        I'm constantly learning and exploring new tools like <strong>Firebase</strong>, and basic <strong>Python for Machine Learning</strong>. I enjoy working on both personal and team-based projects that challenge me to grow.
      </p>

      <p className="atagline">
        Outside of tech, I’m a creative soul who performs in dance, drama, and singing, writes poems, and enjoys photography and crafting. My diverse interests help me bring unique perspective and energy to every project I work on.
      </p>

    <div className="skills">
        <h2>Tech Skills</h2>
            <div className="skills-grid">
  <div className="skill-bar" data-width="85%">
    <div className="fill"></div>
    <span className="label">Python</span>
  </div>

  <div className="skill-bar" data-width="90%">
    <div className="fill"></div>
    <span className="label">HTML</span>
  </div>

  <div className="skill-bar" data-width="80%">
    <div className="fill"></div>
    <span className="label">CSS</span>
  </div>

  <div className="skill-bar" data-width="75%">
    <div className="fill"></div>
    <span className="label">ReactJS</span>
  </div>

  <div className="skill-bar" data-width="60%">
    <div className="fill"></div>
    <span className="label">Java</span>
  </div>

  <div className="skill-bar" data-width="60%">
    <div className="fill"></div>
    <span className="label">Javascript</span>
  </div>

  <div className="skill-bar" data-width="80%">
    <div className="fill"></div>
    <span className="label">SQL</span>
  </div>

  <div className="skill-bar" data-width="70%">
    <div className="fill"></div>
    <span className="label">C</span>
  </div>

</div>
 </div>

 

    </section>
  );
}
export default About;
