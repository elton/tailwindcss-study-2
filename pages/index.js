import Head from "next/head";
import PropertyCard from "../components/PorpertyCard";

const Home = ({ properties }) => {
  return (
    <div className="antialiased text-gray-900">
      <Head>
        <title>Wonderful Properties</title>
      </Head>

      <PropertyCard properties={properties} />
    </div>
  );
};

export async function getStaticProps() {
  const properties = {
    property: [
      {
        imageUrl:
          "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        imageAlt: "Rear view of modern home with pool",
        beds: 3,
        baths: 2,
        title: "Modern executive home in the heart of historic Los Angeles",
        priceInCents: 190000,
        formattedPrice: "$1,900.00",
        reviewCount: 34,
        rating: 4,
      },
      {
        imageUrl:
          "https://pixabay.com/get/57e4d2444a56ad14f6da8c7dda293f7e1137d8e55a4c704c7c277fd5974ecd5d_1280.jpg",
        imageAlt: "FURNITURE | LIGHTS | GARDEN I DEC ARTS",
        beds: 4,
        baths: 2,
        title: "Studio Lighting and Power Management",
        priceInCents: 180000,
        formattedPrice: "$1,800.00",
        reviewCount: 55,
        rating: 5,
      },
    ],
  };

  return {
    props: {
      properties,
    },
  };
}

export default Home;
