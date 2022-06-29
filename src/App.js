import React from 'react';
import logo from './logo.svg';
import './App.css';
import { apiclient } from './services/api';

function App() {
    const [list, setList] = React.useState([]);
    const fetch = async() => {
        const { data } = await apiclient.get();
        setList(data)
        console.log(data);
    }
    React.useEffect(() => {
        fetch()
    }, []);
    return ( <
        div className = "App" > {
            list.map((e, i) => {
                return <
                    div style = {
                        { padding: 10, backgroundColor: "green", margin: 5 }
                    } > < div > { e.title } < /div><div>{e.director}</div > <
                    /div>
            })
        } <
        /div>
    );
}

export default App;