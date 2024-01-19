import React from 'react';

const SectionHeader = ({ title }) => {
    return (
        <h1 className="mb-4 mt-4 text-3xl font-extrabold text-gray-900 dark:text-white md:text-2xl lg:text-3xl"><span
            className="text-transparent bg-clip-text bg-gradient-to-r to-blue-600 from-sky-400">{title}</span></h1>

    )
};

export default SectionHeader;