import "./app.css";
function App() {
  return (
    <div className="app_container">
      <div className="app_wrapper">
         <Card head="free" offer="$0/month" li1="10 users included" li2="2 GB of storage"  li3="Email supported" li4="Help center access" button="sign up for free"/>
         <Card head="Pro" offer="$15/month" li1="20 users included" li2="10 GB of storage"  li3="Priority Email supported" li4="Help center access" button="Get Started"/>
         <Card head="Enterprice" offer="$29/month" li1="30 users included" li2="15 GB of storage"  li3="Phone and Email supported" li4="Help center access" button="Contact Us"/>
      </div>
      </div>
  );
}

function Card(props){
  const listed_items=props.list_items;
  console.log(listed_items)
  return(
    <div className="card_container">
  <h1 className="heading">{props.head}</h1>
   <h1>{props.offer}</h1>
   <ul type="none">
    <li className="li">{props.li1}</li>
    <li className="li">{props.li2}</li>
    <li className="li">{props.li3}</li>
    <li className="li">{props.li4}</li>
   </ul>
   <button type="button" className="btn btn-primary">{props.button}</button>
 </div>

  )
}

export default App;
