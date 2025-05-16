
function List(){
    const fruits = ["Apple", "Orange", "Banana", "Kiwi"];

    fruits.sort();

    const ListItems = fruits.map(fruits => <li>{fruits}</li>);

    return(<ol>{ListItems}</ol>);
}

export default List;