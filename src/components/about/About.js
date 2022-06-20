import React from "react";
import './About.css';

const About = () => {
    return (
            
        <>

            <div className = "About-us" >
                <h1 className = "About-head" > About Us </h1> 
                <h6 className = "About-heading"> Home > About Us </h6> 
            </div >

            <div className = "AboutPhoto" >
                <img src = "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.mYoN6Mvr4l4j-ZsYUAV14wHaE6%26pid%3DApi&f=1" alt = "" / >
            </div> 
            <div className = "AboutText" >
                <h1 className = "head-1" > Odi Art Centre </h1> 
                <p className = "para-1">
                Nestling on the banks of Chilika Lake in Odisha, a state in eastern India, the Odi Art Centre is developed by‘ Society
                for Development of Rural Literature’, a registered, non - profit, cultural Society.The centre, which has built Purvasha Folk and Tribal Art Museum with the financial support from Ministry of Culture, Government of India and Department of Tourism & Culture, Government of Odisha, showcases the rich traditions of folk and tribal arts of India.Chilika, brackish water lagoon, has remained a source of inspiration
                for the domestic and foreign tourists, poets, writers and creative artistes and ODI ART Centre was added as an incubation centre to its cultural and ethnic heritage.Odi Art Centre, an ethnic art complex, well decorated with collected art objects and surrounded by nine small amphitheatres and gazebos
                for folk performances, spread over five acres of land has:
                </p> 
            </div> 


            <div className = "AboutPhoto2" >
                <img src = "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.mYoN6Mvr4l4j-ZsYUAV14wHaE6%26pid%3DApi&f=1" alt = "" / >
            </div>
            <div className = "AboutText2" >
                {/* <h1 className = "head-1" > Odi Art Centre </h1>  */}
                <p className = "para-2">
                    Purvasha Folk and Tribal Art Museum, to showcase the 
                    folk and tribal arts, artefacts and crafts of India. Rang-Manch, for 
                    live performance of Theatre and other folk and tribal Performing Arts. 
                    Prafulla, the Library, to preserve the books, journals and films on folk
                    and tribal arts (Under Construction). ODI ART Documentation & 
                    Research Centre, to encourage research and documentation of folk and 
                    tribal forms and traditions. Kalakriti, the Business Centre, to provide 
                    interface of the artists with the industry and business Gurukul, the 
                    Training Centre, for Traditional & Modern Arts. Santusti, a 
                    Restaurant, specializing in Authentic Odia Cuisine (Under Construction).
                </p> 
            </div> 
        </>
    );
};

export default About;