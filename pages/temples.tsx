import React, { useState } from "react";

type Temple = {
  id: number;
  name: string;
  location: string;
  state: string;
  imageUrl: string;
  virtualTourUrl: string;
  description: string;
  deity: string;
};

const temples: Temple[] = [
  {
    id: 1,
    name: "Kashi Vishwanath Temple",
    location: "Varanasi",
    state: "Uttar Pradesh",
    imageUrl: "kashi.jpg",
    virtualTourUrl: "https://www.youtube.com/embed/3zFxVe_9k4M",
    description:
      "One of the twelve Jyotirlingas, Kashi Vishwanath is dedicated to Lord Shiva and located on the sacred Ganges River in Varanasi, a spiritual center of India.",
    deity: "Lord Shiva",
  },
  {
    id: 2,
    name: "Kedarnath Temple",
    location: "Rudraprayag",
    state: "Uttarakhand",
    imageUrl: "kedarnath.jpg",
    virtualTourUrl: "https://www.youtube.com/embed/GEOh7-MKk-4",
    description:
      "Located in the Himalayas, Kedarnath is one of the Char Dhams and a sacred pilgrimage for Lord Shiva devotees. It's accessible only for a few months a year due to snowfall.",
    deity: "Lord Shiva",
  },
  {
    id: 3,
    name: "Badrinath Temple",
    location: "Chamoli",
    state: "Uttarakhand",
    imageUrl: "badrinath.jpg",
    virtualTourUrl: "https://www.youtube.com/embed/jzBYUvjLuU0",
    description:
      "Dedicated to Lord Vishnu, Badrinath Temple is one of the Char Dham and Chota Char Dham pilgrimage sites and is surrounded by the Nar and Narayana mountain ranges.",
    deity: "Lord Vishnu",
  },
  {
    id: 4,
    name: "Tirupati Balaji Temple",
    location: "Tirumala",
    state: "Andhra Pradesh",
    imageUrl: "tirupati.jpg",
    virtualTourUrl: "https://www.youtube.com/embed/I0p2xbtVR_w",
    description:
      "Also known as Venkateswara Temple, it is one of the richest and most visited pilgrimage centers, where millions donate wealth in devotion to Lord Vishnu.",
    deity: "Lord Venkateswara (Vishnu)",
  },
  {
    id: 5,
    name: "Somnath Temple",
    location: "Veraval",
    state: "Gujarat",
    imageUrl: "somnath.jpg",
    virtualTourUrl: "https://www.youtube.com/embed/ueWApA0naZY",
    description:
      "Somnath is the first of the twelve Jyotirlinga shrines of Shiva and has been destroyed and rebuilt several times, symbolizing resilience and devotion.",
    deity: "Lord Shiva",
  },
  {
    id: 6,
    name: "Meenakshi Temple",
    location: "Madurai",
    state: "Tamil Nadu",
    imageUrl: "meenakshi.jpg",
    virtualTourUrl: "https://www.youtube.com/embed/ruaUSt2tzoM",
    description:
      "Famous for its stunning Dravidian architecture and vibrant sculptures, Meenakshi Temple is dedicated to Goddess Meenakshi and Lord Sundareswarar (Shiva).",
    deity: "Goddess Meenakshi and Lord Shiva",
  },
  {
    id: 7,
    name: "Jagannath Temple",
    location: "Puri",
    state: "Odisha",
    imageUrl: "jagannath.jpg",
    virtualTourUrl: "https://www.youtube.com/embed/CQApTKf5pMg",
    description:
      "Famous for the annual Rath Yatra, the Jagannath Temple is dedicated to Lord Jagannath (a form of Krishna) and is one of the Char Dham pilgrimage sites.",
    deity: "Lord Jagannath (Krishna)",
  },
  {
    id: 8,
    name: "Ramanathaswamy Temple",
    location: "Rameswaram",
    state: "Tamil Nadu",
    imageUrl: "ramanathaswamy.jpg",
    virtualTourUrl: "https://www.youtube.com/embed/YZ7sacHtZn8",
    description:
      "Located on Rameswaram Island, it is one of the twelve Jyotirlinga temples, believed to be where Lord Rama worshipped Shiva before his battle with Ravana.",
    deity: "Lord Shiva",
  },
  {
    id: 9,
    name: "Vaishno Devi Temple",
    location: "Katra",
    state: "Jammu and Kashmir",
    imageUrl: "vaishnodevi.jpg",
    virtualTourUrl: "https://www.youtube.com/embed/c_YEEzQxtz8",
    description:
      "Nestled in the Trikuta Mountains, this cave temple is dedicated to Goddess Vaishno Devi and is one of the most visited temples in India.",
    deity: "Goddess Vaishno Devi",
  },
  {
    id: 10,
    name: "Akshardham Temple",
    location: "Delhi",
    state: "Delhi",
    imageUrl: "akshardham.jpg",
    virtualTourUrl: "https://www.youtube.com/embed/g0K1LCPZ0j4",
    description:
      "A modern architectural marvel showcasing Indian culture and spirituality, Akshardham is dedicated to Bhagwan Swaminarayan and features exhibitions and musical fountains.",
    deity: "Bhagwan Swaminarayan",
  },
  {
  id: 11,
  name: "Golden Temple",
  location: "Amritsar",
  state: "Punjab",
  imageUrl: "golden_temple.jpg",
  virtualTourUrl: "https://www.youtube.com/embed/7Z9ePJtzJks",
  description:
    "Also known as Harmandir Sahib, it is the holiest Sikh shrine known for its stunning golden architecture and spiritual significance.",
  deity: "Guru Granth Sahib",
},
{
  id: 12,
  name: "Konark Sun Temple",
  location: "Konark",
  state: "Odisha",
  imageUrl: "konark.jpg",
  virtualTourUrl: "https://www.youtube.com/embed/qT5b6fQ6pVo",
  description:
    "A 13th-century temple dedicated to the Sun God, famous for its chariot-shaped architecture and exquisite stone carvings.",
  deity: "Surya (Sun God)",
},
{
  id: 13,
  name: "Dwarkadhish Temple",
  location: "Dwarka",
  state: "Gujarat",
  imageUrl: "dwarkadhish.jpg",
  virtualTourUrl: "https://www.youtube.com/embed/5mvZs1oPpOc",
  description:
    "Dedicated to Lord Krishna, this temple is one of the Char Dham pilgrimage sites and is located on the western coast of India.",
  deity: "Lord Krishna",
},
{
  id: 14,
  name: "Lingaraj Temple",
  location: "Bhubaneswar",
  state: "Odisha",
  imageUrl: "lingaraj.jpg",
  virtualTourUrl: "https://www.youtube.com/embed/wMbZamAVbqs",
  description:
    "An ancient temple dedicated to Lord Shiva, representing the architectural heritage of the region with intricate carvings.",
  deity: "Lord Shiva",
},
{
  id: 15,
  name: "Siddhivinayak Temple",
  location: "Mumbai",
  state: "Maharashtra",
  imageUrl: "siddhivinayak.jpg",
  virtualTourUrl: "https://www.youtube.com/embed/tKiMCUuL4wY",
  description:
    "One of the most famous temples dedicated to Lord Ganesha, known for granting wishes and attracting devotees from across the country.",
  deity: "Lord Ganesha",
},
{
  id: 16,
  name: "Chamundeshwari Temple",
  location: "Mysore",
  state: "Karnataka",
  imageUrl: "chamundeshwari.jpg",
  virtualTourUrl: "https://www.youtube.com/embed/gmQXDj7m5t4",
  description:
    "Situated atop Chamundi Hill, this temple is dedicated to Goddess Chamundeshwari, an incarnation of Durga.",
  deity: "Goddess Chamundeshwari",
},
{
  id: 17,
  name: "Venkateswara Temple",
  location: "Tirupati",
  state: "Andhra Pradesh",
  imageUrl: "venkateswara.jpg",
  virtualTourUrl: "https://www.youtube.com/embed/Q5FZ_QnUqLs",
  description:
    "Also called Tirumala Temple, this is one of the most visited pilgrimage sites dedicated to Lord Venkateswara (an incarnation of Vishnu).",
  deity: "Lord Venkateswara (Vishnu)",
},
{
  id: 18,
  name: "Hoysaleswara Temple",
  location: "Halebidu",
  state: "Karnataka",
  imageUrl: "hoysaleswara.jpg",
  virtualTourUrl: "https://www.youtube.com/embed/wdsQYuYXnD0",
  description:
    "An intricately carved temple dedicated to Lord Shiva, representing the Hoysala architecture of the 12th century.",
  deity: "Lord Shiva",
},

];

