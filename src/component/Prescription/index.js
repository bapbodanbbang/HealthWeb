import React, {useEffect, useState} from 'react';
import "./index.scss";
import userIcon from "../../images/userIcon.png";
import loadingIcon from "../../images/loading.png";

function Prescription () {

  const [userList, setUserList] = useState([]);
  const [patients, setPatients] = useState([{
    name: "유진선",
    phone: "010-4479-8650",
    medicines: [
      "가스모틴정",
      "가브스정 50 밀리그램(빌다클립틴)",
      "가리유리점안액(피레녹산)"
    ]
  },{
    name: "김민재",
    phone: "010-5193-9519",
    medicines: [ "타이레놀" ]
  }]);

  const [medicineList, setMedicineList] = useState([]);
  const [userHighlight, setUserHighlight] = useState(0);

  const onClickSelect = () => {
    setUserList([...userList, patients[0]])
    patients.splice(0,1)
    setPatients(patients);
  }

  const onClickUnSelect = () => {
    patients.splice(0,1)
    setPatients(patients)
  }

  useEffect(() => {
  },[userList])

  useEffect(() => {
    console.log("medicineList: ",medicineList);
  },[medicineList])

  useEffect(() => {
  },[userHighlight])

  return (
    <div className="MainPage">
      <div className="Prescription">
        {patients.length
          ? (
          <><div className="Prescription_Header">
              <img src={userIcon} />
              <div>
                <div>{patients[0].name}</div>
                <div>{patients[0].phone}</div>
              </div>
            </div>
            <div className="Medicines">
              {patients[0].medicines.map(value => <div className="Medicine">{value}</div>)}
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
          {userList.map((user,index) => 
            <div 
              key={index} 
              className="Name"
              onClick={() => setMedicineList(userList[index].medicines)}
            >
              {user.name}
            </div>)
          }
        </div>
        <div className="Medicine_List">
          <div className="Medicine_Title">환자 요청</div>
          {medicineList.map((medicine, index) => 
            <div key={index} className="MakeMedicine">{medicine}</div>
          )}
          <div className="Medicine_Complete">조제 완료</div>
        </div>
      </div>
    </div>
  );
}

export default Prescription;