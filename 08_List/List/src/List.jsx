
function List(){
    const fruits = [{id: 1, name: "Apple",  calories: 90}, 
                    {id: 2, name: "Orange", calories: 50}, 
                    {id: 3, name: "Banana", calories: 99}, 
                    {id: 4, name: "Kiwi",   calories: 80}];

    const lowCalFruits = fruits.filter(fruits => fruits.calories < 95);

    const ListItems = lowCalFruits.map(lowCalFruits => <li key={lowCalFruits.id}>
                                                                {lowCalFruits.name}: &nbsp;
                                                                {lowCalFruits.calories}</li>);

    return(<ol>{ListItems}</ol>);
}

export default List;