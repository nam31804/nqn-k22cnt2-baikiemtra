
import NqnListUsers from './components/NqnListUsers';
import './App.css';
import axios from './api/nqnApi'
import { useEffect, useState } from 'react';

function NqnApp() {
  const [nqnListUsers,setNqnListUsers] = useState([]);
  const nqnGetAllUsers = async ()=>{
    const nqnResponse = await axios.get("nqnSinhVien");
    console.log("Api Data:",nqnResponse.data);
  }
  useEffect(()=>{
    nqnGetAllUsers();
    console.log("State Data", nqnListUsers);
  },[])
  const [NqnFormAddOrEdit, setNqnAddOrEdit] = useState(false);
  const nqnInitUser = {
    HoSV: "Nguyễn Quang",
    TenSV: "Nam",
    Phai: "Nam",
    NgaySinh: "31/08/2004",
    NoiSinh: "Hà Tây",
    MaKH: "5",
    HocBong: "Full",
    DiemTrungBinh: "55",
    MaSV: "2210900048"
  }
  const [nqnUser, setNqnUser] = useState(nqnInitUser);
  const nqnHandleAddNew = ()=>{
    setNqnAddOrEdit(true);
  }
  let nqnElementForm = NqnAddOrEdit===true?<NqnFormAddOrEdit renderUser/>:"";
  return (
    <div className="container border my-3">
      <h1>Danh Sach</h1>
      <NqnListUsers renderNqnListUsers={nqnListUsers}/>
      <button className='btn btn-primary' name='btnNqnThemMoi' onClick={nqnHandleAddNew}>Them moi</button>
      <hr/>
      {nqnElementForm}
    </div>
  );
}

export default NqnApp;
