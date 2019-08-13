import React from "react";
import Pagination from "react-paginating";
import HomeItem from "../ItemList/HomeItem";
import HomeList from "../ItemList";
import "./Pagination.css";

const limit = 3;

export default class PaginationApp extends React.Component {
    render() {
        const { data, pageCount, handlePageChange, currentPage } = this.props;
        const total = data.length * limit;

        console.log("data is ->", data);
        return (
            <div>
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
                        <div className="pagination">
                            <button
                                {...getPageItemProps({
                                    pageValue: 1,
                                    onPageChange: handlePageChange
                                })}
                            >
                                First
                            </button>

                            {hasPreviousPage && (
                                <button
                                    {...getPageItemProps({
                                        pageValue: previousPage,
                                        onPageChange: handlePageChange
                                    })}
                                >
                                    {"<"}
                                </button>
                            )}

                            {pages.map(page => {
                                let activePage = null;
                                if (currentPage === page) {
                                    activePage = {
                                        backgroundColor: "#4285f4",
                                        color: "white"
                                    };
                                }
                                return (
                                    <button
                                        {...getPageItemProps({
                                            pageValue: page,
                                            key: page,
                                            style: activePage,
                                            onPageChange: handlePageChange
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
                                        onPageChange: handlePageChange
                                    })}
                                >
                                    {">"}
                                </button>
                            )}

                            <button
                                {...getPageItemProps({
                                    pageValue: totalPages,
                                    onPageChange: handlePageChange
                                })}
                            >
                                Last
                            </button>
                        </div>
                    )}
                </Pagination>
                {!data[currentPage - 1] ? (
                    <section className="item-list">
                        <div>Nothing to show :(</div>
                    </section>
                ) : (
                    <HomeList data={data[currentPage - 1]} />
                )}
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
                        <div className="pagination">
                            <button
                                {...getPageItemProps({
                                    pageValue: 1,
                                    onPageChange: handlePageChange
                                })}
                            >
                                First
                            </button>

                            {hasPreviousPage && (
                                <button
                                    {...getPageItemProps({
                                        pageValue: previousPage,
                                        onPageChange: handlePageChange
                                    })}
                                >
                                    {"<"}
                                </button>
                            )}

                            {pages.map(page => {
                                let activePage = null;
                                if (currentPage === page) {
                                    activePage = {
                                        backgroundColor: "#4285f4",
                                        color: "white"
                                    };
                                }
                                return (
                                    <button
                                        {...getPageItemProps({
                                            pageValue: page,
                                            key: page,
                                            style: activePage,
                                            onPageChange: handlePageChange
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
                                        onPageChange: handlePageChange
                                    })}
                                >
                                    {">"}
                                </button>
                            )}

                            <button
                                {...getPageItemProps({
                                    pageValue: totalPages,
                                    onPageChange: handlePageChange
                                })}
                            >
                                Last
                            </button>
                        </div>
                    )}
                </Pagination>
            </div>
        );
    }
}
