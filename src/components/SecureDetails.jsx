import React from 'react';

function SecureDetails() {
  const handymen = [
    {
      name: 'Kipp Bohlar',
      location: 'Toongabbie, NSW',
      description:
        'Love how you can take raw footage and turn it into a professional video with AI.',
      verified: true,
    },
    {
      name: 'Kipp Bohlar',
      location: 'Toongabbie, NSW',
      description:
        'Love how you can take raw footage and turn it into a professional video with AI.',
      verified: true,
    },
    {
      name: 'Kipp Bohlar',
      location: 'Toongabbie, NSW',
      description:
        'Love how you can take raw footage and turn it into a professional video with AI.',
      verified: true,
    },
    {
      name: 'Kipp Bohlar',
      location: 'Toongabbie, NSW',
      description:
        'Love how you can take raw footage and turn it into a professional video with AI.',
      verified: true,
    },
  ];

  return (
    <div className="flex flex-col w-full  items-start space-y-2 p-6 md:p-20">
      <h5 className="text-2xl md:text-4xl font-medium text-gray-900">
        1. Lowest <span className="text-gray-500">commission rates</span>
      </h5>
      <h5 className="text-2xl md:text-4xl font-medium text-gray-900">
        2. <span className="text-gray-500">Secure cashless payments</span>
      </h5>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center py-6">
        <div className="bg-[#F4F4F4] rounded-md shadow-md p-6 h-[250px] items-center align-middle max-h-[330px]">
          <div className="flex items-center space-x-2 mb-4">
            <span className="bg-gray-200 text-gray-800 text-sm font-medium px-3 py-1 rounded-full">
              Trust taskbear
            </span>
          </div>
          <h3 className="text-xl sm:text-2xl lg:text-2xl xl:text-2xl font-semibold text-gray-900 mb-2">
            Trust and safety features for your protection
          </h3>
          <p className="text-gray-600 text-sm md:text-lg font-light mb-4">
            Pick the right person for the task based on real ratings and reviews
            from other users.
          </p>
          <button className="bg-[#0B3721] text-white text-sm px-6 py-3 rounded-sm hover:bg-green-700 flex items-center">
            Learn more <span className="ml-2">→</span>
          </button>
        </div>

        <div className="bg-[#F4F4F4] rounded-md shadow-md p-6 h-[250px] items-center align-middle max-h-[330px]">
          <div className="flex items-center space-x-2 mb-4">
            <span className="bg-gray-200 text-gray-800 text-sm font-medium px-3 py-1 rounded-full">
              Secure
            </span>
          </div>
          <h3 className="text-xl md:text-3xl font-semibold text-gray-900 mb-2">
            Be your own boss
          </h3>
          <p className="text-gray-600 text-sm md:text-lg font-light mb-4">
            We verify all taskers for you. Pick the right person for the task
            based on real ratings and reviews from other users
          </p>
          <button className="bg-[#0B3721] text-white text-sm px-6 py-3 rounded-sm hover:bg-green-700 flex items-center">
            Learn more <span className="ml-2">→</span>
          </button>
        </div>
      </div>

      <div className="p-6">
        <h2 className="text-xl font-semibold text-green-800 mb-6">
          Best rated handymen near me
        </h2>
        <div className="overflow-x-auto scroll-smooth ">
          <div className="flex space-x-6 p-2">
            {handymen.map((handyman, index) => (
              <div
                key={index}
                className="min-w-[250px] max-w-[300px] flex-shrink-0 bg-amber-50 rounded-lg shadow-md p-4 flex flex-col items-center text-center"
              ></div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default SecureDetails;
