// src/pages/CustomerReviews.js
import React, { useRef, useState } from 'react';
import './CustomerReviews.css';

const CustomerReviews = () => {
  const reviewsRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const reviews = [
    {
      id: 1,
      name: "Romeena De Silva",
      company: "Tech Innovations",
      rating: 5,
      comment: <p>Without any doubt I recommend Alcaline Solutions as one of the best web design and digital marketing agencies.<br/>
       Their team delivered exceptional results that exceeded our expectations.</p>,
      avatar: "https://randomuser.me/api/portraits/women/44.jpg"
    },
    {
      id: 2,
      name: "Janet Cosmetics",
      company: "Beauty First",
      rating: 5,
      comment: <p>Working with Alcaline Solutions was a game-changer for our digital marketing strategy.<br/>
       Their innovative approach helped us reach new customers and increase our online presence significantly.</p>,
      avatar: "https://randomuser.me/api/portraits/women/68.jpg"
    },
    {
      id: 3,
      name: "Michael Thompson",
      company: "Global Finance",
      rating: 4,
      comment: <p>The mobile app developed by Alcaline Solutions has transformed how we interact with our clients. <br/>
        Highly professional and reliable team with excellent communication throughout the project.</p>,
      avatar: "https://randomuser.me/api/portraits/men/32.jpg"
    },
    {
      id: 4,
      name: "Sarah Johnson",
      company: "Eco Solutions",
      rating: 5,
      comment: <p>Alcaline Solutions delivered a custom software solution that streamlined our operations. <br/>
      Their attention to detail is unmatched and the final product was exactly what we needed.</p>,
      avatar: "https://randomuser.me/api/portraits/women/75.jpg"
    },
    {
      id: 5,
      name: "David Wilson",
      company: "Sport Dynamics",
      rating: 5,
      comment: "The UI/UX design services provided by Alcaline Solutions significantly improved our customer engagement. Exceptional work from a team that truly understands user experience.",
      avatar: "https://randomuser.me/api/portraits/men/67.jpg"
    },
    {
      id: 6,
      name: "Emma Rodriguez",
      company: "Health Plus",
      rating: 4,
      comment: <p>
  We've been working with Alcaline Solutions for three years now.<br />
  Their cloud solutions have helped us scale our business efficiently and improve our service delivery.
</p>,
      avatar: "https://randomuser.me/api/portraits/women/28.jpg"
    }
  ];

  const checkScrollPosition = () => {
    if (reviewsRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = reviewsRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth);
    }
  };

  const scrollLeft = () => {
    if (reviewsRef.current) {
      reviewsRef.current.scrollBy({ left: -300, behavior: 'smooth' });
      setTimeout(checkScrollPosition, 300);
    }
  };

  const scrollRight = () => {
    if (reviewsRef.current) {
      reviewsRef.current.scrollBy({ left: 300, behavior: 'smooth' });
      setTimeout(checkScrollPosition, 300);
    }
  };

  const renderStars = (rating) => {
    return Array(5).fill(0).map((_, i) => (
      <span key={i} className={`star ${i < rating ? 'filled' : ''}`}>★</span>
    ));
  };

  return (
    <div className="reviews-container">
      <h2 className="reviews-title">Why customers love working with us</h2>
      
      <div className="reviews-wrapper">
        <button 
          className={`arrow-btn left ${!canScrollLeft ? 'disabled' : ''}`} 
          onClick={scrollLeft}
          disabled={!canScrollLeft}
        >
          &lt;
        </button>
        
        <div className="reviews-scroll-container" ref={reviewsRef} onScroll={checkScrollPosition}>
          <div className="reviews-grid">
            {reviews.map((review) => (
              <div key={review.id} className="review-item">
                <div className="review-content">
                  <div className="rating">
                    {renderStars(review.rating)}
                  </div>
                  <p className="review-text">"{review.comment}"</p>
                </div>
                
                <div className="customer-info">
                  <img src={review.avatar} alt={review.name} className="customer-avatar" />
                  <div className="customer-details">
                    <h3 className="customer-name">{review.name}</h3>
                    <p className="customer-company">{review.company}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <button 
          className={`arrow-btn right ${!canScrollRight ? 'disabled' : ''}`} 
          onClick={scrollRight}
          disabled={!canScrollRight}
        >
          &gt;
        </button>
      </div>
    </div>
  );
};

export default CustomerReviews;