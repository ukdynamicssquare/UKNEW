'use client';
import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";

const BlogSearchInner = () => {
    const [query, setQuery] = useState("");
    const [allResults, setAllResults] = useState([]);
    const [visibleResults, setVisibleResults] = useState([]);
    const [loading, setLoading] = useState(false);
    const [loadCount, setLoadCount] = useState(9);
    const [showDropdown, setShowDropdown] = useState(false);

    const searchRef = useRef(null);

    // Debounced search
    useEffect(() => {
        const delayDebounce = setTimeout(() => {
            if (query.trim().length > 2) {
                fetchResults(query);
                setShowDropdown(true);
            } else {
                clearResults();
            }
        }, 500);
        return () => clearTimeout(delayDebounce);
    }, [query]);

    // Close on outside click
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (searchRef.current && !searchRef.current.contains(event.target)) {
                setShowDropdown(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    const fetchResults = async (searchTerm) => {
        setLoading(true);
        try {
            const res = await fetch(
                `https://blognew.dynamicssquare.co.uk/api/blogsearch/${encodeURIComponent(searchTerm)}`
            );
            const data = await res.json();
            const results = data || [];
            setAllResults(results);
            setVisibleResults(results.slice(0, 9));
            setLoadCount(9);
        } catch (err) {
            console.error("Search error:", err);
            clearResults();
        } finally {
            setLoading(false);
        }
    };

    const clearResults = () => {
        setAllResults([]);
        setVisibleResults([]);
        setLoadCount(9);
        setShowDropdown(false);
    };

    const handleLoadMore = () => {
        const nextCount = loadCount + 9;
        setVisibleResults(allResults.slice(0, nextCount));
        setLoadCount(nextCount);
    };

    const handleFocus = () => {
        if (query.trim().length > 2 && allResults.length > 0) {
            setShowDropdown(true);
        }
    };

    return (
        <div className="search-wrp-inner">
            <div className="container" ref={searchRef}>
                <div className="row justify-content-center">
                    <div className="col-lg-9">
                        <div className="searc-sty">
                            <div className="input-group mb-3">
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Search blog..."
                                    value={query}
                                    onChange={(e) => setQuery(e.target.value)}
                                    onFocus={handleFocus}
                                />
                                <button
                                    className="btn btn-primary"
                                    onClick={() => {
                                        if (query.trim().length > 2) {
                                            fetchResults(query);
                                            setShowDropdown(true);
                                        }
                                    }}
                                >
                                    <i className="bi bi-search"></i>
                                </button>
                            </div>
                        </div>

                        {query.length > 2 && showDropdown && (
                            <div className="my-searc">
                                <div className="searc-result">
                                    <div className="text-end">
                                        <button
                                            onClick={clearResults}
                                            className="btn-close mb-2"
                                            aria-label="Close"
                                        ></button>
                                    </div>

                                    {loading && <div>Loading...</div>}

                                    {!loading && visibleResults.length > 0 && (
                                        <div className="row">
                                            {visibleResults.map((blog, index) => (
                                                <div className="col-md-4 col-lg-4 col-6 mb-4" key={index}>
                                                    <div className="card h-100 shadow-sm">
                                                        <a href={`/blog/${blog.title_slug}`}>
                                                            <Image
                                                                src={blog.image}
                                                                alt={blog.title}
                                                                className="card-img-top"
                                                                style={{ height: "350px", objectFit: "cover" }}
                                                                width={600}
                                                                height={350}
                                                            />
                                                            <div className="card-body d-flex flex-column">
                                                                <h5 className="card-title">
                                                                    {blog.title.length > 60
                                                                        ? blog.title.slice(0, 60) + "..."
                                                                        : blog.title}
                                                                </h5>
                                                                <span>Read More</span>
                                                            </div>
                                                        </a>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    )}

                                    {!loading && visibleResults.length === 0 && (
                                        <p>No blog found for "{query}"</p>
                                    )}

                                    {!loading &&
                                        visibleResults.length < allResults.length &&
                                        visibleResults.length > 0 && (
                                            <div className="text-center mt-3">
                                                <button className="btn btn-secondary" onClick={handleLoadMore}>
                                                    Load More
                                                </button>
                                            </div>
                                        )}
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BlogSearchInner;
