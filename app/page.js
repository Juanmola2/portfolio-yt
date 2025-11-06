import Header from "./components/Header";
import ExperienceItem from "./components/ExperienceItem";
import ProjectItem from "./components/ProjectItem";

export default function Home() {
    // Data for work experiences (MODIFICADO: He movido la formación a su propio array)
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
        // {
        //     title: "Analista en Prácticas",
        //     company: "KPMG",
        //     period: "Mar. 2023 - Ago. 2023",
        //     description:
        //         "Colaboración con el departamento de Estrategia (Technology Enablement) participando en proyectos de desarrollo y transformación digital para clientes corporativos. Esta experiencia me permitió adquirir una visión global del ciclo de vida de proyectos tecnológicos en entornos corporativos, decidiendo posteriormente orientar mi carrera hacia equipos más pequeños, donde pudiera tener mayor impacto directo en el desarrollo.",
        //     technologies: [
        //         "Quality Assurance",
        //         "Documentación Técnica",
        //         "Presentaciones Ejecutivas",
        //         "Consultoría Tecnológica",
        //     ],
        //     image: "/company_logo/kpmg.png",
        // },
    ];

    // --- NUEVO: Datos para Formación y Titulaciones ---
    const qualifications = [
        {
            title: "Ingeniería en Electrónica Industrial y Automática", // Corregido desde el original
            institution: "Universidad de Vigo (UVigo)", // Renombrado de 'company'
            period: "Sept. 2023 - Presente", // "PResente" del original
            description: "Cursando doble grado, enfocado en sistemas de control y automatización.", // Tu breve descripción
            image:  "/company_logo/Uvigo.jpg",
        },
        {
            title: "Ingeniería Mecánica", // Corregido desde el original
            institution: "Universidad de Vigo (UVigo)", // Renombrado de 'company'
            period: "Sept. 2023 - Presente",
            description: "Cursando doble grado, con especial interés en diseño y dinámica vehicular.", // Tu breve descripción
            image: "/company_logo/Uvigo.jpg",
        },
    ];

    // Sample project data
    const projects = [
        {
            image: "/projects_logo/blockheadapp.png",
            domain: "https://b-portfolio-alpha.vercel.app/#caracteristicas",
        },
        // {
        //     image: "/projects_logo/blockheadapp.png",
        //     domain: "https://taskmanager.goyocancio.es",
        // },
        // {
        //     image: "/projects_logo/blockheadapp.png",
        //     domain: "https://travelblog.goyocancio.es",
        // },
        // {
        //     image: "/projects_logo/blockheadapp.png",
        //     domain: "https://weatherapp.goyocancio.es",
        // },
        // {
        //     image: "/projects_logo/blockheadapp.png",
        //     domain: "https://portfolio.goyocancio.es",
        // },
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
                      t href="#contact" 
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

            g        <div className="space-y-8">
                        {experiences.map((experience, index) => (
                            <ExperienceItem
                                key={index}
                                experience={experience}
                            />
                        ))}
                    </div>
                </div>
            </section>
            
            {/* --- INICIO DE LA NUEVA SECCIÓN DE FORMACIÓN --- */}
            <section id="qualifications" className="py-12 bg-gray-50"> {/* Fondo gris claro para diferenciar */}
                <div className="container mx-auto py-12 px-10">
                    <div className="text-center mb-10">
                        <h2 className="text-2xl md:text-4xl font-bold">
                            Formación y Titulaciones
                        </h2>
                    </div>

                    {/* Contenedor de los Widgets */}
                    <div className="flex flex-wrap gap-8 justify-center">
                        {/* Mapeamos el nuevo array 'qualifications' */}
                        {qualifications.map((qualification, index) => (
                            <div 
                                key={index} 
                                // Este es el "widget" o tarjeta
                                className="bg-white rounded-lg shadow-lg overflow-hidden w-full max-w-xs md:max-w-sm"
                            >
                                {/* Contenedor de la Imagen/Foto */}
                                <div className="h-48 bg-white flex items-center justify-center p-6">
                                    <img 
                                        src={qualification.image} 
                                        alt={qualification.title} 
                                        className="max-h-full max-w-full object-contain" // 'object-contain' para que el logo se vea bien
                                    />
                                </div>
                                {/* Contenedor del Contenido */}
                                <div className="p-5">
                                    <h3 className="text-lg md:text-xl font-bold mb-1">{qualification.title}</h3>
                                    <p className="text-sm text-gray-500 mb-2">{qualification.institution}</p>
                                    <p className="text-sm text-gray-700">{qualification.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            {/* --- FIN DE LA NUEVA SECCIÓN --- */}

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
          _             desempeñando, he desarrollado varios proyectos
                        personales tanto para probarme a mí mismo y ver de qué
                        soy capaz, como para aplicar mis conocimientos y
                        aprender nuevas tecnologías.
                    </p>
                    <p className="text-xs md:text-base mb-8  text-justify">
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
                        
                        {/* Reemplaza "https" con tu enlace real */}
                        <a 
                            href="https" 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="flex items-center gap-2 bg-gray-200 hover:bg-gray-300 px-4 py-2 rounded-lg transition-colors text-sm font-medium"
                        >
                            <img src="/social/linkedin.svg" alt="LinkedIn" className="w-5 h-5" />
AN                        LinkedIn
                        </a>
                        
                        {/* Reemplaza "https" con tu enlace real */}
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
                  _     >
                            <img src="/social/Gmail1.png" alt="Gmail" className="w-8 h-8" />
                            Gmail
                _       </a>
                    </div>
                    {/* --- Alternativa para copiar email --- */}
_                   <p className="mt-8 text-sm text-gray-600">
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