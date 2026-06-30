import IdeaFeature from "@/components/IdeaFeature";
import IPage from "@/components/IPage";

const ideaFetch = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_IDEA_URL}/ideas`,{
         cache:"no-store"
    }
        
    )
    
    const data = await res.json();

    return data || [];

}
const IdeasPage = async () => {
    const ideas = await ideaFetch()


    return (
        <div>
            <IdeaFeature></IdeaFeature>

            <div className="  grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3  gap-5  bg-[#050816] text-white  px-8 lg:px-30  py-10 items-stretch ">



                {
                    ideas.map(idea => <IPage key={idea._id} idea={idea}></IPage>)
                }
            </div>
        </div>
    );
};

export default IdeasPage;