import axios from "axios";
import { atomFamily, selectorFamily } from "recoil";

//we learned earlier in the async data query that while fetching data from the backend we have to use selector inside the atom in default to do async calls 
//and here we have to use selctor family in atom family to do async back end calls

export const todosAtomFamily = atomFamily({
    key : "todoAtomFamily",
    default : selectorFamily({ //boggling head syntax but get used to it 
        key : "todoSelectorFamily",
        get : (id) => async ({get}) =>{ //basically what it does is it takes id as an input and then calls async func with get basically what we did back in the normal atom fetch we will pass get with the async coz it is not outside iykyk
            const res = await axios.get(`https://sum-server.100xdevs.com/todo?id=${id}`);
            return res.data.todo;
        },
    })
});
