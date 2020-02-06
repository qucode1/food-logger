const FoodItemList = ({ children }) => {
    return (
        <ul>
            {children}
            <style jsx>{`
                ul {
                    padding: 0;
                }
            `}</style>
        </ul>
    )
}

export default FoodItemList;