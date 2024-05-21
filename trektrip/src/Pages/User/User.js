import React, { useEffect, useState, useContext } from 'react';ž
import { AuthContext } from '../../Context/AuthContext';
import './User.css';


function Profile() {
    const { user } = useContext(AuthContext);
    const [trips, setTrips] = useState([]);
  
    useEffect(() => {
        if (user) {
          // Fetch user's trips using their userId
          fetch(`/api/trips?user_id=${user.id}`)
            .then(response => response.json())
            .then(data => setTrips(data))
            .catch(error => console.error('Error fetching trips:', error));
        }
      }, [user]);
  
    if (!user) {
      return <div>Loading...</div>;
    }

  return (
    <div className="profile-page">
        <div className="profile-info">
          <h1>Profil</h1>
          <div className="profile-details">
            <img src={user.profilePicture} alt="Profile" className="profile-pic" />
            <h2>{profile.username}</h2>
            <div className="profile-buttons">
              <button>Uredi profil</button>
              <button>Dodaj put</button>
            </div>
          </div>
          <div className="about-me">
            <h2>O meni</h2>
            <p>{profile.about}</p>
          </div>
        </div>
        <div className="my-trips">
          <h2>Moja putovanja</h2>
          <div className="trips-grid">
            {trips.map((trip, index) => (
                <div key={index} className="trip-card">
                    <img src={trip.image} alt={trip.title} />
                    <h3>{trip.title}</h3>
                    <p>{trip.description}</p>
                    <div className="trip-rating">⭐ {trip.rating}</div>
                </div>
                ))}
          </div>
        </div>
    </div>
  );
}

export default Profile;
