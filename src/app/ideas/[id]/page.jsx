import IdeaDetail from "@/components/IdeaDetail";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";

const fetchSingle = async (id, token) =>{
    const res = await fetch(`http://localhost:8000/ideas/${id}`, {
        headers: {
            authorization: `Bearer ${token}` 
        }
    });
    const data = await res.json();
    // console.log(data ,"data");
    return data  || {};
}

const IdeaDetailPage =async ({params}) => {
    const {id} = await params;
     const {token,isPending} = await auth.api.getToken({
            headers: await headers()
        });
console.log(token);

    const idea = await fetchSingle(id, token)
    return (
        <div>
          
          <IdeaDetail idea={idea}></IdeaDetail>
        </div>
    );
};

export default IdeaDetailPage;