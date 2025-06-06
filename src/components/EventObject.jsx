const EventObject = () => {
    const handleClickButton = (e) => {
        console.log(e);
    }
    return(
        <div>
            <button onClick={handleClickButton}>Click Me!</button>
        </div>
    )
}

export default EventObject;