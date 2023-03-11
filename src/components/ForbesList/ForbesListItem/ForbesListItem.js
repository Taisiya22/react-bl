import { FcBullish, FcBearish,  } from 'react-icons/fc';
import { AiFillDollarCircle } from "react-icons/ai";
import css from './ForbesListItem.module.css'
export const ForbesItem = ({userData: { id, name, avatar, capital, isIncrease } }) => { 
    return (<li className={css.item} key={ id}>
        <img className={css.avatar} src={avatar} />
        
        <p className={css.name}> {name}</p>
      <div className={css.wraper}>
        <p className={css.capital}>{capital}</p>
        <AiFillDollarCircle className={css.dolar}/>
            
        {isIncrease ? <FcBullish className={css.icon} /> : <FcBearish className={css.icon}/> }
       </div>
        </li>)
}