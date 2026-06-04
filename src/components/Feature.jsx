import FeatureHead from "./FeatureHead";
import IPage from "./IPage";

const ideaFetch = async () =>{
    const res = await fetch(`${process.env.IDEA_URL}/feature`)
    const data = await res.json();
  
   
    return data  || [];}
const Feature = async() => {
    const ideas = await ideaFetch()
    
    return (
     <div className="bg-[#050816]">
        <FeatureHead></FeatureHead>
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 my-15 mx-auto w-11/12">
            {
                ideas.map(idea=><IPage key={idea._id} idea={idea}></IPage>)
            }
        </div>
     </div>
    );
};

export default Feature;