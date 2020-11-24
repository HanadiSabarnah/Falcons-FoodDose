import React from 'react'

const OwnerProfile = ({ ownerRest }) => {
    
    return (
        <div className='Oprofile'>
            <img className='Oprofile__img' src='https://img.favpng.com/15/4/0/computer-icons-portable-network-graphics-avatar-icon-design-image-png-favpng-2yuryP2VsRRfdwGXfv9c4DfmA_t.jpg' alt='avatar' />
            <h3>Name</h3>
            <h3> Email </h3>
            {
                ownerRest.length !== 0 ? <div className='Oprofile__restaurant'>
                    <img src={ownerRest.Image} alt='image' style={{ width: '100px' }} />
                    <h3>{ownerRest.Name}</h3>
                    <h3>{ownerRest.Address}</h3>
                    <h3> {ownerRest.Phone} </h3>
                </div> : <div></div>
            }

        </div>
    )

}


export default OwnerProfile