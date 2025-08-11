import { IoMdStar } from "react-icons/io";

export default function Customers() {
  const clients = [
    {
      name: "Karita Lynn",
      role: "Customer Success",
      image: "https://randomuser.me/api/portraits/women/44.jpg",
    },
    {
      name: "Tomas Campbell",
      role: "Customer Success",
      image: "https://randomuser.me/api/portraits/men/32.jpg",
    },
    {
      name: "Robert Ocampo",
      role: "Customer Success",
      image: "https://randomuser.me/api/portraits/men/75.jpg",
    },
    {
      name: "Alicia Romero",
      role: "Customer Success",
      image: "https://randomuser.me/api/portraits/women/68.jpg",
    },
    {
      name: "David Becker",
      role: "Customer Success",
      image: "https://randomuser.me/api/portraits/men/28.jpg",
    },
    {
      name: "Linda Watson",
      role: "Customer Success",
      image: "https://randomuser.me/api/portraits/women/51.jpg",
    },
    {
      name: "George Elias",
      role: "Customer Success",
      image: "https://randomuser.me/api/portraits/men/19.jpg",
    },
    {
      name: "Emily Zhang",
      role: "Customer Success",
      image: "https://randomuser.me/api/portraits/women/30.jpg",
    },
    {
      name: "Joseph Klein",
      role: "Customer Success",
      image: "https://randomuser.me/api/portraits/men/43.jpg",
    },
  ];

  return (
    <div className="py-12 px-4 bg-[#f9f9f9] ">
     
      <h2 className="text-center text-3xl font-bold text-gray-800 mb-10">
        We Care About Our <br /> Customers Experience Too
      </h2>

      <div className="flex justify-center flex-wrap gap-x-8 gap-y-14 mt-22">
        {clients.map((client, index) => (
          <div
            key={index}
            className="relative bg-white rounded-2xl shadow-lg w-80 px-6 pt-14 pb-6 text-center hover:bg-gray-100  cursor-pointer"
          >
            <img
              src={client.image}
              alt={client.name}
              className="w-20 h-20 object-cover rounded-full border-4 border-white absolute top-[-40px] left-1/2 transform -translate-x-1/2"
            />
            <p className="text-gray-600 text-sm mb-4 leading-relaxed">
              The meals were perfectly timed and professionally presented. 
              A real treat during our busy meetings!
            </p>
            <p className="font-bold text-gray-900">{client.name}</p>
            <p className="text-gray-400 text-sm mb-3">{client.role}</p>
            <div className="flex justify-center gap-1 text-orange-600 ">
              <IoMdStar  />
              <IoMdStar />
              <IoMdStar />
              <IoMdStar />
              <IoMdStar />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
