import { Github, Linkedin } from 'lucide-react'; 

export default function Footer() {
  return (
    <footer className='bg-gray-800 text-white py-4'>
      <div className='container mx-auto flex flex-col md:flex-row justify-between items-center px-4'>
        {/* Sección de iconos */}
        <div className='flex space-x-4 mb-2 md:mb-0'>
          <a href='https://github.com/Walter-Britos1/' target='_blank' rel='noopener noreferrer'>
            <Github className='w-6 h-6 hover:text-gray-400' />
          </a>
          <a href='https://linkedin.com/in/walter-britos' target='_blank' rel='noopener noreferrer'>
            <Linkedin className='w-6 h-6 hover:text-gray-400' />
          </a>
        </div>

        {/* Sección de texto */}
        <div className='text-sm text-center md:text-left'>
          &copy; {new Date().getFullYear()} Ticket Creator App. Todos los derechos reservados.
        </div>
      </div>
    </footer>
  );
}
