


import IPage from "@/components/IPage";
const ideaFetch = async () =>{
    const res = await fetch("http://localhost:8000/ideas")
    const data = await res.json();
    // console.log(data);
    return data  || [];
    
}
const IdeasPage = async() => {
   const ideas = await ideaFetch()


    return (
        <div className=" mx-auto w-10/12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-5">
           
            {
                ideas.map(idea=><IPage key={idea._id} idea={idea}></IPage>)
            }
        </div>
    );
};

export default IdeasPage;