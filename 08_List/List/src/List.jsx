
function List(){
    const fruits = ["apple", "Orange", "banana", "Kiwi"];

    const ListItems = fruits.map(fruits => <li>{fruits}</li>);

    return(<ol>{ListItems}</ol>);
}

export default List;