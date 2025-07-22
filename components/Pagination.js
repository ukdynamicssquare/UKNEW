import styles from "../styles/Home.module.css";

export const paginate = (items, pageNumber, pageSize) => {
  const startIndex = (pageNumber - 1) * pageSize;
  return items.slice(startIndex, startIndex + pageSize);
};

const Pagination = ({
  items,
  pageSize,
  currentPage,
  onPageChange,
  pageLimit = 5,
}) => {
  const pagesCount = Math.ceil(items / pageSize);
  if (pagesCount === 1) return null;

  const pages = Array.from({ length: pagesCount }, (_, i) => i + 1);

  let startPage = Math.max(1, currentPage - Math.floor(pageLimit / 2));
  let endPage = startPage + pageLimit - 1;

  if (endPage > pagesCount) {
    endPage = pagesCount;
    startPage = Math.max(1, endPage - pageLimit + 1);
  }

  const visiblePages = pages.slice(startPage - 1, endPage);

  return (
    <div className={styles.paginationWrapper}>
      <div className={styles.pagination}>
        {currentPage > 1 && (
          <>
            <button onClick={() => onPageChange(1)} className={styles.pageButton}>
              « First
            </button>
            <button onClick={() => onPageChange(currentPage - 1)} className={styles.pageButton}>
              ‹ Prev
            </button>
          </>
        )}

        {visiblePages.map((page) => (
          <button
            key={page}
            onClick={() => onPageChange(page)}
            className={
              page === currentPage
                ? `${styles.pageButton} ${styles.active}`
                : styles.pageButton
            }
          >
            {page}
          </button>
        ))}

        {currentPage < pagesCount && (
          <>
            <button onClick={() => onPageChange(currentPage + 1)} className={styles.pageButton}>
              Next ›
            </button>
            <button onClick={() => onPageChange(pagesCount)} className={styles.pageButton}>
              Last »
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default Pagination;
