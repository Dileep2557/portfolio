const About = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-foreground">
            About Me
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-lg text-muted-foreground leading-relaxed">
                I'm a junior front-end developer with a strong foundation in web technologies 
                and a passion for writing clean, maintainable code. My journey in programming 
                started with Python, where I learned the importance of readable code and 
                efficient problem-solving.
              </p>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                Transitioning to front-end development, I've embraced HTML and CSS to create 
                responsive, user-friendly interfaces. I believe in continuous learning and 
                staying up-to-date with modern development practices and tools.
              </p>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                I'm excited to contribute to a team environment where I can apply my skills, 
                learn from experienced developers, and help build exceptional user experiences.
              </p>
            </div>
            
            <div className="bg-card rounded-lg p-8 shadow-lg border border-border">
              <h3 className="text-2xl font-semibold mb-6 text-foreground">What I Bring</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-accent rounded-full mt-3 mr-4 flex-shrink-0"></div>
                  <span className="text-muted-foreground">Strong problem-solving skills and attention to detail</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-accent rounded-full mt-3 mr-4 flex-shrink-0"></div>
                  <span className="text-muted-foreground">Commitment to writing clean, readable code</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-accent rounded-full mt-3 mr-4 flex-shrink-0"></div>
                  <span className="text-muted-foreground">Eagerness to learn and adapt to new technologies</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-accent rounded-full mt-3 mr-4 flex-shrink-0"></div>
                  <span className="text-muted-foreground">Reliable team player with strong communication skills</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;