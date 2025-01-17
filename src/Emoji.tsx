import { useState } from "react";
import "./Emoji.css";
import Atributo from "./Atributo";

const EMOJIS = new Map<string, string>([
    ["happy", "🙂"],
    ["sick", "🤮"],
    ["dead", "😵"],
    ["lazy", "😴"],
]);

export default function Emoji(){
    const [situacao, setSituacao] = useState("happy");
    const [saude, setSaude] = useState(4);
    const [energia, setEnergia] = useState(3);
    const [comida, setComida] = useState(2);
    const [agua, setAgua] = useState(1);
    const [luz, setLuz] = useState(true);

    function onHidratar(){
        if(agua<5){
            setAgua(Math.min(agua + 1, 5));
        }
    }

    function onAlimentar(){
        if(comida<5){
            setComida(Math.min(comida + 1, 5));
        }
    }

    function onLigaDesligaLuz(){
        setLuz(!luz);
    }

    function onCiclo(){
        if(comida>0 && agua>0 && !luz){
            setSaude(Math.min(5, saude + 1));
        }
        setComida(Math.max(0, comida - 1));
        setAgua(Math.max(0, agua - 1));
        if(luz){
            setEnergia(Math.max(0, energia - 1));
        } else {
            setEnergia(Math.min(5, energia + 1));
        }
        if(comida === 0){
            setSaude((s) => Math.max(0, s - 1));
        }
        if(agua === 0){
            setAgua((s) => Math.max(0, s - 1));
        }
        if(energia === 0){
            setSaude((s) => Math.max(0, s - 1));
        }
    }

    return (
        <div className="emoji">
            <div className="situacao">{EMOJIS.get(situacao) || "🫥"}</div>
            <div className="atributos">
                <Atributo icone="❤️" valor={saude} />
                <Atributo icone="⚡" valor={energia} />
                <Atributo icone="🍗" valor={agua} />
                <Atributo icone="💧" valor={comida} />
            </div>
            <div className="acoes">
                <button onClick={onAlimentar}>Dar comida</button>
                <button onClick={onHidratar}>Dar água</button>
                <button onClick={onLigaDesligaLuz}>Ligar / Desligar luz</button>
                <button onClick={onCiclo}>Ciclo</button>
            </div>
        </div>
    );
}