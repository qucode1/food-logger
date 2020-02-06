const FoodItem = ({ name }) => {
    return (
        <li>
            <p>{name}</p>
            <style jsx>{`
                li {
                    list-style: none;
                }
            `}</style>    
        </li>
    )
}

export default FoodItem;