import React from 'react'

export default function NqnFormAddOrEdit() {
  return (
    <div className='border'>
        <form>
            <div className='input-group mb-3'>
                <span className='input-group-text' id='MaSV'>MaSV</span>
                <input type='text' class='form-control'
                name='MaSV' value={''}
                placeholder='MaSV' aria-label='MaSV' aria-describedby='MaSV'/>
            </div>
            <div className='input-group mb-3'>
                <span className='input-group-text' id='HoSV'>HoSV</span>
                <input type='text' class='form-control'
                name='HoSV' value={''}
                placeholder='HoSV' aria-label='HoSV' aria-describedby='HoSV'/>
            </div>
            <div className='input-group mb-3'>
                <span className='input-group-text' id='Phai'>Phai</span>
                <input type='text' class='form-control'
                name='Phai' value={''}
                placeholder='Phai' aria-label='Phai' aria-describedby='Phai'/>
            </div>
            <div className='input-group mb-3'>
                <span className='input-group-text' id='NgaySinh'>NgaySinh</span>
                <input type='text' class='form-control'
                name='NgaySinh' value={''}
                placeholder='NgaySinh' aria-label='NgaySinh' aria-describedby='NgaySinh'/>
            </div>
            <div className='input-group mb-3'>
                <span className='input-group-text' id='MaKH'>MaKH</span>
                <input type='text' class='form-control'
                name='MaKH' value={''}
                placeholder='MaKH' aria-label='MaKH' aria-describedby='MaKH'/>
            </div>
            <div className='input-group mb-3'>
                <span className='input-group-text' id='HocBong'>HocBong</span>
                <input type='text' class='form-control'
                name='HocBong' value={''}
                placeholder='HocBong' aria-label='HocBong' aria-describedby='HocBong'/>
            </div>
            <div className='input-group mb-3'>
                <span className='input-group-text' id='DiemTrungBinh'>DiemTrungBinh</span>
                <input type='text' class='form-control'
                name='DiemTrungBinh' value={''}
                placeholder='DiemTrungBinh' aria-label='DiemTrungBinh' aria-describedby='DiemTrungBinh'/>
            </div>
            <button className='btn btn-primary' name='btnNqnSave'>Ghi lai</button>
        </form>
    </div>
  )
}

