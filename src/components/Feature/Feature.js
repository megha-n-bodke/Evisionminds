import React from 'react';
import './Feature.css';

const Feature = ({ lead1, head, lead2 }) => (
  <>
    <h4>{lead1}</h4>
    <h1>{head}</h1>
    <h4>{lead2}</h4>
  </>
);

export default Feature;
