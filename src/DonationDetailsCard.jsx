/* eslint-disable react/prop-types */
import swal from "sweetalert";

const DonationDetailsCard = ({donationDetails}) => {

    const handleDonation = () => {

          const donatedList = [];
          const donatedItems = JSON.parse(localStorage.getItem("donated"));
      
          if (!donatedItems) {
            donatedList.push(donationDetails);
            localStorage.setItem("donated", JSON.stringify(donatedList));
            swal("Done!", "Donation added successfully!", "success");
          } 
          else {
            const isExits = donatedItems.find((item) => item.id === donationDetails.id);
      
            if (!isExits) {
      
              donatedList.push(...donatedItems, donationDetails);
              localStorage.setItem("donated", JSON.stringify(donatedList));
              swal("Done!", "Donation added successfully!", "success");
             
            }
            else {
              swal("Error!", "Already added!", "error");
            }
          }
    }

    return (
        <div className="w-11/12 mx-auto">
            <div className="hero min-h-screen relative" style={{backgroundImage: `url(${donationDetails.image})`}}>
                
                <button onClick={handleDonation} className={`btn ${donationDetails.Color_for_button} absolute left-10 bottom-10`}>Donate ${donationDetails.price}</button>
                   
            </div>
            <h1 className="text-4xl font-bold my-5">{donationDetails.title}</h1>
            <p className="text-base font-normal text-justify mb-10">{donationDetails.description}</p>
        </div>
    );
};

export default DonationDetailsCard;