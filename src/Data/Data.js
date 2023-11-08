import {
  FaPython,
  FaHtml5,
  FaCss3,
  FaJava,
  FaReact,
  FaJs,
  FaUnity,
  FaAndroid,
  FaDocker,
  FaLaptopMedical,
} from "react-icons/fa";

import { SiMysql } from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";
export const codeXp = [
  {
    icon: FaPython,
    heading: "Python",
    color: "#ffd742",
  },

  {
    icon: TbBrandNextjs,
    heading: "Next Js",
    color: "#000000",
  },
  {
    icon: FaReact,
    heading: "React JS",
    color: "#50BBD7",
  },
  {
    icon: SiMysql,
    heading: "MySQL",
    color: "#1e98eb",
  },

  
  {
    icon: FaHtml5,
    heading: "HTML",
    color: "#FD7E14",
  },
  {
    icon: FaCss3,
    heading: "CSS",
    color: "#15AABF",
  },
  {
    icon: FaJs,
    heading: "JavaScript",
    color: "#EFD81D",
  },
  {
    icon: FaAndroid,
    heading: "Android Studio",
    color: "#A4C639",
  },
];

export const projects = [
  {
    description:
      "El proyecto es crear un dashboard web para la gestión de entrenadores y sus certificaciones, permitiendo el registro de los entrenadores y la administración de sus respectivas certificaciones.",
    image: require("../assets/images/empowering-project.png"),
    demo: "https://trainers.certiprof.com/trainers",
  },
  {
    description:
      "Modelo de inteligencia artificial, con capacidad de determinar las letras del abecedario, a través del lenguaje de señas.",
    image: require("../assets/images/sign.png"),
    demo: "https://github.com/samilkar17/DeepLearning_signLanguage/blob/main/lenguaje_de_se%C3%B1as.ipynb",
  },
  {
    description:
      "Modelo de inteligencia artificial con capacidad de aumentar la resolución de un video de baja calidad.",
    image: require("../assets/images/super-R.png"),
    demo: "https://github.com/samilkar17/TecoGan-Super-Resolution/blob/main/Amilkar_Hincapie_Diaz_codigo.ipynb",
  },
  {
    description:
      "Sistema multimedia desarrollado con el objetivo de ayudar a prevenir la procrastinación en las personas.",
    image: require("../assets/images/procastina.png"),
    demo: "https://github.com/samilkar17/Dise-oMutilemdiaII",
  },
  {
    description:
      "Sistema multimedia que permita profundizar en el programa de ingeniería multimedia  a posibles estudiantes de la universidad autónoma de occidente .",
    image: require("../assets/images/video-interactivo.png"),
    demo: "https://multimedia-experience-front-jcamiloguz.vercel.app/",
  },
  {
    description:
      "Aplicación móvil de transporte, el cual ofrece servicios a clientes y usuarios interesados en viajar",
    image: require("../assets/images/app_taxi.png"),
    demo: "https://youtu.be/T5ecY6jQ5Zo",
  },
  {
    description:
      "Aplicacion móvil desarrollada con el fin de medir la glicemia de los pacientes y determinar afecciones.",
    image: require("../assets/images/app_centro_medico.png"),
    demo: "https://youtu.be/lxli4AVPHHY",
  },
  {
    description:
      "Diseño de dashboard web, con el objetivo de actualizar la pagina web la universidad Autónoma de Occidente.",
    image: require("../assets/images/ac.png"),
    demo: "https://github.com/samilkar17/Gentelella-UAO",
  },
  {
    description:
      "Página web donde puedes consultar tus personajes de Marvel favoritos a través de una Api-Rest.",
    image: require("../assets/images/marvel-api.png"),
    demo: "https://github.com/samilkar17/MarvelApi-ReactJs",
  },
  {
    description:
      "Página web donde puedes consultar tus películas, series y videojuegos favoritos a través de una Api-Rest.",
    image: require("../assets/images/omdb-api.png"),
    demo: "https://github.com/samilkar17/React-App-OmdbApi",
  },
];

export const courses = {
  certifications: [
    {
      image: require("../assets/images/Scrum-Master-Professional-Certificate-SMPC_-2020.png"),
      slug: "https://www.credly.com/badges/9d3919a8-7c3b-4d64-b342-4a94576001d4",
    },
    {
      image: require("../assets/images/scrum-foundation-professional-certificate-sfpc.1.png"),
      slug: "https://www.credly.com/badges/b5c625dc-5d5e-47d8-a039-bb599a3b816c",
    },
    {
      image: require("../assets/images/lifelong-learning.png"),
      slug: "https://www.credly.com/badges/fe03d667-408b-46d6-876d-53efb054f1c1",
    },
  ],
  courses: [
    {
      description: "React Hooks & Firebase & Material Design",
      icon: FaReact,
      detail: "Curso virtual de Udemy 23,5 Horas",
      color: "#50BBD7",
    },
    {
      description: "Crea una App como Uber utilizando Android",
      icon: FaAndroid,
      detail: "Curso virtual de Udemy 14.5 Horas",
      color: "#A4C639",
    },
    {
      description:
        "Técnico en Administración, Mantenimiento y Soporte Técnico de un centro de cómputo",
      icon: FaLaptopMedical,
      detail: "Sena Regional Valle del Cauca Cali-Valle  1 Año",
      color: "#0072CC",
    },
    {
      description:
        "Curso de formación en programación de página web con HTML, CSS y JavaScript",
      icon: FaHtml5,
      detail: "Sena Regional Valle del Cauca Cali-Valle 40 Horas",
      color: "#FD7E14",
    },
  ],
};
