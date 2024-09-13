export default function AboutSection() {
  return (
    <section className="bg-white md:px-8 flex flex-col lg:flex-row items-center gap-8 p-4 mb-10 xl:mx-20">
      <div className="flex-shrink-0 mb-8 animate-fadeIn">
        <img
          src="2023-07-24_1723877189875 (1).jpg"
          alt="Profile"
          className="w-full h-auto max-w-sm rounded-lg shadow-lg transition-transform duration-500 hover:scale-105"
        />
      </div>
      <div className="lg:text-left animate-fadeIn animate-delay-200">
        <h2 className="text-3xl font-bold text-gray-900 mb-2">About Me</h2>
            
        <p className="text-lg text-gray-700 mb-6"> Hello! I'm <span className="font-semibold text-gray-900">KP Rahul</span>.
        </p>
        <p className="text-base text-gray-600 leading-relaxed mb-2">
          It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
        </p>
       
        <p className="text-base text-gray-600 leading-relaxed mb-2">   The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.
        </p>
        <p className="text-base text-gray-600 leading-relaxed">  There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.
        </p>
        <div className="flex gap-4 justify-center lg:justify-start mt-4 animate-fadeIn animate-delay-400">
          <img src="instagram-svgrepo-com.svg" className="w-12 transition-transform duration-300 hover:scale-110" alt="Instagram" />
          <img src="facebook-svgrepo-com.svg" className="w-8 transition-transform duration-300 hover:scale-110" alt="Facebook" />
          <img src="linkedin-svgrepo-com.svg" className="w-8 transition-transform duration-300 hover:scale-110" alt="LinkedIn" />
          <img src="twitter-svgrepo-com.svg" className="w-8 transition-transform duration-300 hover:scale-110" alt="Twitter" />
        </div>
      </div>
    </section>
  );
}
