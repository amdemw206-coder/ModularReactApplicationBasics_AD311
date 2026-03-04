import {ButtonComponent} from './SharedComponents'; 

export function ContentB(){
    return(
        <div>
            <h2>Content Component B</h2>
            <p>This component was exported using a <strong>named export</strong>.</p>
             <ButtonComponent />
        </div>       
    );
}