import React from 'react'

export const Header = (props) => {
    return (
        <div className="App-header">
            <div style={{ display: 'flex', alignItems: 'center', justifyContent:'center'}}>
                <div style={{flex: 2}}>
                    <img src={process.env.PUBLIC_URL + props.foto} alt="logo" style={{ borderRadius: 50, marginLeft:70 }} height={130} width={130} />
                </div>
                <div style={{ flex: 10}} className='header_container'>
                    <p style={{fontSize: 20}}>{props.about}</p>
                </div>
            </div>
        </div>
    )
}