import React from "react";
import Pagination from "react-paginating";
import HomeItem from "../ItemList/HomeItem";

const fruits = [
    ["apple", "orange"],
    ["banana", "avocado"],
    ["coconut", "blueberry"],
    ["payaya", "peach"],
    ["pear", "plum"]
];
const limit = 3;
const pageCount = 3;
const data = [
    [
        {
            img: "property_3.jpg",
            price: 300,
            description: "Fuisque dictum tortor at purus libero",
            info: {
                kitchen: 2,
                bed: 3,
                bath: 1,
                area: 120,
                id: 299202,
                action: "buy"
            }
        },
        {
            img: "property_1.jpg",
            price: 500,
            description: "Fuisque dictum tortor at purus libero",
            info: {
                kitchen: 1,
                bed: 2,
                bath: 3,
                area: 240,
                id: 299203,
                action: "rent"
            }
        },
        {
            img: "property_2.jpg",
            price: 100,
            description: "Fuisque dictum tortor at purus libero",
            info: {
                kitchen: 4,
                bed: 2,
                bath: 1,
                area: 100,
                id: 299201,
                action: "buy"
            }
        }
    ],
    [
        {
            img: "img/property_3.jpg",
            price: 400,
            description: "Fuisque dictum tortor at purus libero",
            info: {
                kitchen: 2,
                bed: 3,
                bath: 6,
                area: 200,
                id: 296293,
                action: "buy"
            }
        },
        {
            img: "property_1.jpg",
            price: 500,
            description: "Fuisque dictum tortor at purus libero",
            info: {
                kitchen: 1,
                bed: 2,
                bath: 3,
                area: 240,
                id: 249203,
                action: "rent"
            }
        },
        {
            img: "property_2.jpg",
            price: 100,
            description: "Fuisque dictum tortor at purus libero",
            info: {
                kitchen: 4,
                bed: 2,
                bath: 1,
                area: 100,
                id: 229201,
                action: "buy"
            }
        }
    ],
    [
        {
            img: "img/property_3.jpg",
            price: 400,
            description: "Fuisque dictum tortor at purus libero",
            info: {
                kitchen: 2,
                bed: 3,
                bath: 6,
                area: 200,
                id: 295293,
                action: "rent"
            }
        },
        {
            img: "property_2.jpg",
            price: 100,
            description: "Fuisque dictum tortor at purus libero",
            info: {
                kitchen: 4,
                bed: 2,
                bath: 1,
                area: 100,
                id: 245201,
                action: "buy"
            }
        },
        {
            img: "img/property_3.jpg",
            price: 400,
            description: "Fuisque dictum tortor at purus libero",
            info: {
                kitchen: 2,
                bed: 3,
                bath: 6,
                area: 200,
                id: 297893,
                action: "rent"
            }
        }
    ]
];

const total = data.length * limit;

export default class PaginationApp extends React.Component {
    constructor() {
        super();
        this.state = {
            currentPage: 1
        };
    }

    handlePageChange = (page, e) => {
        this.setState({
            currentPage: page
        });
    };

    render() {
        // const { data } = this.props;
        const { currentPage } = this.state;
        console.log("data is ->", data);
        return (
            <div>
                <section className="item-list">
                    {data[currentPage - 1].map(homeInfo => (
                        <HomeItem {...homeInfo} key={homeInfo.info.id} />
                    ))}
                </section>

                <Pagination
                    total={total}
                    limit={limit}
                    pageCount={pageCount}
                    currentPage={currentPage}
                >
                    {({
                        pages,
                        currentPage,
                        hasNextPage,
                        hasPreviousPage,
                        previousPage,
                        nextPage,
                        totalPages,
                        getPageItemProps
                    }) => (
                        <div>
                            <button
                                {...getPageItemProps({
                                    pageValue: 1,
                                    onPageChange: this.handlePageChange
                                })}
                            >
                                first
                            </button>

                            {hasPreviousPage && (
                                <button
                                    {...getPageItemProps({
                                        pageValue: previousPage,
                                        onPageChange: this.handlePageChange
                                    })}
                                >
                                    {"<"}
                                </button>
                            )}

                            {pages.map(page => {
                                let activePage = null;
                                if (currentPage === page) {
                                    activePage = { backgroundColor: "#fdce09" };
                                }
                                return (
                                    <button
                                        {...getPageItemProps({
                                            pageValue: page,
                                            key: page,
                                            style: activePage,
                                            onPageChange: this.handlePageChange
                                        })}
                                    >
                                        {page}
                                    </button>
                                );
                            })}

                            {hasNextPage && (
                                <button
                                    {...getPageItemProps({
                                        pageValue: nextPage,
                                        onPageChange: this.handlePageChange
                                    })}
                                >
                                    {">"}
                                </button>
                            )}

                            <button
                                {...getPageItemProps({
                                    pageValue: totalPages,
                                    onPageChange: this.handlePageChange
                                })}
                            >
                                last
                            </button>
                        </div>
                    )}
                </Pagination>
            </div>
        );
    }
}
