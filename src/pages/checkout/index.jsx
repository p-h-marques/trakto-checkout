import React, {useContext, useEffect} from 'react'

import Context from '../../state/Context'

const Checkout = () => {
    const {state} = useContext(Context)

    useEffect(()=>{
        console.log(state)
    }, [])

    return (
        <div>
            Checkout!
        </div>
    )
}

export default Checkout
