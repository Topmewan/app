import {Link} from "react-router-dom";


export  const Pagination  = ({postPerPage, totalPosts,paginate}) => {
    const  pageNumbers = [];

    for(let i =1; i<= Math.ceil(totalPosts/postPerPage); i++){
        pageNumbers.push(i);

    }

    return (

        <div>
            <ul className='pagination'>
                {pageNumbers.map(number => (
                    <Link onClick={()=> paginate(number)} to='#'>
                        {number}
                    </Link>
                ))}

            </ul>

        </div>
    );
}