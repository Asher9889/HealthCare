import { Star } from "lucide-react";

const reviews = [
  {
    name: "Ananya Sharma",
    review:
      "The doctors were very caring and the facilities were excellent. I felt safe and well looked after.",
  },
  {
    name: "Ravi Kumar",
    review:
      "Excellent service! The staff was friendly and attentive, and the hospital was very clean.",
  },
  {
    name: "Priya Verma",
    review:
      "I had a great experience. Everything was well organized and the treatment was top-notch.",
  },
];

export default function PatientReviews() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-10 text-gray-800">
          What Our Patients Say ❤️
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((r, i) => (
            <div
              key={i}
              className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition duration-300 border border-gray-100"
            >
              {/* Name */}
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {r.name}
              </h3>

              {/* Stars */}
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={18}
                    className="text-yellow-500 fill-yellow-500"
                  />
                ))}
              </div>

              {/* Review */}
              <p className="text-gray-600 leading-relaxed">{r.review}</p>
            </div>
          ))}
        </div>
      </div>
      
    </section>
  );
}
