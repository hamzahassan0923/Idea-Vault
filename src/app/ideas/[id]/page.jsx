
const fetchSingle = async (id) =>{
    const res = await fetch(`http://localhost:8000/ideas/${id}`)
    const data = await res.json();
    // console.log(data);
    return data  || {};
}

const IdeaDetailPage =async ({params}) => {
    const {id} = await params;
    const idea = await fetchSingle(id)
    return (
        <div>
          
            <p>detail:{idea.ideaTitle}</p>
        </div>
    );
};

export default IdeaDetailPage;