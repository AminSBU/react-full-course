function List(props){
    const itemList = props.items;
    const category = props.category;

    const ListItems = itemList.map(item => (
        <li key={item.id}>
            {item.name}: &nbsp; {item.calories}
        </li>
    ));

    return (
        <>
            <h2>{category}</h2>
            <ol>{ListItems}</ol>
        </>
    );
}

export default List;