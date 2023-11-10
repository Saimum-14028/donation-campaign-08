/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

const HomeCards = ({cards}) => {

    return (
        
        <div className="w-11/12 mx-auto">

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 py-10'>
                {
                    cards?.map(card=><div key={card.id}>
                        <Link to={`/homecards/${card.id}`}>
                            <div className={`card card-compact shadow-xl ${card.Color_for_card_bg} ${card.Color_for_text_and_button}`}>
                                <figure><img src={card.image} alt={card.title} /></figure>
                                <div className="card-body">
                                    <div className="w-20">
                                        <p className={`${card.Color_for_category_bg} text-center text-sm font-normal`}>{card.category}</p>
                                        </div>
                                    <h2 className="card-title text-xl font-semibold">{card.title}</h2>
                                </div>
                            </div>
                        </Link>
                        
                    </div> )
                }
            </div>

            <div className="w-11/12 bg-blue-200">
                <h1 className="text-blue-800 text-sm font-normal bg-blue-400 w-20">Color</h1>
                <h1 className="text-blue-800 text-xl font-semibold">Card Section</h1>
            </div>

            <div className="w-11/12 bg-red-200">
                <h1 className="text-red-800 text-sm font-normal bg-red-400 w-20">Color</h1>
                <h1 className="text-red-800 text-xl font-semibold">Card Section</h1>
            </div>

            <div className="w-11/12 bg-orange-200">
                <h1 className="text-orange-800 text-sm font-normal bg-orange-400 w-20">Color</h1>
                <h1 className="text-orange-800 text-xl font-semibold">Card Section</h1>
            </div>

            <div className="w-11/12 bg-green-200">
                <h1 className="text-green-800 text-sm font-normal bg-green-400 w-20">Color</h1>
                <h1 className="text-green-800 text-xl font-semibold">Card Section</h1>
            </div>

        </div>

        
    );
};

export default HomeCards;