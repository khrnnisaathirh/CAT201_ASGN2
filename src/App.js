import React, { useState, useEffect } from 'react';
import { FaHome, FaMapMarkerAlt, FaUtensils, FaHotel, FaArrowUp } from 'react-icons/fa';

// Import images
import heroImage from './images/penang-overview.jpg';
import georgetownImage from './images/georgetown.jpg';
import foodImage from './images/food.jpg';
import hotelImage from './images/hotel.jpg';
import kekLokSiImage from './images/kek-lok-si.jpg';
import batuFerringhiImage from './images/batu-ferringhi.jpg';
import penangHillImage from './images/penang-hill.jpg';
import streetArtImage from './images/street-art.jpg';
import charkwayteowImage from './images/char-kway-teow.jpg';
import assamlaksaImage from './images/assam-laksa.jpg';
import nasiKandarImage from './images/nasiKandar.jpg';
import eoHotelImage from './images/e&oBuilding.jpg';
import eoHotelRoomImage from './images/e&oRoom.jpg';
import eoHotelPoolImage from './images/e&oPool.jpg';
import shangrilaImage from './images/shangrila.jpg';
import shangrilaRoomImage from './images/ShangrilaRoom.jpg';
import shangrilaPoolImage from './images/ShangrilaPool.jpg';
import sevenTerracesImage from './images/sevenTerraces.jpg';
import sevenTerracesRoomImage from './images/sevenRoom.jpg';
import sevenTerracesPoolImage from './images/sevenPool.jpg';
import hotelJenImage from './images/hotelJen.jpg';
import hotelJenRoomImage from './images/JenBuilding.jpg';
import hotelJenPoolImage from './images/JenPool.jpg';

// Modal Component to show description and price
const Modal = ({ image, title, description, price, isOpen, closeModal }) => (
  <div className={`fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center ${isOpen ? 'block' : 'hidden'}`}>
    <div className="bg-white rounded-lg shadow-lg w-11/12 md:w-1/2 p-6 relative">
      <button onClick={closeModal} className="absolute top-2 right-2 text-black font-bold text-xl">&times;</button>
      <h3 className="text-2xl font-bold mb-4">{title}</h3>
      <img src={image} alt={title} className="w-full h-64 object-cover rounded-lg mb-4" />
      <p className="text-gray-700 mb-4">{description}</p>
      {price && <p className="text-gray-900 font-semibold">{price}</p>}
    </div>
  </div>
);

const NavBar = ({ currentPage, setCurrentPage }) => (
  <nav className="fixed top-0 left-0 right-0 bg-black bg-opacity-50 text-white p-4 z-50">
    <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
      <h1 className="text-2xl font-bold mb-4 md:mb-0">Visit Penang</h1>
      <div className="space-x-6 flex">
        {[
          { page: 'home', icon: <FaHome />, label: 'Home' },
          { page: 'tourist-spots', icon: <FaMapMarkerAlt />, label: 'Tourist Spots' },
          { page: 'food', icon: <FaUtensils />, label: 'Food' },
          { page: 'hotels', icon: <FaHotel />, label: 'Hotels' }
        ].map(({ page, icon, label }) => (
          <button
            key={page}
            onClick={() => setCurrentPage(page)}
            className={`hover:text-blue-200 transition-colors flex items-center ${currentPage === page ? 'border-b-2' : ''}`}
          >
            {icon}
            <span className="ml-2">{label}</span>
          </button>
        ))}
      </div>
    </div>
  </nav>
);

const Footer = () => (
  <footer className="bg-black text-white p-4 mt-12">
    <div className="container mx-auto text-center">
      <p>&copy; 2023 Visit Penang. All rights reserved.</p>
      <div className="mt-4">
        <a href="#home" className="hover:text-blue-200">Home</a> | 
        <a href="#tourist-spots" className="hover:text-blue-200 ml-2">Tourist Spots</a> | 
        <a href="#food" className="hover:text-blue-200 ml-2">Food</a> | 
        <a href="#hotels" className="hover:text-blue-200 ml-2">Hotels</a>
      </div>
      <div className="mt-4">
        <p>Contact Information:</p>
        <p>Fatin Najihah - <a href="mailto:fatinnajihah.h@student.usm.my" className="hover:text-blue-200">fatinnajihah.h@student.usm.my</a></p>
        <p>Khairunnisa Athirah - <a href="mailto:khrnnisa_athirh@student.usm.my" className="hover:text-blue-200">khrnnisa_athirh@student.usm.my</a></p>
      </div>
    </div>
  </footer>
);

const BackToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  return (
    <div className="fixed bottom-4 right-4">
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="bg-blue-500 text-white p-2 rounded-full shadow-lg hover:bg-blue-700 transition-colors"
        >
          <FaArrowUp />
        </button>
      )}
    </div>
  );
};

const Home = ({ openModal }) => (
  <>
    <div className="relative">
      <img
        src={heroImage}
        alt="Penang Overview"
        className="w-full h-96 object-cover"
      />
      <div className="absolute top-0 left-0 right-0 bottom-0 bg-black bg-opacity-50 flex flex-col justify-center items-center">
        <h2 className="text-4xl text-white font-bold">Welcome to Penang</h2>
        <h3 className="text-xl text-white mt-2">The Pearl of the Orient</h3>
      </div>
    </div>

    <div className="container mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold text-center mb-8">Explore Penang</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300">
          <img
            src={georgetownImage}
            alt="Georgetown"
            className="w-full h-48 object-cover"
            onClick={() => openModal('Georgetown', 'Explore UNESCO World Heritage sites in Georgetown, known for its colonial architecture and street art.', georgetownImage, null)}
          />
          <div className="p-6">
            <h3 className="text-xl font-bold mb-2">Georgetown</h3>
            <p className="text-gray-600 mb-4">UNESCO World Heritage site with rich cultural history.</p>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300">
          <img
            src={foodImage}
            alt="Food"
            className="w-full h-48 object-cover"
            onClick={() => openModal('Food', 'Penang is famous for its street food, including dishes like char koay teow, assam laksa, and nasi kandar.', foodImage, null)}
          />
          <div className="p-6">
            <h3 className="text-xl font-bold mb-2">Food</h3>
            <p className="text-gray-600 mb-4">World-renowned food scene with unique flavors and tastes.</p>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300">
          <img
            src={hotelImage}
            alt="Hotels"
            className="w-full h-48 object-cover"
            onClick={() => openModal('Hotels', 'Penang offers a variety of hotels ranging from heritage buildings to modern resorts.', hotelImage, null)}
          />
          <div className="p-6">
            <h3 className="text-xl font-bold mb-2">Hotels</h3>
            <p className="text-gray-600 mb-4">Discover a range of accommodation options for every budget.</p>
          </div>
        </div>
      </div>
    </div>
  </>
);

