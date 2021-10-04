import React, {useEffect, useState} from 'react';
import "./index.scss";
import userIcon from "../../images/userIcon.png";
import loadingIcon from "../../images/loading.png";

function Prescription () {

  const [userList, setUserList] = useState([]);
  const [patient, setPatient] = useState({
    name: "유진선",
    phone: "010-4479-8650",
    medicines: [
      "가스모틴정",
      "가브스정 50 밀리그램(빌다클립틴)",
      "가리유리점안액(피레녹산)"
    ]
  });

  const onClickSelect = () => {
    setUserList(...userList, patient)
    setPatient([]);
  }

  const onClickUnSelect = () => {
    setPatient([])
  }

  return (
    <div className="MainPage">
      <div className="Prescription">
        {patient?.medicines
          ? (
          <><div className="Prescription_Header">
              <img src={userIcon} />
              <div>
                <div>{patient.name}</div>
                <div>{patient.phone}</div>
              </div>
            </div>
            <div className="Medicines">
              {patient.medicines.map(value => <div className="Medicine">{value}</div>)}
            </div>
            <div className="Button_Div">
              <button className="Button" title="조제 가능" onClick={onClickSelect} />
              <button className="Button" title="조제 불가능" onClick={onClickUnSelect} />
            </div></>) 
          : (
            <div className="loading_div">
              <img className="loading" src={loadingIcon}/>
              <div className="loading_text">환자를 기다리는 중...</div>
            </div>
            )}
      </div>
      <div className="List">
        <div className="List_Name">
        </div>
        <div className="Medicine_List">
        </div>
      </div>
    </div>
  );
}

export default Prescription;