import { useParams } from "react-router-dom";
import useFetchGet from "../components/hooks/useFetchGet";
import Button from "../components/ui/Button";
import ArrowLeft from "../components/ui/icons/ArrowLeft";
import LoadingCircle from "../components/ui/icons/LoadingCircle";

const apiUrl = "https://restcountries.com/v3.1/alpha";

const Country = () => {
    const { name } = useParams();
    const { data, error, loading } = useFetchGet(`${apiUrl}/${name}?fields=name,flags,population,region,capital,subregion,capital,borders,continents,languages,tld`);

    if (loading) {
        return <div className="info-wrapper h-96">
            <div className="flex items-center">
                <LoadingCircle />
                <p className="ml-2">loading country...</p>
            </div>
        </div>
    }
    if (error) {
        return <div className="info-wrapper h-96">
            <p>error in loading data 🙁</p>
        </div>
    }

    return (
        <div className="pt-14 pb-10 px-4 md:px-14.5">
            <div className="flex">
                <Button href="/" leftIcon={<ArrowLeft />} >back</Button>
            </div>
            <div className="flex flex-col lg:flex-row mt-10 text-black dark:text-white-color">
                <div className="w-full lg:w-2/6">
                    <img src={data?.flags.svg} alt={data?.flags.alt} />
                </div>
                <div className="w-full lg:w-3/6 mt-5 col-span-3 lg:ml-10">
                    <h2 className="text-xl font-semibold mb-5">{data?.name.common}</h2>
                    <div className="flex flex-col lg:flex-row justify-between">
                        <div className="[&>*]:mb-3">
                            <p>
                                <span className="font-semibold">Native Name: </span>
                                <span>{data?.name?.nativeName[Object.keys(data.name?.nativeName)[0]].common}</span>
                            </p>
                            <p>
                                <span className='font-semibold'>Population: </span>
                                {data?.population.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                            </p>
                            <p>
                                <span className='font-semibold'>region: </span>
                                {data?.region}
                            </p>
                            <p>
                                <span className='font-semibold'>subregion: </span>
                                {data?.subregion}
                            </p>
                            <p>
                                <span className='font-semibold'>capital: </span>
                                {data?.capital.map(cap => <span key={cap}>{cap}</span>)}
                            </p>
                        </div>
                        <div className="[&>*]:mb-3">
                            <p>
                                <span className="font-semibold">Top Level Domain: </span>
                                <span>{data?.tld?.map(t => <span key={t}>{t}</span>)}</span>
                            </p>
                            <p>
                                <span className="font-semibold">Languages: </span>
                                <span>{data?.languages?.[Object.keys(data.name?.nativeName)[0]]}</span>
                            </p>
                        </div>
                    </div>
                    <div className="mt-10">
                        <p className="font-semibol ">Border Countries:</p>
                        <div className="flex flex-wrap [&>*]:mr-4 [&>*]:mt-4">
                            {data?.borders.map(border => <Button key={border} href={`/country/${border}`}>{border}</Button>)}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Country