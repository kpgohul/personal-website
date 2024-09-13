export default function ContactForm() {
    return (
      <div className="grid grid-cols-1 lg:px-32 md:px-10 px-4 xl:mx-24 space-y-4">
        <div className="grid md:grid-cols-2 gap-3">
          <input
            type="text"
            className="rounded-lg border border-gray-300 focus:border-red-500 transition duration-300"
            placeholder="Your Name..."
          />
          <input
            type="text"
            className="rounded-lg border border-gray-300 focus:border-red-500 transition duration-300"
            placeholder="Your Email..."
          />
        </div>
        <div className="grid grid-cols-1 space-y-4">
          <input
            type="text"
            className="rounded-lg border border-gray-300 h-14 focus:border-red-500 transition duration-300"
            placeholder="Your Subject..."
          />
          <textarea
            className="rounded-lg border border-gray-300 h-20 focus:border-red-500 transition duration-300"
            placeholder="Your Message..."
          />
        </div>
        <div className="flex justify-end">
          <button className="border-2 border-gray-300 px-4 py-2 rounded-lg transition-colors duration-300 hover:bg-blue-500 hover:border-blue-500 hover:text-white">
            SEND MESSAGE
          </button>
        </div>
      </div>
    );
  }
  