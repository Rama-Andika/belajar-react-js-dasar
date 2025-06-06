const EventPropagation = () => {
    return(
        <div onClick={() => alert("Click Me 1")}>
            <button onClick={(e) => {
                e.stopPropagation(); // Prevents the click event from bubbling up to the parent div
                alert("Click Me 2");
            }}>Click Me!</button>
        </div>
    )
}

export default EventPropagation;