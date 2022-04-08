import "./temp1.css";
import TypeWriterEffect from 'react-typewriter-effect';
const Temp1 = () =>{
    
   
    return(
        <div className="temp">
      
        <div className="templ">
        <img src="https://cf.ltkcdn.net/greenliving/images/std/225070-800x534r1-Environmental-Pollution-Concept.jpg" alt=""/>
        </div>
        <div className="tempr">
        <h1>We SafeGuard the <br></br><TypeWriterEffect
        textStyle={{
         
          
          fontWeight: 800,
          paddingLeft:50,
          fontSize: '1em',
        }}
        startDelay={1000}
        cursorColor="#3F3D56"
        multiText={[
          'Enviroment',
          'Enviroment',
          'Enviroment',
          'Enviroment',
          'Enviroment',
        ]}
        multiTextDelay={1000}
        typeSpeed={300}
        loop = {true}
      /></h1>
        <p>Over the past several decades, as the world has increasingly warmed, so has its potential to burn.</p>
        <div className="btns">
        <button className="our"><i class="fa-solid fa-book-open-reader"></i> Our Mission</button>
        <button className="down"><i class="fa-solid fa-download"></i> Download</button>
        </div>
        </div>
        
        </div>
    )
}

export default Temp1;