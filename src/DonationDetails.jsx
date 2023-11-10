import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import DonationDetailsCard from "./DonationDetailsCard";

const DonationDetails = () => {
    const [donationDetails, setdonationDetails] = useState({});

    const { id } = useParams();

    const datas = useLoaderData();

    useEffect(() => {

        
        const findDonationDetails = datas?.find((data) => data.id === id);

        setdonationDetails(findDonationDetails);
    }, [id, datas]);

   // console.log(id);

    return (
        
        <div>
            <DonationDetailsCard donationDetails={donationDetails}></DonationDetailsCard>
        </div>
    );
};

export default DonationDetails;