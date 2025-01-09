
import clicked from './mouse-click.mp3';

const playSound = ()=>{
        const audio = new Audio(clicked);
        audio.play();
}

export default playSound;

