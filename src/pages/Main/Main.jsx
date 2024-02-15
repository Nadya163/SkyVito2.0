import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import * as S from "./Main.style";
import Cards from "../../components/Array/Cards/Cards";
import Search from "../../components/Search/Search";
import { useGetAllAdsQuery } from "../../ApiService/ApiAds";
import {
    selectSearchItem,
    selectTimestamp,
} from "../../Store/Selector/Selector";
import { formatDate } from "../../Store/Redux/DataSlise";
import { setAllAds } from "../../Store/Redux/AdsSlice";

export default function Main() {
    const dispatch = useDispatch();
    const { data } = useGetAllAdsQuery();
    const timestamp = useSelector(selectTimestamp);
    formatDate(timestamp);
    const searchItem = useSelector(selectSearchItem);

    useEffect(() => {
        dispatch(setAllAds(data));
    }, []);

    const searchItemAds = data?.filter((item) => {
        const matchesTitle = item.title
            .toLowerCase()
            .includes(searchItem.toLowerCase());
        const matchesCity = item.user.city
            .toLowerCase()
            .includes(searchItem.toLowerCase());

        return matchesTitle || matchesCity;
    });

    // console.log(data);

    return (
        <main>
            <Search />
            <S.MainContainer>
                <S.MainH2>Объявления</S.MainH2>
                <S.MainContent>
                    <S.ContentCards>
                        {searchItemAds?.reverse()?.map((item) => (
                            <Cards
                                key={item?.id}
                                item={item}
                                itemId={item.id}
                            />
                        ))}
                    </S.ContentCards>
                </S.MainContent>
            </S.MainContainer>
        </main>
    );
}
