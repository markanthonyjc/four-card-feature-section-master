import style from './Card.module.scss'

const Card = ({title, description, icon, modifier}) => {
  return <div className={`${style.card} ${style[`card--${modifier}`]}`}>
    <div className={style.summary}>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
    <div className={style.image}>
      {icon && <img src={icon} alt="A magnifying glass with an eye inside"/>}
    </div>
  </div>
}

export default Card
