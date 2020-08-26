import Head from "next/head";
import PropertyCard from "../components/PorpertyCard";

function Home({ properties }) {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
      </Head>

      <PropertyCard properties={properties} />
    </div>
  );
}

export async function getStaticProps() {
  const properties = {
    property: [
      {
        imageUrl:
          "https://pixabay.com/get/54e1dd444b55ac14f6d1867dda293f7e1137d8e55a4c704c7c277fd59748c459_1920.jpg",
        imageAlt: "Rear view of modern home with pool",
        beds: 3,
        baths: 2,
        title: "Modern home in city center",
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