const TouristSpots = ({ openModal }) => (
  <div className="pt-20">
    <div className="container mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold mb-8">Popular Tourist Attractions</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {[ 
          { 
            title: "Kek Lok Si Temple", 
            description: "The largest Buddhist temple in Malaysia, featuring stunning architecture and panoramic views. Some fees are charged for certain areas, starting from RM2-RM6.", 
            image: kekLokSiImage,
            price: null
          },
          {
            title: "Batu Ferringhi Beach",
            description: "Popular beach destination known for water sports, night markets, and beautiful sunsets.",
            image: batuFerringhiImage,
            price: null
          },
          {
            title: "Penang Hill",
            description: "Historic hill station offering cooler temperatures and spectacular views of the island. For locals, fees are staring from RM4-RM8. Don't forget to bring your identity card!",
            image: penangHillImage,
            price: null
          },
          {
            title: "Street Art",
            description: "Famous murals and interactive street art scattered throughout Georgetown.",
            image: streetArtImage,
            price: null
          }
        ].map((spot, index) => (
          <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300">
            <img
              src={spot.image}
              alt={spot.title}
              className="w-full h-48 object-cover"
              onClick={() => openModal(spot.title, spot.description, spot.image, spot.price)}
            />
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">{spot.title}</h3>
              <p className="text-gray-600 mb-4">{spot.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

const FoodAndBeverages = ({ openModal }) => (
  <div className="pt-20">
    <div className="container mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold mb-8">Local Delicacies</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {[ 
          {
            title: "Char Koay Teow",
            description: "Famous stir-fried rice noodles with prawns and Chinese sausage.",
            image: charkwayteowImage,
            price: "RM5"
          },
          {
            title: "Assam Laksa",
            description: "Tangy fish-based noodle soup ranked among the world's best foods.",
            image: assamlaksaImage,
            price: "RM4"
          },
          {
            title: "Nasi Kandar",
            description: "Rice served with various curry dishes and side items.",
            image: nasiKandarImage,
            price: "RM6 (Prices are varies according to side dishes.)"
          }
        ].map((food, index) => (
          <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300">
            <img
              src={food.image}
              alt={food.title}
              className="w-full h-48 object-cover"
              onClick={() => openModal(food.title, food.description, food.image, food.price)}
            />
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">{food.title}</h3>
              <p className="text-gray-600 mb-4">{food.description}</p>
              <p className="text-gray-800 font-semibold">{food.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

const Hotels = ({ openModal }) => (
  <div className="pt-20">
    <div className="container mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold mb-8">Where to Stay</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {[ 
          {
            title: "Eastern & Oriental Hotel",
            description: "Historic luxury hotel established in 1885, offering colonial charm and modern amenities.",
            image: eoHotelImage,
            price: "RM802-RM1,604 per night",
            additionalImages: [eoHotelRoomImage, eoHotelPoolImage]
          },
          {
            title: "Shangri-La Rasa Sayang",
            description: "Luxurious beachfront resort in Batu Ferringhi with tropical gardens.",
            image: shangrilaImage,
            price: "RM755-1,201 per night",
            additionalImages: [shangrilaRoomImage, shangrilaPoolImage]
          },
          {
            title: "Seven Terraces",
            description: "Beautifully restored heritage hotel in the heart of Georgetown.",
            image: sevenTerracesImage,
            price: "RM668-RM1,652 per night",
            additionalImages: [sevenTerracesRoomImage, sevenTerracesPoolImage]
          },
          {
            title: "Hotel Jen Penang",
            description: "Modern hotel in the city center with excellent connectivity.",
            image: hotelJenImage,
            price: "RM310-RM513 per night",
            additionalImages: [hotelJenRoomImage, hotelJenPoolImage]
          }
        ].map((hotel, index) => (
          <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300">
            <img
              src={hotel.image}
              alt={hotel.title}
              className="w-full h-48 object-cover"
              onClick={() => openModal(hotel.title, hotel.description, hotel.image, hotel.price)}
            />
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">{hotel.title}</h3>
              <p className="text-gray-600 mb-4">{hotel.description}</p>
              <p className="text-gray-800 font-semibold">{hotel.price}</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
                {hotel.additionalImages.map((img, idx) => (
                  <img key={idx} src={img} alt={`${hotel.title} ${idx}`} className="w-full h-32 object-cover rounded-lg" />
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

const App = () => {
  const [currentPage, setCurrentPage] = useState('home');
  const [modalInfo, setModalInfo] = useState(null);

  const openModal = (title, description, image, price) => {
    setModalInfo({ title, description, image, price });
  };

  const closeModal = () => {
    setModalInfo(null);
  };

  const renderPage = () => {
    switch(currentPage) {
      case 'tourist-spots':
        return <TouristSpots openModal={openModal} />;
      case 'food':
        return <FoodAndBeverages openModal={openModal} />;
      case 'hotels':
        return <Hotels openModal={openModal} />;
      default:
        return <Home openModal={openModal} />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <NavBar currentPage={currentPage} setCurrentPage={setCurrentPage} />
      {renderPage()}
      {modalInfo && (
        <Modal
          {...modalInfo}
          isOpen={!!modalInfo}
          closeModal={closeModal}
        />
      )}
      <Footer />
      <BackToTopButton />
    </div>
  );
};

export default App;