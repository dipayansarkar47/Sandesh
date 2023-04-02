import React, { useState } from 'react'

const MsgForm = () => {
    const [name, setName] = useState("");
    return (
        <div className='bg-black absolute bottom-0 w-full'>
            <form className='w-full'>

                <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />

            </form>
        </div>
    )
}

export default MsgForm