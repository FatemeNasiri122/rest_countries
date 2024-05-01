import { useState } from "react";
import useFetchGet from "../components/hooks/useFetchGet";
import Input from "../components/ui/Input";
import Search from "../components/ui/icons/Search";
import Dropdown from "../components/ui/Dropdown";
import CountryCart from "../components/home/CountryCart";
import LoadingCircle from "../components/ui/icons/LoadingCircle";

const apiUrl = "https://restcountries.com/v3.1";

const Home = () => {
    const [countryInfo, setCpuntryInfo] = useState("all")
    const { data, error, loading } = useFetchGet(`${apiUrl}/${countryInfo}?fields=name,flags,population,region,capital,cca3`);
    const [search, setSearch] = useState("");

    return (
        <div className='py-10 px-4'>
            <div className="flex flex-col lg:flex-row justify-between">
                <div className="w-full lg:w-[450px]">
                    <Input
                        type="search"
                        value={search}
                        onchange={(e) => setSearch(e.target.value.toLowerCase())}
                        placeholder="Enter the name of country..."
                        leftIcon={<Search />}
                    />
                </div>
                <div className="w-full lg:w-[300px]">
                    <Dropdown
                        placeholder="Filter by Region"
                        options={[
                            { id: 0, option: "All", action: () => setCpuntryInfo("all") },
                            { id: 1, option: "Amaricans", action: () => setCpuntryInfo("region/Americas") },
                            { id: 2, option: "Asia", action: () => setCpuntryInfo("region/Asia") },
                            { id: 3, option: "Europe", action: () => setCpuntryInfo("region/europe") },
                            { id: 4, option: "Oceania", action: () => setCpuntryInfo("region/Oceania") },
                        ]} />
                </div>
            </div>
            {loading ? <div className="info-wrapper h-64">
                <div className="flex items-center">
                    <LoadingCircle />
                    <p className="ml-2">loading countries...</p>
                </div>
            </div> :
                error ? <div className="info-wrapper h-64">
                    <p className="ml-2">error in loading data 🙁</p>
                </div> : data?.length === 0 ? <div className="info-wrapper h-64">
                    <p>no data found 🙁</p>
                </div> :
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-10">
                        {search ? data?.filter((item) => item.name.common.toLowerCase().includes(search)).length === 0 ?
                            <p className="text-black dark:text-white-color">no data found 🙁</p> :
                            data?.filter((item) => item.name.common.toLowerCase().includes(search)).map((item) =>
                                <CountryCart key={item.name.official} item={item} />)
                            : data?.map(item => <CountryCart key={item.name.official} item={item} />)}
                    </div>}
        </div>
    )
}

export default Home