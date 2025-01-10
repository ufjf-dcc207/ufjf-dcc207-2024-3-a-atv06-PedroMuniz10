import { useState } from "react";
import "./Emoji.css";

const EMOJIS = new Map<string, string>([
    ["happy", "🙂"],
    ["sick", "🤮"],
    ["dead", "😵"],
    ["crazy", "😵‍💫"],
]);

export default function Emoji(){
    const [situacao, setSituacao] = useState("happy");

    function toHappy(){
        console.log("toHappy()!");
        setSituacao("happy");
    }

    function toDead(){
        console.log("toDead()!");
        setSituacao("dead");
    }

    function toSick(){
        console.log("toSick()!");
        setSituacao("sick");
    }

    function toCrazy(){
        console.log("toCrazy()!");
        setSituacao("crazy");
    }

    return (
        <div className="emoji">
            <div className="situacao">{EMOJIS.get(situacao) || "🫥"}</div>
            <div className="acoes">
                <button onClick={toDead}>Morto</button>
                <button onClick={toHappy}>Vivo</button>
                <button onClick={toSick}>Doente</button>
                <button onClick={toCrazy}>Doido</button>
            </div>
        </div>
    );
}