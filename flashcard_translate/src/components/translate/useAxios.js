import { useState, useEffect } from "react";

const useAxios = (configObj) => {
  const { axiosInstance, method, url, requestConfig = {} } = configObj;

  const [response, setResponse] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const controller = new AbortController();
    const fetchData = async () => {
      try {
        const res = await axiosInstance[method.toLowerCase()](url, {
          ...requestConfig,
          signal: controller.signal,
        });
        console.log(res.data);
        setResponse(res.data);
      } catch (err) {
        if (err.res) {
          // Not in the 200 status
          console.log(err.res.data);
          console.log(err.res.status);
          console.log(err.res.headers);
          setError(err.message);
        } else {
          console.log(`Error: ${err.message}`);
        }
      } finally {
        setLoading(false);
      }
    };
    fetchData();
    // useEffect cleanup function
    return () => controller.abort();
  }, []);
  return [response, error, loading];
};

export default useAxios;
/*
export default async function getAllPosts() {
    const instance = axios.create({
        method: 'POST',
        url: 'https://translate-plus.p.rapidapi.com/translate',
        headers: {
          'content-type': 'application/json',
          'X-RapidAPI-Key': '120fce0b17msh436766ead066f60p1bc4efjsn159ae8c77e00',
          'X-RapidAPI-Host': 'translate-plus.p.rapidapi.com'
        },
        data: '{"text":"Hello , How are you","source":"en","target":"nl"}'
      });
    try { 
      const response = await axios.get(instance)
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };
*/
