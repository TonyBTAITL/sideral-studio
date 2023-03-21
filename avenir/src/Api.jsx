import axios from 'axios';

export default axios.create({
  // En local :
  // baseURL: `http://localhost/api/react/`
  // baseURL: `http://localhost/administration/`

  // En ligne :

  // baseURL: `https://sideralweb.fr/api/react/`

  // Url base bdd ou api du site

  baseURL: `http://sideral-studio.fr/api/react/`
});
