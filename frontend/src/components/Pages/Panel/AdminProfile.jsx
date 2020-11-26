import React from 'react'

const AdminProfile = ({name,email}) => {
    
    return (
        <div className='Aprofile'>
             <img className='Aprofile__img' src='https://img.favpng.com/15/4/0/computer-icons-portable-network-graphics-avatar-icon-design-image-png-favpng-2yuryP2VsRRfdwGXfv9c4DfmA_t.jpg' alt='avatar' />
            <h3>{name}</h3>
            <h3> {email} </h3>
        </div>
    )
}

export default AdminProfile