import React, { useEffect } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux'; // ✅ Corrected spelling
import { setotherUsers } from '../redux/userSlice';

const UseGetOtherUser = () => {
  const dispatch = useDispatch(); // ✅ Corrected spelling

  useEffect(() => {
    const fetchotherusers = async () => {
      try {
        axios.defaults.withCredentials = true;
        const res = await axios.get('http://localhost:8080/api/v1/user/');
       // console.log(res);
        dispatch(setotherUsers(res.data));
      } catch (error) {
        console.log(error);
      }
    };

    fetchotherusers();
  }, [dispatch]);

  return null; // Optionally return something or null if it's a hook-like component
};

export default UseGetOtherUser;
