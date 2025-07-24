const Skills = () => {
  const skills = [
    {
      name: "HTML",
      description: "Semantic markup and accessibility best practices",
      level: 85
    },
    {
      name: "CSS",
      description: "Responsive design, Flexbox, Grid, and modern CSS features",
      level: 80
    },
    {
      name: "Python",
      description: "Object-oriented programming, data structures, and problem solving",
      level: 75
    }
  ];

  return (
    <section id="skills" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-foreground">
            Skills & Technologies
          </h2>
          
          <div className="grid md:grid-cols-1 gap-8">
            {skills.map((skill, index) => (
              <div 
                key={index} 
                className="bg-card p-8 rounded-lg border border-border shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-2xl font-semibold text-foreground">{skill.name}</h3>
                  <span className="text-lg font-medium text-accent">{skill.level}%</span>
                </div>
                
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {skill.description}
                </p>
                
                <div className="w-full bg-muted rounded-full h-3">
                  <div 
                    className="bg-accent h-3 rounded-full transition-all duration-1000 ease-out"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-16 text-center">
            <h3 className="text-2xl font-semibold mb-6 text-foreground">Currently Learning</h3>
            <div className="flex flex-wrap justify-center gap-4">
              {["JavaScript", "React", "TypeScript", "Node.js"].map((tech, index) => (
                <span 
                  key={index}
                  className="px-4 py-2 bg-muted text-muted-foreground rounded-full border border-border"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;