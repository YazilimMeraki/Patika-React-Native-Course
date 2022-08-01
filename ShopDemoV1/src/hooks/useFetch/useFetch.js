import { useEffect,  useState} from "react";
import axios from "axios";
function useFetch(url){
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(true)
    const [data, setData] = useState([])

    const fetchData = async() => { 
        try{
            const {data: responsedata} = await axios.get(url);
            setData(responsedata)
            setLoading(false)
        }
        catch(err){
            setError(err.message)
            setLoading(false)
        }
    }
    useEffect(()=> {
      fetchData()
    }, [])

    return  {error,loading,data}
}

export default useFetch;