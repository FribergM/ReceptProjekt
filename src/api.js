export const fetchData = async(URL) => {
    try{
        const response = await fetch(URL)
        const data = await response.json();
        //console.log(data);
        return data;
    }catch(error){
        console.error('Error in fetch:', error);
    }
}