import React, {useEffect, useState} from "react";
import axios from "axios";
import AddItemFrom from "./AddItemFrom";
import Item from "./Item";

const BASE_URL = 'http://localhost:3001/api/items';
const TodoList = () => {
    const [items, setItems] = useState([]);
    axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';
    axios.defaults.headers.post['Content-Type'] = 'application/json';

    useEffect(() => {
        axios
            .get(BASE_URL).then((res) => {
            setItems(res.data.items)
        });
    }, []);
    const onItemCreate = async (newItem) => {
        const response = await axios.post(BASE_URL, {name: newItem});
        setItems([
            ...items,
            {name: newItem, completed: false, id: response.data.id}
        ]);
    };

    const onItemDelete = async (item) => {
        await axios.delete(`${BASE_URL}/${item.id}`);
        const index = items.findIndex((i) => i.id === item.id);
        setItems([...items.slice(0, index), ...items.slice(index + 1)]);
    };

    if (items === null) return <div>loading</div>;

    return (
        <div>
            <AddItemFrom onItemCreate={onItemCreate}/>
            {items.map((item) => (

                <Item key={item.id} item={item}
                      onItemDelete={onItemDelete}/>
            ))}
        </div>
    );
};


export default TodoList;