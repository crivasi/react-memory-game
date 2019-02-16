import shuffle from 'lodash.shuffle';
import FontAwesomeClasses from './fontAwesomeClasses';

const NUMBER_OF_CARDS = 20;

export default () => {
    const fontAwesomeClasses = FontAwesomeClasses();
    let cards = [];

    while(cards.length < NUMBER_OF_CARDS) {
        const index = Math.floor(Math.random() * fontAwesomeClasses.length);
        const card = {
            icon: fontAwesomeClasses.splice(index,1)[0],
            discovered: false
        }
        
        cards.push(card);
        cards.push({...card}); //se esta clonando la carta
    }

    return shuffle(cards);
}