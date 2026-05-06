import { Mail, Linkedin, Github } from 'lucide-react'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Button } from '@/components/ui/Button'
import { personal } from '@/lib/data'

export function Contact() {
  return (
    <section id="contact" className="section-padding bg-[--surface-1]">
      <div className="max-w-2xl mx-auto px-6 text-center">
        <SectionHeading
          title="Get In Touch"
          subtitle="Open to remote opportunities and interesting projects worldwide."
          centered
        />
        <div className="flex flex-wrap gap-4 justify-center">
          <Button variant="primary" as="a" href={`mailto:${personal.email}`}>
            <Mail size={16} />
            Send Email
          </Button>
          <Button variant="ghost" as="a" href={personal.linkedin} target="_blank" rel="noopener noreferrer">
            <Linkedin size={16} />
            LinkedIn
          </Button>
          <Button variant="ghost" as="a" href={personal.github} target="_blank" rel="noopener noreferrer">
            <Github size={16} />
            GitHub
          </Button>
        </div>
      </div>
    </section>
  )
}
