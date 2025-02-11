import React from 'react';
import { useNavigate } from 'react-router-dom';

const Cinematography = () => {
  const navigate = useNavigate();
  
  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-6xl mx-auto">
        <button 
          onClick={() => navigate('/Homepage')}
          className="mb-8 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          Back to Home
        </button>

        <h1 className="text-4xl font-bold mb-6">Cinematography</h1>
        
        <div className="grid gap-8">
          <section className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-2xl font-semibold mb-4">What is Cinematography?</h2>
            <p className="text-gray-700">
              Cinematography is the art and craft of camera work and lighting in filmmaking. 
              It involves composing shots, selecting lenses, choosing camera movements, and 
              crafting the visual style of a film through lighting and camera techniques.
            </p>
          </section>

          <section className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-2xl font-semibold mb-4">Essential Skills</h2>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <li className="flex items-center">
                <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                Camera Operation and Movement
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                Lighting Design
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                Composition and Framing
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                Color Theory
              </li>
            </ul>
          </section>

          <section className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-2xl font-semibold mb-4">Famous Cinematographers</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <img src="/api/placeholder/120/120" alt="Roger Deakins" className="mx-auto rounded-full mb-2" />
                <h3 className="font-medium">Roger Deakins</h3>
                <p className="text-sm text-gray-600">Blade Runner 2049, 1917</p>
              </div>
              <div className="text-center">
                <img src="/api/placeholder/120/120" alt="Emmanuel Lubezki" className="mx-auto rounded-full mb-2" />
                <h3 className="font-medium">Emmanuel Lubezki</h3>
                <p className="text-sm text-gray-600">Gravity, Birdman</p>
              </div>
              <div className="text-center">
                <img src="/api/placeholder/120/120" alt="Rachel Morrison" className="mx-auto rounded-full mb-2" />
                <h3 className="font-medium">Rachel Morrison</h3>
                <p className="text-sm text-gray-600">Black Panther, Mudbound</p>
              </div>
            </div>
          </section>

          <section className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-2xl font-semibold mb-4">Equipment Essentials</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="border-l-4 border-blue-500 pl-4">
                <h3 className="font-medium">Cameras</h3>
                <p className="text-sm text-gray-600">ARRI Alexa, RED Digital Cinema, Sony Venice</p>
              </div>
              <div className="border-l-4 border-blue-500 pl-4">
                <h3 className="font-medium">Lenses</h3>
                <p className="text-sm text-gray-600">Prime lenses, Zoom lenses, Anamorphic lenses</p>
              </div>
              <div className="border-l-4 border-blue-500 pl-4">
                <h3 className="font-medium">Lighting</h3>
                <p className="text-sm text-gray-600">LED panels, HMI lights, Tungsten lights</p>
              </div>
              <div className="border-l-4 border-blue-500 pl-4">
                <h3 className="font-medium">Support Gear</h3>
                <p className="text-sm text-gray-600">Tripods, Dollies, Gimbals, Steadicam</p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Cinematography;