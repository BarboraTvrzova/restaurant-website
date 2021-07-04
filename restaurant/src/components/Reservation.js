
import React, {useState, useEffect} from 'react'
import "./Reservation.css"
import plus from "../images/icons/icon-plus.svg"
import minus from "../images/icons/icon-minus.svg"

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import moment from "moment"




const Reservation = () => {
  const[people, setPeople] = useState(2)
  const [customerInfo, setCustomerInfo] = useState({
    name: "",
    mail: "",
    date: {
      day: "",
      month: "",
      year: ""
    },
    time: {
      hour: "",
      minutes: "",
      ampm: ""
    },
    ppl: people
  })
  const [wrongName, setWrongName] = useState(false)
  const [wrongMail, setWrongMail] = useState(false)
  const [invalidMail, setInvalidMail] = useState("")
  const [wrongTime, setWrongTime] = useState(false)
  const [wrongDay, setWrongDay] = useState(false)
  const [disabled, setDisabled] = useState(true)


  // The full computed date format
  const [startDate, setStartDate] = useState("");
  const [startTime, setStartTime] = useState("");
  

  useEffect(()=>{
    disable()
  },[customerInfo])


  const disable = () => {
    if(customerInfo.name && customerInfo.mail && customerInfo.date.day && customerInfo.date.month && customerInfo.date.year && customerInfo.time.hour&& customerInfo.time.minutes && customerInfo.time.ampm) {
      setDisabled(false)
    } 
    else {
      setDisabled(true)
    }
  }
  
  const submit = (e) => {
    e.preventDefault()
    document.querySelector(".thanks").classList.remove("hiden")
     
  }

  const ValidateEmail = (mail) => {
    if (mail&&/\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/.test(mail)) {
      return (true)
    } else {
      document.querySelector(".mail").classList.add("wrong-mail")
      setWrongMail(true)
      setInvalidMail("invalid") 
    }
  }
 

  
  const returnfuckinDate = (date) => {
   console.log(moment(date).format("DD-MM-YYYY"), "hello");
   setStartDate(date)
   setCustomerInfo({...customerInfo, date:{...customerInfo.date, day:moment(date).format("DD"), month:moment(date).format("MM"), year:moment(date).format("YYYY")}});
 }

  const returnTime = (date) => {
   setStartTime(date)
   setCustomerInfo({...customerInfo, time:{...customerInfo.time, hour:moment(date).format("hh"), minutes:moment(date).format("mm"), ampm:moment(date).format("a")}});

 }

  const setMinTime = () => {
    if(startDate === new Date()) {
      return new Date().setHours(new Date.getTime())
    } else {new Date().setHours(9,0)}
  }



  return (
    <form className="form" onSubmit={(e)=>{submit(e)}}>
      <div className="thanks hiden">
          <h2>Thank you</h2>
          <p>Your request have been submited. We will send a confirmation on your email shortly.</p>
          <h4>Requested reservation</h4>
          <h3>Name: <span>{customerInfo.name}</span></h3>
          <h3>Email: <span>{customerInfo.mail}</span></h3>
          <h3>Date: <span>{`${customerInfo.date.day}.${customerInfo.date.month}.${customerInfo.date.year}`}</span></h3>
          <h3>Time: <span>{`${customerInfo.time.hour}:${customerInfo.time.minutes} ${customerInfo.time.ampm}`}</span></h3>
          <h3>Number of guests: <span>{people}</span></h3>
        </div>
      <div className={wrongName? "red input-field":"input-field"}>
        <input  type="text" className="form-field" placeholder="Name" value={customerInfo.name} onChange={(e)=>{setCustomerInfo({...customerInfo, name: e.target.value})}} onBlur={(e)=>{ e.target.value===""?setWrongName(true):setWrongName(false)}}/>
      </div>
      <div className={wrongMail? `${invalidMail} mail red input-field`:"mail input-field"}>
        <input  type="text" value={customerInfo.mail} onChange={(e)=>{setCustomerInfo({...customerInfo, mail: e.target.value})}} className="form-field" placeholder="Email" onBlur={(e)=>{
          if(customerInfo.mail==="") {setWrongMail(true)} else {setWrongMail(false); ValidateEmail(e.target.value)}}}/>
      </div>
      <div className={wrongDay?"pick-date wrong" : "pick-date"}>Pick a date 
        <div className="inputs">
          <div className="input-field">
            <DatePicker selected={startDate}  placeholderText="DD" dateFormat="dd" onChange={(date)=>returnfuckinDate(date)} minDate={new Date()}/>
          </div>
      
          <div className="input-field">
            <DatePicker selected={startDate} placeholderText="MM" dateFormat="MM" onChange={(date)=>returnfuckinDate(date)} minDate={new Date()}
           />
          </div>
          <div className="input-field">
            <DatePicker  selected={startDate} placeholderText="YYYY" dateFormat="yyyy" onChange={(date)=>returnfuckinDate(date)} minDate={new Date()}/>
          </div>
        </div>     
      </div>
      <div className={wrongTime?"pick-time wrong" : "pick-time"}>Pick a time
        <div className="inputs">         
          <div className="input-field">
            <DatePicker
              selected={startTime}
              placeholderText="09"
              onChange={(date) => returnTime(date)}
              showTimeSelect
              showTimeSelectOnly
              timeIntervals={30}
              timeCaption="Time"
              dateFormat="hh"
              minTime={setMinTime}
              maxTime={new Date().setHours(23,0)}
            />
          </div>
          <div className="input-field">
            <DatePicker
              selected={startTime}
              placeholderText="00"
              onChange={(date) => returnTime(date)}
              showTimeSelect
              showTimeSelectOnly
              timeIntervals={30}
              timeCaption="Time"
              dateFormat="mm"
              minTime={new Date().setHours(9,0)}
              maxTime={new Date().setHours(23,0)}
            />
          </div>
          <div className="input-field">
            <DatePicker
              selected={startTime}
              placeholderText="AM"
              onChange={(date) => returnTime(date)}
              showTimeSelect
              showTimeSelectOnly
              timeIntervals={30}
              timeCaption="Time"
              dateFormat="aa"
              minTime={new Date().setHours(9,0)}
              maxTime={new Date().setHours(23,0)}
            />
          </div>
        </div>
      </div>
      <div className="people form-field">
        <img src={minus} alt="" className={people <2 ? "minus disabled" : "minus"} onClick={()=>{people > 1 ? setPeople(people-1):setPeople(1)}}/>
        {`${people} ${people===1? "person":"people"}`}
        <img src={plus} alt="" className="plus"
        onClick={()=>{setPeople(people + 1)}}/>
      </div>
      <input className="btn btn-reserve" value="Make reservation" type="submit" disabled={disabled}/>
    </form>
  )
}

export default Reservation
