import {Card} from './Card'
import React from 'react'
import style from './cards.module.css'

export const Cards = ({result, addProduct, deleteProduct}) => {
  return (
    <div className={style.wrapper}>
        {
            result?.map( card => {
                return(
                    <div>
                        <Card deleteProduct={deleteProduct} addProduct={addProduct} key={card?.id} description={card.description} image={card?.image} productName={card?.name} price={card?.priceInfo?.linePrice}/>
                    </div>
                        // <p>gola</p>
                )
            })
        }
    </div>
  )
}
