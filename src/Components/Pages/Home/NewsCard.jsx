import React from 'react';
import { Link } from 'react-router-dom';

const NewsCard = ({ news }) => {
    const { rating, total_view, title, author, thumbnail_url, image_url, details, category_id } = news
    return (
        <div>
            <div className="card bg-base-100 shadow-xl mb-16 border-b-2">
                <figure><img src={thumbnail_url} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{title}</h2>
                    {
                        details.length > 200 ? <p>{details.slice(0, 200)}  <Link className='text-red-500  ml-2 font-bold' to={`/news/${category_id}`} >Read More...</Link></p> : <p>{details}</p>
                    }
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NewsCard;