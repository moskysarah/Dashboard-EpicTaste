
import { motion } from "framer-motion";

export default function Messages() {
  const clients = [
    {
      name: "Unknowledge",
      role: "Customer",
      image:
        "https://i.pinimg.com/736x/c9/e9/30/c9e930732c8db155a5ac34e5ba10f70d.jpg",
    },
  ];

  return (
    <div className="py-12 px-4 bg-[#f9f9f9]">
      <div className="flex justify-center flex-wrap gap-x-8 gap-y-14 mt-22">
        {clients.map((client, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="relative bg-white rounded-2xl shadow-lg w-80 px-6 pt-14 pb-6 text-center hover:bg-gray-100 cursor-pointer"
          >
            <img
              src={client.image}
              alt={client.name}
              className="w-20 h-20 object-cover rounded-full border-4 border-white absolute top-[-40px] left-1/2 transform -translate-x-1/2"
            />
            <p className="text-gray-600 text-sm mb-4 leading-relaxed">
              Dear customer you come to pass your order successfully!
            </p>
            <p className="font-bold text-gray-900">{client.name}</p>
            <p className="text-gray-400 text-sm mb-3">{client.role}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
