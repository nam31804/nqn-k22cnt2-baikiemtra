import React from 'react'

export default function NqnListUsers({renderNqnListUsers}) {
    console.log("NqnListUsers:",renderNqnListUsers);
    let nqnElementUser = renderNqnListUsers.map((nqnUser,index)=>{
        return(
            <>
             <tr>
                <td>{nqnUser.MaSV}</td>
                <td>{nqnUser.HoSV}</td>
                <td>{nqnUser.TenSV}</td>
                <td>{nqnUser.Phai}</td>
                <td>{nqnUser.NgaySinh}</td>
                <td>{nqnUser.NoiSinh}</td>
                <td>{nqnUser.HocBong}</td>
                <td>{nqnUser.DiemTrungBinh}</td>
                <td>...</td>
                

             </tr>
            </>
        )
})
  return (
    <div className='row'>
        <div className='col-md-12'>
        <table className='table table-bordered'>
            <thead>
                <tr>
                    <th>MaSV</th>
                    <th>HoSV</th>
                    <th>TenSV</th>
                    <th>Phai</th>
                    <th>NgaySinh</th>
                    <th>NoiSinh</th>
                    <th>MaKH</th>
                    <th>Hoc Bong</th>
                    <th>DiemTrungBinh</th>
                    <th>ChucNang</th>
                </tr>
            </thead>
            <tbody>
                {nqnElementUser}
            </tbody>
        </table>
        </div>
    </div>
  )
}