import "../App.css"

function Home(props) {
      const  {data } = props
      console.log(data);
      return (
        <div className="container"> 
            {
                data.map((item, index)=>
                <div className="itemBox">
                    <li className="list">{item.name}</li>
                    <li className="list">{item.email}</li>
                    <li className="list">{item.status}</li>
                </div>
                )
            }  
        </div>
      );
    }
    
    export default Home;
    