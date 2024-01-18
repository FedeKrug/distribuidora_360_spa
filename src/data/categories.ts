export type CategoryType = {
    title: string;
    img?: string;
    description: string;
    action?: () => void;
}

export const categories: CategoryType[] = [
    {
        title: "Herramientas",
        description: "Descubra herramientas de calidad superior para cada tarea. Desde destornilladores precisos hasta máquinas potentes, optimice su trabajo con instrumentos confiables y duraderos.",
        img: "../../public/images/herramientas.jpg",
        action: () => console.log("title")

    },
    {
        title: "Plomería",
        description: "Soluciones expertas para sistemas de tuberías. Desde reparaciones simples hasta instalaciones complejas, ofrecemos servicios y productos confiables para asegurar un rendimiento eficiente y duradero.",
        img: "../../public/images/plomeria.jpg",
        action: () => console.log("title")
    },
    {
        title: "Albañilería",
        description: "Expertos en construcción y reparación. Ofrecemos servicios y materiales de alta calidad para proyectos residenciales y comerciales. Garantizamos resultados duraderos y estéticamente impecables.",
        img: "../../public/images/albañileria.jpg",
        action: () => console.log("title")
    },
    {
        title: "Sujeciones",
        description: "Ofrecemos tuercas, tornillos, clavos y más. Materiales de calidad para garantizar conexiones seguras y duraderas.",
        img: "../../public/images/sujeciones.webp",
        action: () => console.log("title")
    },
    {
        title: "Jardinería",
        description: "Explore nuestro universo de verdor. Ofrecemos herramientas, plantas y asesoramiento experto para crear y mantener jardines exuberantes. Transforme su espacio al aire libre con productos confiables y conocimientos especializados.",
        img: "../../public/images/jardineria.jpg",
        action: () => console.log("title")
    },
    {
        title: "Todos",
        description: "Descubra soluciones integrales para su hogar. Desde herramientas de calidad hasta expertos en plomería y jardinería, ofrecemos productos y servicios confiables para todas sus necesidades.",
        img: "../../public/images/varios.jpg",
        action: () => console.log("title")
    },


]