export default function Temples() {
  const [selectedTemple, setSelectedTemple] = useState<Temple | null>(null);
  const [searchTerm, setSearchTerm] = useState("");

  // Filter temples based on search term (case insensitive)
  const filteredTemples = temples.filter((temple) => {
    const term = searchTerm.toLowerCase();
    return (
      temple.name.toLowerCase().includes(term) ||
      temple.location.toLowerCase().includes(term) ||
      temple.state.toLowerCase().includes(term) ||
      temple.deity.toLowerCase().includes(term) ||
      temple.description.toLowerCase().includes(term)
    );
  });

  return (
    <div className="min-h-screen bg-yellow-50 p-6">
      <h1 className="text-4xl font-bold text-center mb-6 text-yellow-800">
        Famous Temples of India
      </h1>

      {/* Search Bar */}
      <div className="max-w-md mx-auto mb-8">
        <input
          type="text"
          placeholder="Search temples by name, location, state, deity..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full px-4 py-2 border rounded shadow focus:outline-yellow-500 text-gray-900"
        />
      </div>

      {/* Temple Grid */}
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {filteredTemples.length === 0 ? (
          <p className="col-span-full text-center text-gray-700">
            No temples match your search.
          </p>
        ) : (
          filteredTemples.map((temple) => (
            <div
              key={temple.id}
              className="bg-white rounded-lg shadow-md hover:shadow-xl transition cursor-pointer"
              onClick={() => setSelectedTemple(temple)}
            >
              <img
                src={`/images/${temple.imageUrl}`}
                alt={temple.name}
                className="w-full h-48 object-cover"
                loading="lazy"
              />
              <div className="p-4">
                <h2 className="text-xl font-semibold text-gray-800">
                  {temple.name}
                </h2>
                <p className="text-gray-600">
                  {temple.location}, {temple.state}
                </p>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedTemple(temple);
                  }}
                  className="mt-3 px-4 py-2 bg-yellow-500 text-white rounded hover:bg-yellow-600"
                >
                  Explore Virtual Tour
                </button>
              </div>
            </div>
          ))
        )}
      </div>

      {/* Modal: Details + Virtual Tour */}
      {selectedTemple && (
        <div
          className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 p-4"
          onClick={() => setSelectedTemple(null)}
        >
          <div
            className="bg-white rounded-lg max-w-4xl w-full max-h-[80vh] overflow-y-auto p-6 relative shadow-2xl flex flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-3 right-4 text-gray-600 hover:text-black text-2xl font-bold"
              onClick={() => setSelectedTemple(null)}
              aria-label="Close"
            >
              &times;
            </button>

            <h3 className="text-3xl font-bold text-yellow-800 mb-4">
              {selectedTemple.name}
            </h3>
            <p className="mb-2 text-gray-700">
              <strong>Location:</strong> {selectedTemple.location},{" "}
              {selectedTemple.state}
            </p>
            <p className="mb-2 text-gray-700">
              <strong>Deity:</strong> {selectedTemple.deity}
            </p>
            <p className="mb-4 text-gray-600">{selectedTemple.description}</p>

            {/* Fullscreen Image */}
            <img
              src={`/images/${selectedTemple.imageUrl}`}
              alt={selectedTemple.name}
              className="max-w-full max-h-[35vh] rounded-lg mb-4 object-contain"
              loading="lazy"
            />

            {/* Embedded Virtual Tour iframe */}
            <div className="w-full aspect-video mb-4">
              <iframe
                src={selectedTemple.virtualTourUrl}
                title={`${selectedTemple.name} Virtual Tour`}
                frameBorder="0"
                allowFullScreen
                className="w-full h-full rounded-lg"
              />
            </div>

            {/* Buttons  */}
            <div className="space-x-4">
              <button
                onClick={() =>
                  window.open(selectedTemple.virtualTourUrl, "_blank")
                }
                className="px-6 py-2 bg-yellow-500 text-white rounded hover:bg-yellow-600"
              >
                View in 3D
              </button>
              <button
                onClick={() => alert("Donate button clicked")}
                className="px-6 py-2 bg-yellow-500 text-white rounded hover:bg-yellow-600"
              >
                Donate
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

