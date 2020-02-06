import { useState } from "react";

import Layout from '../components/Layout';
import FoodItemList from '../components/FootItemList';
import FoodItem from '../components/FootItem';

const About = () => {
    const [foodItemList, setNewFoodItemList] = useState([]);
    const [newFoodItem, setNewFoodItem] = useState('');

    const handleInputChange = e => {
        setNewFoodItem(e.target.value)
    }

    const addFoodItem = e => {
        e.preventDefault();
        setNewFoodItemList([...foodItemList, newFoodItem]);
        setNewFoodItem('');
    }

    return (
        <Layout>
            <h1 className="title">Food items</h1>
            <FoodItemList>
                {foodItemList.map((foodItem, index) => (
                    <FoodItem key={`${foodItem}-${index}`} name={foodItem} />
                ))}
            </FoodItemList>
            <form className="newFoodItemForm">
                <label className="new-food-item__label" htmlFor="newFoodItem">New Food Item:</label>
                <input className="new-food-item__input" id="newFoodItem" type="text" onChange={handleInputChange} value={newFoodItem} />
                <button className="new-food-item__button" onClick={addFoodItem}>Add</button>
            </form>
            
            <style jsx>{`
                .title {
                    margin-top: 0;
                    width: 100%;
                    padding-top: 80px;
                    line-height: 1.15;
                    font-size: 48px;
                }
                
                .new-food-item__label {
                    display: block;
                    margin-bottom: 1rem;
                }

                .new-food-item__input {
                    padding: 0.2rem;
                }

                .new-food-item__button {
                    cursor: pointer;
                }
            `}</style>
        </Layout>
    )
}

export default About;