import "./temp2.css";
const Temp2 = () => {
  return (
    <div className="temp2">
      <div className="temp2data">
        <ul>
          <li>
            <div className="co2">
              <h3>Carbon Dioxide</h3>
              <h1><i class="fa-solid fa-up-long"></i> 412</h1>
              <p>parts per million</p>
            </div>
          </li>
          <li>
            <div className="gt">
              <h3>Global Temprature</h3>
              <h1> <i class="fa-solid fa-up-long"></i> 1.9 F</h1>
              <p>since 2000</p>
            </div>
          </li>
          <li>
            
            <div className="aim">
              <h3>Arcitic ice minimum</h3>
              <h1><i class="fa-solid fa-down-long"></i> 13 %</h1>
              <p>parts per million</p>
            </div>
          </li>
          <li>
           
            <div className="sl">
              <h3>Sea Level</h3>
              <h1><i class="fa-solid fa-down-long"></i> 3.2</h1>
              <p>milimeter per year</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Temp2;
