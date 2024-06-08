const listings = [
  {
    title: "Modern Family Home",
    price: "$500,000",
    description:
      "A beautiful modern family home located in the suburbs, perfect for a growing family.",
    features: [
      "2500 sq ft",
      "4 Bedrooms",
      "2 Bathrooms",
      "Swimming Pool",
      "Garage",
    ],
  },
  {
    title: "Luxury Apartment",
    price: "$750,000",
    description:
      "A luxurious apartment with stunning city views and modern amenities.",
    features: ["1800 sq ft", "3 Bedrooms", "2 Bathrooms", "Gym", "Concierge"],
  },
  {
    title: "Cozy Cottage",
    price: "$300,000",
    description:
      "A charming cottage with a rustic feel, ideal for a peaceful retreat.",
    features: ["1500 sq ft", "2 Bedrooms", "1 Bathroom", "Garden", "Fireplace"],
  },
];

const Pricing = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-primary to-purple-600 p-6 flex flex-col items-center">
      <h1 className="text-4xl font-bold text-white mb-8">Pricing Plans</h1>
      <div className="w-full max-w-6xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {listings.map((listing, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-lg p-6 transform hover:scale-105 transition-transform duration-300"
          >
            <h2 className="text-2xl font-bold mb-4">{listing.title}</h2>
            <p className="text-xl text-gray-800 mb-2">{listing.price}</p>
            <p className="text-gray-600 mb-4">{listing.description}</p>
            <ul className="text-gray-700 mb-6">
              {listing.features.map((feature, idx) => (
                <li key={idx} className="flex items-center">
                  <svg
                    className="w-5 h-5 text-blue-500 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>
                  {feature}
                </li>
              ))}
            </ul>
            <button className="btn btn-primary w-full text-white">
              Buy Now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pricing;
