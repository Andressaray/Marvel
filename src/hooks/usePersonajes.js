import { useState, useEffect } from 'react';

import getPersonajes from '../services/getPersonajes';

export default function UsePersonajes({ keyword } = { keyword: null }) {
  const [loading, setLoading] = useState(false);
  const [personajes, setPersonajes] = useState([]);
  useEffect(() => {
    setLoading(true);
    getPersonajes({keyword})
      .then((personajes) => {
        setLoading(false);
        setPersonajes(personajes);
    });
  }, [keyword]);
  return { loading, personajes };
}
