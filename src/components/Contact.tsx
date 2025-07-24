import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Linkedin, Github, Send } from "lucide-react";

const Contact = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic would go here
    console.log("Form submitted");
  };

  return (
    <section id="contact" className="py-20 bg-section-bg">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-foreground">
            Let's Connect
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-semibold mb-6 text-foreground">Get In Touch</h3>
                <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                  I'm actively seeking opportunities to start my career in front-end development. 
                  I'd love to hear about potential roles, internships, or collaboration opportunities.
                </p>
              </div>
              
              <div className="space-y-6">
                <a 
                  href="mailto:your.email@example.com" 
                  className="flex items-center p-4 bg-card rounded-lg border border-border hover:shadow-md transition-shadow duration-300 group"
                >
                  <Mail className="w-6 h-6 text-accent mr-4 group-hover:scale-110 transition-transform duration-300" />
                  <div>
                    <div className="font-medium text-foreground">Email</div>
                    <div className="text-muted-foreground">your.email@example.com</div>
                  </div>
                </a>
                
                <a 
                  href="https://linkedin.com/in/yourprofile" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center p-4 bg-card rounded-lg border border-border hover:shadow-md transition-shadow duration-300 group"
                >
                  <Linkedin className="w-6 h-6 text-accent mr-4 group-hover:scale-110 transition-transform duration-300" />
                  <div>
                    <div className="font-medium text-foreground">LinkedIn</div>
                    <div className="text-muted-foreground">Connect with me professionally</div>
                  </div>
                </a>
                
                <a 
                  href="https://github.com/yourusername" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center p-4 bg-card rounded-lg border border-border hover:shadow-md transition-shadow duration-300 group"
                >
                  <Github className="w-6 h-6 text-accent mr-4 group-hover:scale-110 transition-transform duration-300" />
                  <div>
                    <div className="font-medium text-foreground">GitHub</div>
                    <div className="text-muted-foreground">View my code and projects</div>
                  </div>
                </a>
              </div>
            </div>
            
            {/* Contact Form */}
            <Card className="border border-border bg-card">
              <CardHeader>
                <CardTitle className="text-foreground">Send a Message</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <Label htmlFor="name">Name</Label>
                    <Input 
                      id="name" 
                      type="text" 
                      placeholder="Your Name" 
                      required 
                      className="mt-2"
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="email">Email</Label>
                    <Input 
                      id="email" 
                      type="email" 
                      placeholder="your.email@example.com" 
                      required 
                      className="mt-2"
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="subject">Subject</Label>
                    <Input 
                      id="subject" 
                      type="text" 
                      placeholder="Job Opportunity / Project Collaboration" 
                      required 
                      className="mt-2"
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="message">Message</Label>
                    <Textarea 
                      id="message" 
                      placeholder="Tell me about the opportunity or project..." 
                      rows={5} 
                      required 
                      className="mt-2"
                    />
                  </div>
                  
                  <Button type="submit" className="w-full">
                    <Send className="w-4 h-4 mr-2" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;