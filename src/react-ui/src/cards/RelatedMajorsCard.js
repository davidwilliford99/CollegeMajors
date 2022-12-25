import { React, useState } from 'react';

export const RelatedMajorsCard = (props) => {

    const category = props.category;

    return (
        <div id='related-majors-card' className="bg-card-dark mx-5 text-white p-10 rounded-2xl">
            <h1>{category}</h1>
        </div>
    );
}