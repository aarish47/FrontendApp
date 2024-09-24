const Spinner = () => {
    return (
        <div className="loadingSpinnerContainer" data-testid="outer-container">
            <div className="loadingSpinner" data-testid="inner-container"></div>
        </div>
    )
}

export default Spinner