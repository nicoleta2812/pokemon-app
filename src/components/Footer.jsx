function Footer({ nextPage, prevPage, prevUrl, nextUrl }) {
  return (
    <div className="btns">
      <button onClick={prevPage} disabled={!prevUrl}>
        Prev
      </button>
      <button onClick={nextPage} disabled={!nextUrl}>
        Next
      </button>
    </div>
  );
}

export default Footer;
