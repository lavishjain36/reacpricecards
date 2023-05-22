import React from "react";
import Card from "./components/Card";
import data from "./data/data.json";



//Merge or to call Card component in App.js component
//Added comment here
const App=()=>{
    return(
        <section className="pricing py-5">
            <div className="container">
                <div className="row">
                    {/* Pass the data to card component using props */}
                    <Card data={data}/>
                </div>
            </div>
        </section>

    )
}


export default App;