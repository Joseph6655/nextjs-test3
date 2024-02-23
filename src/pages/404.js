import link from 'next/link'
const NotFound =()=>{
    return(
        <div className="not-found">
            <h1>
                <text>ooops...</text>
                </h1>
            <h2>Sorry that page cannot be found.</h2>
            <p> Go back to the home page<link href="/"><a>Homepage</a></link></p>
        </div>
    )
}
export default NotFound;
