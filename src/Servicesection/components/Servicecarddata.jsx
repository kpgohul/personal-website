import Servicecard from './Servicecard'; // Ensure the path is correct

export default function Servicedata() {
  const services = [
    {
      image: "react-16-svgrepo-com.svg",
      title: "Reactjs",
      description: "Reactjs web developer",
    },
    {
      image: "react-16-svgrepo-com.svg",
      title: "JavaScript",
      description: "JavaScript language",
    },
    {
      image: "react-16-svgrepo-com.svg",
      title: "Web Developer",
      description: "Web development services",
    },
    {
      image: "react-16-svgrepo-com.svg",
      title: "Design",
      description: "UI/UX Design",
    },
    {
      image: "react-16-svgrepo-com.svg",
      title: "SEO",
      description: "Search Engine Optimization",
    },
    {
      image: "react-16-svgrepo-com.svg",
      title: "Content Creation",
      description: "Content Writing and Marketing Content Writing and Marketing Content Writing and Marketing ",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid md:grid-cols-2 lg:grid lg:grid-cols-3 xl:p-10 lg:p-5 md:p-5 space-y-5">
      {services.map((service, index) => (
        <Servicecard 
          key={index} 
          image={service.image} 
          title={service.title} 
          description={service.description} 
        />
      ))}
    </div>
  );
}
