import React from 'react';

interface props {
    title: string,
    description: string,
    icon: React.ReactNode
}

function FeatureCard({ title, description, icon }: props) {
    return (
      <div className="flex flex-col items-center p-6 bg-white shadow-md rounded-lg text-center max-w-sm transition-all duration-300 ease-in-out hover:shadow-lg hover:shadow-[#b2a0fa] hover:scale-105">
        <div className="text-4xl">{icon}</div>
        <h3 className="mt-4 text-xl font-semibold text-[#6945f8] ">{title}</h3>
        <p className="mt-2 text-gray-600">{description}</p>
      </div>
    );
}

export default FeatureCard;
