export default function PropertyCard({ properties }) {
  return (
    <>
      {properties.property.map((property) => (
        <div key={property.title} className="bg-white">
          <img src={property.imageUrl} alt={property.imageAlt} />
          <div className="p-6">
            <h4>{property.title}</h4>
            <div>
              {property.beds} beds &bull; {property.baths} baths
            </div>
            <div>{property.formattedPrice} / wk</div>
            <div>
              {property.rating}/5 starts (base on {property.reviewCount}{" "}
              reviews)
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
