import styles from './button.module.css'
import { useState } from "react";

export default function button() {
    const [color, changeColor] = useState("#ffe5cc");

    return (
        <div>
            <button onClick={() => changeColor("#502F0E")} className={styles.button}> More info</button>
            <p style={{color}}>Develop your skills with a dedicated Career Services Department and access top employers.
             Get a quality education from top-ranked university in Vancouver, BC. Apply to <b>Future college today</b>.
             The applications are first come first serve.</p>    
              
            <div style={{ backgroundColor: `${color}`, inlineHeight:10, padding: 10}}></div>
            </div>
    )
}


