
export const getApi = async (url) => {
    try {
        const res = await fetch(url);
        if(!res.ok){
            console.error('Could not fetch',res.status);
            return false;
        }
        return await res.json();
    } catch (e) {
        console.error(e.message);
        return false;
    }
}



// (async () => {
//     const body = await getApi(API_ROOT + API_SECOND);
//     console.log(body);
// })();