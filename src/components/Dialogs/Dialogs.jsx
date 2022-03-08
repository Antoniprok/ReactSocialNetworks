import { NavLink } from 'react-router-dom'
import s from './Dialogs.module.css'

const Dialog = (props) => {
  return (
    <>
      <div className={s.dialog}>
        <NavLink to={props.id}>{props.name}</NavLink>
      </div>
    </>
  )
}
const Massage = (props) => {
  return (
    <>
      <div className={s.massage}>{props.massage}</div>
    </>
  )
}

const Dialogs = () => {
  return (
    <div className={s.Dialogs}>
      <div className={s.dialogsItems}>
        <Dialog id="1" name="Masha" />
        <Dialog id="2" name="Sasha" />
        <Dialog id="3" name="Andrey" />
        <Dialog id="4" name="Sveta" />
        <Dialog id="5" name="Igor" />
        <Dialog id="6" name="Roman" />
      </div>
      <div className={s.massages}>
        <Massage massage="hi" />
        <Massage massage="how are you?" />
      </div>
    </div>
  )
}

export default Dialogs
