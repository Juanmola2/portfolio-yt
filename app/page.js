import Header from "./components/Header";
import ExperienceItem from "./components/ExperienceItem";
import ProjectItem from "./components/ProjectItem";

export default function Home() {
    // Data for work experiences
    const experiences = [
        {
            title: "Member of Dynamics",
            company: "UVigo MotorSport",
            period: "Oct. 2025 - Presente",
            description: "",
            // "Desarrollo de una aplicación web para la generación de medidas sintéticas de satélites en el marco de un proyecto NEOTEC financiado por el CDTI. Responsable de varias tareas de preparación y procesamiento de datos satelitales críticos para la observación terrestre, implementando soluciones técnicas innovadoras que optimizan la calidad y utilidad de la información geoespacial obtenida.",
            projects: [
                "Modelation and Construction of suspension and breakes.",
                "Preparacion de cadenas de procesado para datos geoespaciales (S5P, OLCI...)",
            ],
            technologies: ["Python", "CatiaV5", "...", "..."],
            image: "/company_logo/UMS.jpg",
        },
        
        {
            title: "Industrial Electronics and Automation Engineering",
            company: "Universidad de Vigo (UVigo)",
            period: "Sept. 2023 - PResente",
            description: "",
            projects: [
                "Sistema de prevencion de roturas en cintas transportadoras",
                "Prototipo contador de visitantes para eventos en espacios abiertos",
            ],
            technologies: [
                "Python Avanzado",
                "Qt",
                "IoT",
                // "Inteligencia Artificial",
                // "Ciencia de Datos",
                "Machine Learning",
            ],
            image:  "/company_logo/Uvigo.jpg",
        },
        {
            title: "Mechanical Engineer",
            company: "Universidad de Vigo (UVigo)",
            period: "Sept. 2023 - Presente",
            description: "",
            projects: [
                "Sistema de prevencion de roturas en cintas transportadoras",
                "Prototipo contador de visitantes para eventos en espacios abiertos",
            ],
            technologies: [
                "SolidWorks",
                "...",
                "....",
                // "Inteligencia Artificial",
                // "Ciencia de Datos",
                "...",
            ],
            image: "/company_logo/Uvigo.jpg",
        },
    ];

    // Sample project data
    const projects = [
        {
            image: "/projects_logo/blockheadapp.png",
            domain: "https://proyectos-pf.vercel.app",
        },
        {
            image: "/projects_logo/Titulos_Portfolio.png",
            domain: "https://titulos-portfolio.vercel.app",
        },

    ];

    return (
        <div className="flex flex-col max-w-screen-md mx-auto">
            <Header />
            {/* About Me Section */}
        <section id="about" className="py-12 px-10">
            <div className="container mx-auto">
                <div className="text-center mb-6">
                    <h2 className="text-2xl md:text-4xl font-bold">
                        Sobre Mí
                    </h2>
                </div>
                <p className="text-xs md:text-base text-justify mb-4">
                    ¡Hola! Soy Juan Rodríguez Valverde. Soy un estudiante de 
                    Ingeniería Mecánica y de Electrónica Industrial en la 
                    Universidad de Vigo.
                </p>
                <p className="text-xs md:text-base text-justify">
                    Actualmente soy miembro del equipo UVigo MotorSport, donde
                    me centro en la dinámica del vehículo, especializándome en 
                    el modelado y construcción de la suspensión y los frenos. 
                    Me apasiona aplicar mis conocimientos para resolver problemas
                    complejos y la innovación en el sector de la automoción.
                </p>

                {/* Botón de Contacto */}
                <div className="text-center mt-8">
                    <a 
                        href="#contact" 
                        className="bg-blue-600 text-white text-base font-bold py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors"
                    >
                        ¡Hablemos!
                    </a>
                </div>
            </div>
        </section>

            {/* Work Experience Section*/}
            <section id="experience">
                <div className="container mx-auto py-12">
                    <div className="text-center">
                        <h2 className="text-2xl md:text-4xl font-bold">
                            Experiencia Laboral
                        </h2>
                    </div>

                    <div className="space-y-8">
                        {experiences.map((experience, index) => (
                            <ExperienceItem
                                key={index}
                                experience={experience}
                            />
                        ))}
                    </div>
                </div>
            </section>
            
            {/* Projects Section */}
            <section id="projects">
                <div className="container mx-auto py-12 px-10">
                    <div className="text-center mb-6">
                        <h2 className="text-2xl md:text-4xl font-bold">
                            Proyectos Personales
                        </h2>
                    </div>

                    <p className="text-xs md:text-base mb-2 text-justify">
                        De manera paralela a los trabajos que he ido
                        desempeñando, he desarrollado varios proyectos
                        personales tanto para probarme a mí mismo y ver de qué
                        soy capaz, como para aplicar mis conocimientos y
                        aprender nuevas tecnologías.
                    </p>
                    <p className="text-xs md:text-base mb-8  text-justify">
                        Aquí puedes ver algunos de ellos:
                    </p>

                    {/* Projects row */}
                    <div className="flex flex-wrap gap-6 md:gap-8 justify-center">
                        {/* Restore the map */}
                        {projects.map((project, index) => {
                            if (!project || !project.image || !project.domain) {
                                return null; // Keep the check and null return
                            }
                            return (
                                <div key={index} className="">
                                    <ProjectItem project={project} />
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>
            


            {/* Contact Section */}
            <section id="contact" className="py-20 px-10">
                <div className="container mx-auto text-center">
                    <h2 className="text-2xl md:text-4xl font-bold mb-6">
                        Contacto
                    </h2>
                    <p className="text-xs md:text-base mb-8">
                        ¿Interesado en mi perfil? ¡No dudes en contactarme!
                    </p>
                    
                    {/* --- ENLACES DE CONTACTO --- */}
                    <div className="flex justify-center gap-6">
                        
                        {/* Reemplaza "TU_URL_DE_LINKEDIN" con tu enlace real */}
                        <a 
                            href="https" 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="flex items-center gap-2 bg-gray-200 hover:bg-gray-300 px-4 py-2 rounded-lg transition-colors text-sm font-medium"
                        >
                            <img src="/social/linkedin.svg" alt="LinkedIn" className="w-5 h-5" />
                            LinkedIn
                        </a>
                        
                        {/* Reemplaza "TU_URL_DE_GITHUB" con tu enlace real */}
                        <a 
                            href="https" 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="flex items-center gap-2 bg-gray-200 hover:bg-gray-300 px-4 py-2 rounded-lg transition-colors text-sm font-medium"
                        >
                            <img src="/social/github.svg" alt="GitHub" className="w-5 h-5" />
                            GitHub
                        </a>

                        {/* Enlace de Email con el logo de Gmail (imagen) */}
                        <a 
                            href="https://mail.google.com/mail/?view=cm&fs=1&to=juan.rguez.valverde@gmail.com&su=Contacto%20desde%20tu%20Portfolio&body=¡Hola%20Juan!%20Te%20escribo%20para..." 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="flex items-center gap-2 bg-gray-200 hover:bg-gray-300 px-4 py-2 rounded-lg transition-colors text-sm font-medium"
                        >
                            <img src="/social/Gmail1.png" alt="Gmail" className="w-8 h-8" />
                            Gmail
                        </a>
                    </div>
                    {/* --- Alternativa para copiar email --- */}
                    <p className="mt-8 text-sm text-gray-600">
                        O si lo prefieres, copia mi email:
                    </p>
                    <p className="text-base font-medium text-gray-900 mt-1">
                        juan.rguez.valverde@gmail.com
                    </p>
                </div>
            </section>

            <footer className="text-center text-xs md:text-sm text-gray-500">
                © {new Date().getFullYear()} Juan Rodríguez Valverde. Todos los derechos
                reservados.
            </footer>
        </div>
    );
}
