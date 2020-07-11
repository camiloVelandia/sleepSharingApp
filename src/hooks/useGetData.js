import {useState, useEffect} from 'react'

const useGetData = (API) => {
  const [room, setRoom] = useState({});
  useEffect(() => {
    fetch(API)
      .then((response) => response.json())
      .then((data) => setRoom(data));
  },[]);
  return room;
};

export default useGetData;
