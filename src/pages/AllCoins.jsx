import React from 'react'
import CoinCard from '../components/CoinCard'
import { useSelector } from 'react-redux'

const AllCoins = () => {

  const { coins, isLoading, isSuccess, isError } = useSelector((state) => state.coin)
  

  if (isError) {
    return (
      <h1 className="text-center font-extrabold  my-10  text-red-400 uppercase">
       404 coin not found.....
      </h1>
    );
  }

  if (isLoading) {
    return (
      <h1 className="text-center font-extrabold my 10 text-gray-500 uppercase">
        search...
      </h1>
    );
  }



  return (
    <>
     <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4">
     {coins.map((coin, index) => (
  <CoinCard key={coin.id} coin={coin} index={index} />
))}
</div>

          
    </>
  )
}

export default AllCoins