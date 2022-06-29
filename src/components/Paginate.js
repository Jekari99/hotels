import { useEffect, useState } from "react";
import ReactPaginate from 'react-paginate';
import Card from "./Card";

function Paginate(props) {

    const { data } = props;

    const [currentItems, setCurrentItems] = useState([]);
    const [pageCount, setPageCount] = useState(0);
    const [itemOffset, setItemOffset] = useState(0);
    const itemsPerPage = 15;

    useEffect(() => {
        const endOffset = itemOffset + itemsPerPage;
        setCurrentItems(data.slice(itemOffset, endOffset));
        setPageCount(Math.ceil(data.length / itemsPerPage));
    }, [itemOffset, itemsPerPage, data]);

    const handlePageClick = (event) => {
        const newOffset = (event.selected * itemsPerPage) % data.length;
        setItemOffset(newOffset);
        document.documentElement.scrollTop = 500;
    };

    return (
        <>
            {currentItems.map((card) => {
                return (
                    <Card key={card.id} image={card.images[0]} name={card.name} price={card.price.total} booking={card.url} bedrooms={card.bedrooms} bathrooms={card.bathrooms} beds={card.beds} address={card.address} userId={card.userId} type={card.type} imgone={card.images[1]} imgtwo={card.images[2]} imgthree={card.images[3]} imgfour={card.images[4]} reviews={card.reviewsCount} rating={card.rating} persons={card.persons} />
                );
            })}
            <div className="container-fluid" id="paginate">
                <ReactPaginate
                    breakLabel="..."
                    nextLabel=" Next "
                    onPageChange={handlePageClick}
                    pageRangeDisplayed={5}
                    pageCount={pageCount}
                    previousLabel=" Previous "
                    renderOnZeroPageCount={null}
                    className="pagination pagination-lg justify-content-center"
                    pageClassName="page-item"
                    pageLinkClassName="page-link"
                    previousClassName="page-item"
                    previousLinkClassName="page-link"
                    nextClassName="page-item"
                    nextLinkClassName="page-link"
                    breakClassName="page-item"
                    breakLinkClassName="page-link"
                />
            </div>

        </>
    );

}

export default Paginate;