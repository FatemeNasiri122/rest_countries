import { Link } from 'react-router-dom';

const CountryCart = ({ item }) => {
    return (
        <Link to={`/country/${item.cca3}`}>
            <div className="bg-white-color dark:bg-dark-color text-black dark:text-white-color rounded-md shadow-cart dark:shadow-dark-cart">
                <div className='w-full h-48'>
                    <img src={item.flags.svg} alt={item.flags.alt} className='w-full h-full' />
                </div>

                <div className="py-5 px-4">
                    <p className='font-semibold mb-4 text-lg'>{item.name.common}</p>
                    <div className="[&>*]:mb-1">
                        <p>
                            <span className='font-semibold'>Population: </span>
                            {item.population.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                        </p>
                        <p>
                            <span className='font-semibold'>Region: </span>
                            {item.region}
                        </p>
                        <p>
                            <span className='font-semibold'>Capital: </span>
                            {item.capital.map(cap => <span key={cap}>{cap} </span>)}
                        </p>
                    </div>

                </div>
            </div>
        </Link>
    )
}

export default CountryCart;