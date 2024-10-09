"use client"; // Mark as a Client Component

import React, { useState } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 

// Sample data for carousel images
const carouselImages = [
  { id: 1, image: '/cp1.jpeg', name: 'Person 1' },
  { id: 2, image: '/cp2.jpeg', name: 'Person 2' },
  { id: 3, image: '/cp3.jpeg', name: 'Person 3' },
  { id: 4, image: '/cp4.jpeg', name: 'Person 4' },
  { id: 5, image: '/cp5.jpeg', name: 'Person 5' },
];

// Sample data for person card details
const personDetails = [
  { id: 1, name: 'Person 1', image: '/person1.jpeg',  },
  { id: 2, name: 'Person 2', image: '/person2.jpeg',  },
  { id: 3, name: 'Person 3', image: '/person3.jpeg',  },
  { id: 4, name: 'Person 4', image: '/person4.jpeg',  },
  { id: 5, name: 'Person 5', image: '/person5.jpeg',  },
];

const CarouselWithCard = () => {
  const [selectedPerson, setSelectedPerson] = useState(personDetails[0]); // Default to first person

  const openModal = (personId) => {
    const person = personDetails.find(p => p.id === personId);
    setSelectedPerson(person);
  };

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: (
        <div
            className="slick-arrow"
            style={{
                background: 'black', // Solid background color
                color: 'white', // Text color
                fontSize: '2em', // Size of the arrow
                cursor: 'pointer',
            }}
        >
            →
        </div>
    ),
    prevArrow: (
        <div
            className="slick-arrow"
            style={{
                background: 'black', // Solid background color
                color: 'white', // Text color
                fontSize: '2em',
                cursor: 'pointer',
            }}
        >
            ←
        </div>
    ),
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'space-between', padding: '20px', margin: '0 100px' }}>
      {/* Left div for the person card */}
      <div style={{
        flex: 0.7, 
        minHeight: '100px', 
        maxHeight: '350px',  
        maxWidth: '600px', 
        border: '1px solid #ccc', 
        borderRadius: '8px', 
        boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)'
      }}>
        <img
          src={selectedPerson.image}
          alt={selectedPerson.name}
          style={{ 
            width: '100%', 
            height: '100%',   
            objectFit: 'cover', 
            borderRadius: '8px' 
          }}
        />
      </div>

      {/* Right div for the carousel */}
      <div style={{ flex: 1, minWidth: '300px', maxWidth: '550px' }}>
        <h2 style={{ marginBottom: '0px', fontSize: '40px', fontWeight: 'bold', color: '#2C3E50' }}> 
          Real Stories, Real Success
        </h2>
        <p style={{ marginBottom: '25px', fontSize: '16px', color: '#7F8C8D' }}>
          Discover what our learners say about us
        </p>
        
        <Slider {...settings}>
          {carouselImages.map(person => (
            <div key={person.id} style={{ textAlign: 'center' }}>
              <img
                src={person.image}
                alt={person.name}
                style={{
                  width: '100%', 
                  maxHeight: '100px', 
                  objectFit: 'cover', 
                  cursor: 'pointer', 
                  opacity: person.id === selectedPerson.id ? 1 : 0.5, // Apply opacity for non-selected images
                  transition: 'opacity 0.1s ease-in-out' // Smooth transition for opacity
                }} 
                onClick={() => openModal(person.id)}
              />
            </div>
          ))}
        </Slider>

        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          backgroundColor: '#f8f8f8', 
          borderRadius: '8px',
          maxWidth: '600px',          
          marginTop: '70px',
          marginLeft: '5em'           
        }}>
          {/* Left Section */}
          <div style={{ textAlign: 'left', marginLeft:'1em', display:'flex'}}>
            <h2 style={{ fontSize: '2em', fontWeight: 'bold', color: '#e67e22' }}>9K+</h2>
            <p style={{ marginLeft:'10px', maxWidth:'10em', color: '#7f8c8d' }}>Successful Career Transitions</p>
          </div>

          {/* Divider */}
          <div style={{ borderLeft: '1px solid #ccc', height: '60px', display:'flex' }} />

          {/* Right Section */}
          <div style={{ textAlign: 'left', display:'flex', marginLeft:'0.2em' }}>
            <h2 style={{ fontSize: '1.5em', fontWeight: 'bold', color: '#e67e22' }}>175%</h2>
            <p style={{ margin: 0, color: '#7f8c8d', marginLeft:'0.2em', marginRight:'0.2em' }}>Average Salary Hike</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarouselWithCard;
