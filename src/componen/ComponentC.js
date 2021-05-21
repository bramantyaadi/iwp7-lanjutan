import React, { useContext } from 'react';
import { Button, ButtonGroup, Badge } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { CounterContext } from '../App';


const ComponentC = () => {
    const countercontext = useContext(CounterContext);
    console.log(countercontext);
    const { counter1, dispatch } = countercontext;
    return (
        <div>
            <ButtonGroup>
                <Button color="primary" outline>
                    Counter 1 <Badge color="secondary">{counter1}</Badge>
                </Button>
            </ButtonGroup>
            <ButtonGroup>
                <Button color="dark" onClick={() => dispatch({ type: "tambah", payload: 1 })} >Tambah</Button>
                <Button color="dark" onClick={() => dispatch({ type: "kurang", payload: 1 })} >Kurangi</Button>
                <Button color="danger" onClick={() => dispatch({ type: "reset" })} >Reset</Button>
            </ButtonGroup>
        </div>
    )
}

export default ComponentC