
function List(){
    const fruits = ["apple", "Orange", "banana", "Kiwi"];

    const ListItems = fruits.map(fruits => <li>{fruits}</li>);

    return(<ul>{ListItems}</ul>);
}

export default List;