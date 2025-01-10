import { useState } from "react";
import "./Atributo.css";

type AtributoProps = {
    icone: string;
};

export default function Atributo({ icone }: AtributoProps){
    const [valor, setValor] = useState(3);

    function onMaisClick(){
        if (valor === 5){
            setValor(0);
        }
        else {
            setValor(valor + 1);
        }
    }
    
    return (
        <div className="atributo">
            <span>{icone.repeat(valor)}</span>
            <span className="inativo">{icone.repeat(5-valor)}</span>
            <button onClick={onMaisClick}>+</button>
        </div>
    );
}