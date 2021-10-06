import React, {useEffect, useState} from 'react';
import "./index.scss";
import userIcon from "../../images/userIcon.png";
import loadingIcon from "../../images/loading.png";

function Prescription () {

  const [userList, setUserList] = useState([{
    name: "임지영",
    phone: "010-6320-8161",
    medicines: [
      "가브스정 50 밀리그램(빌다클립틴)",
      "가리유리점안액(피레녹산)"
    ],
    time: "2021/10/07 11:00:00"
  }]);
  const [patients, setPatients] = useState([{
    name: "유진선",
    phone: "010-4479-8650",
    medicines: [
      "가스모틴정",
      "가브스정 50 밀리그램(빌다클립틴)",
      "가리유리점안액(피레녹산)"
    ],
    time: "2021/10/07 11:00:00"
  },{
    name: "김민재",
    phone: "010-5193-9519",
    medicines: [ "타이레놀" ],
    time: "2021/10/07 13:40:00"
  }]);

  const [medicineList, setMedicineList] = useState([
    "가브스정 50 밀리그램(빌다클립틴)",
    "가리유리점안액(피레녹산)"
  ]);
  const [userHighlight, setUserHighlight] = useState(0);

  const onClickSelect = () => {
    setUserList([...userList, patients[0]])
    const result = patients;
    result.splice(0,1);
    console.log("result: ",result);
    setPatients(result);
  }

  const onClickUnSelect = () => {
    setUserList([...userList])
    const result = patients;
    result.splice(0,1);
    console.log("result: ",result);
    setPatients(result);
  }

  useEffect(() => {
    console.log("patients: ",patients);
  },[patients])

  useEffect(() => {
    console.log("userList: ",userList);
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
              <div className="User_Icon">
                <img src={userIcon}/>
              </div>
              <div className="User">
                <div className="User_Name">{patients[0].name}</div>
                <div>{patients[0].phone}</div>
              </div>
            </div>
            <div className="Medicines">
              {patients[0].medicines.map(value => <div className="Medicine">{value}</div>)}
            </div>
            <div className="Button_Div">
              <div className="Button" onClick={onClickSelect}>조제 가능</div>
              <div className="Button" onClick={onClickUnSelect}>조제 불가능</div>
            </div></>) 
          : (
            <div className="loading_div">
              <div className="loading_text">환자를 기다리는 중...</div>
              <img className="loading" src={loadingIcon} color="#000000"/>
            </div>
            )}
      </div>
      <div className="List">
        <div className="List_Name">
          {userList.map((user,index) => 
            <div 
              key={index} 
              className= {userHighlight == index ? "Name_Selected" : "Name"}
              onClick={() => {
                setUserHighlight(index);
                setMedicineList(userList[index].medicines)
              }}
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
          <div className="Medicine_Complete" onClick={() => {
            setMedicineList(userList[userHighlight-1].medicines)
            setUserHighlight(userHighlight-1);
            const result = userList;
            result.splice(userHighlight, 1);
            setUserList(result);
          }}>조제 완료</div>
        </div>
      </div>
    </div>
  );
}

export default Prescription;