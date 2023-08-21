import React from 'react'

const FormCard = () => {
  return (
    <form style={{display:'flex', alignItems:'center',flexDirection:'column',gap:'16px',maxWidth:'440px',position:'fixed',left:'50%',top:'50%',transform:'translate(-50%,-50%)', padding:'22px', border:'1px solid black',borderRadius:'15px',boxShadow:'0 0 15px gray'}}>
        <h3>Создать продукт</h3>
        <input style={{padding:'6px 14px'}} type="text" placeholder='Наименование товара'/>
        <input style={{padding:'6px 14px'}} type="text" placeholder='Описание товара'/>
        <input style={{padding:'6px 14px'}} type="text" placeholder='Цена товара'/>
        <input style={{padding:'6px 14px'}} type="text" placeholder='Количество товара'/>
        <input style={{padding:'6px 14px'}} type="text" placeholder='URL-изображения'/>
        <button type='submit' style={{padding:'6px 20px'}}>Создать</button>
    </form>
  )
}

export default FormCard