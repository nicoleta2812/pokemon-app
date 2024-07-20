function Footer({ nextPage, prevPage }){
    return (
        <div className="btns">
            <button onClick={prevPage}>Prev</button>
            <button onClick={nextPage}>Next</button>
        </div>
    )
}

export default Footer