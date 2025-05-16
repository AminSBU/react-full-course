
function List(){
    const fruits = [{id: 1, name: "Apple",  calories: 90}, 
                    {id: 2, name: "Orange", calories: 50}, 
                    {id: 3, name: "Banana", calories: 99}, 
                    {id: 4, name: "Kiwi",   calories: 80}];

    const ListItems = fruits.map(fruits => <li key={fruits.id}>
                                                                {fruits.name}: &nbsp;
                                                                {fruits.calories}</li>);

    return(<ol>{ListItems}</ol>);
}

export default List;