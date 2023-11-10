import DonationCard from "./DonationCard";
import { useEffect, useState } from "react";

const Donation = () => {

    const [donated, setDonated] = useState([]);
    const [noFound, setNofound] = useState();
    const [isShow,setIsShow] = useState(false)
  
    useEffect(() => {
      const favoriteItems = JSON.parse(localStorage.getItem("donated"));
  
      if (favoriteItems) {
        setDonated(favoriteItems);
      } else {
        setNofound("No Data Found!");
      }
    }, []);
    
    return (
        <div>
            {noFound ? (
                <p className="h-full flex justify-center items-center text-5xl font-bold text-red-700">{noFound}</p>
            ) : (
                <div>
                    <div className="md:grid grid-cols-2 gap-5 mb-5">
                        {
                            isShow ? donated.map((card) => (
                                <DonationCard key={card.id} card={card}></DonationCard>
                            )) 
                            
                            : donated.slice(0,4).map((card) => (
                                <DonationCard key={card.id} card={card}></DonationCard>
                            ))
                        }
                    </div>

                    <div className="flex justify-center items-center">
                        {donated.length > 4 && !isShow && <button onClick={()=>setIsShow(!isShow)}  className="btn btn-accent text-white">
                            See All
                    </button>}
                    </div>
                </div>
            )}
        </div>
    );
};

export default Donation;