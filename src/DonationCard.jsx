/* eslint-disable react/prop-types */

const DonationCard = ({card}) => {
    return (
        <div className="w-11/12 mx-auto mb-5">
            <div className={`card card-side shadow-xl ${card.Color_for_card_bg}`}>
                <figure><img src={card.image} alt={card.title}/></figure>
                <div className="card-body">
                    <div className="w-20">
                        <p className={`font-normal text-sm text-center ${card.Color_for_text_and_button} ${card.Color_for_category_bg}`}>{card.category}
                        </p>
                    </div>
                    
                    <h2 className="card-title">{card.title}</h2>
                    <p className={`font-normal text-sm ${card.Color_for_text_and_button}`}>${card.price}.00</p>
                    
                    <button className={`${card.Color_for_button} btn btn-bg`}>View Details</button>
                </div>
            </div>
        </div>
    );
};

export default DonationCard;