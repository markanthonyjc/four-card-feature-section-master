import style from './Card.module.scss'

const Card = ({title, description, icon, modifier}) => {
  return <div className={`${style.card} ${style[modifier]}`}>
    <div className={style.summary}>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
    <div className={style.image}>
      {icon && <img src={icon} alt=""/>}
    </div>
  </div>
}

export default Card
