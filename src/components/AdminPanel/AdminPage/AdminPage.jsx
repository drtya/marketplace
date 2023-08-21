import React, { useState } from 'react'
import Header from '../Header'
import FormCard from '../FormCard'


const AdminPage = ({setActive}) => {
    const [page, setPage] = useState('');
    console.log(page);
    return (
        <div>
            <Header setActive={setActive} setPage={setPage} />
            {
                page === 'Products' ?
                <div>product</div> :
                page === 'AddProduct' ?
                <FormCard/> :
                <></>
            }
        </div>
    )
}

export default AdminPage