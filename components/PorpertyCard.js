import Rating from "../components/rating";
export default function PropertyCard({ properties }) {
  return (
    <>
      {properties.property.map((property) => (
        <div key={property.title} className="p-3">
          <div>
            <div className="relative pb-5/6">
              <img
                className="absolute h-full w-full object-cover rounded-lg shadow-md"
                src={property.imageUrl}
                alt={property.imageAlt}
              />
            </div>
            {/* <div
              className="h-48 bg-cover bg-center"
              style={{ backgroundImage: "url(" + property.imageUrl + ")" }}
            ></div> */}
            <div className="px-4 -mt-16 relative">
              <div className="p-6 bg-white rounded-lg shadow-lg">
                <div className="flex items-baseline">
                  <span className="bg-teal-200 text-teal-800 text-xs px-2 inline-block rounded-full uppercase font-semibold tracking-wide">
                    New
                  </span>
                  <div className="text-gray-600 text-xs uppercase font-semibold tracking-wide ml-2">
                    {property.beds} beds &bull; {property.baths} baths
                  </div>
                </div>

                <h4 className="mt-1 font-semibold text-lg leading-tight truncate">
                  {property.title}
                </h4>

                <div className="mt-1">
                  {property.formattedPrice}
                  <span className="text-gray-600 text-sm">/ wk</span>
                </div>
                <div className="mt-2 flex items-center">
                  <Rating props={property.rating} />

                  <span className="text-gray-600 text-sm ml-2">
                    {property.reviewCount} reviews
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
