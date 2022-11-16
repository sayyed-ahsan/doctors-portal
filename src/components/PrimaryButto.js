import React from 'react';

const PrimaryButto = ({ children }) => {
    return (
        <button className="btn border-0 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-blue-500 hover:to-cyan-500  hover:shadow-2xl">{children}</button>

    );
};

export default PrimaryButto;