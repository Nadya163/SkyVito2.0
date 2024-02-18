import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import * as S from "./Cards.style";
import { formatDate } from "../../../Store/Redux/DataSlise";
import {
    selectIsUserLogdIn,
    selectTimestamp,
} from "../../../Store/Selector/Selector";
import { useGetUserProfileQuery } from "../../../ApiService/ApiService";

export default function Cards({ item }) {
    const timestamp = useSelector(selectTimestamp);
    const isLoginIn = useSelector(selectIsUserLogdIn);
    formatDate(timestamp);

    let userIdProf = null;
    if (isLoginIn) {
        const { data } = useGetUserProfileQuery();
        userIdProf = data;
    }

    const isCurrentUserItem = item.user?.id === userIdProf?.id;

    const articlePath = isCurrentUserItem
        ? `/myarticle/${item.id}`
        : `/article/${item.id}`;

    // console.log(isLoginIn, "user");
    // console.log(userIdProf?.id, "user2");

    return (
        <S.CardsItem>
            <S.CardsCard>
                <div key={item.id}>
                    {isLoginIn ? (
                        <S.CardImage>
                            <Link to={articlePath}>
                                <S.Image
                                    src={`http://localhost:8090/${item.images[0]?.url}`}
                                    alt={item.title}
                                />
                            </Link>
                        </S.CardImage>
                    ) : (
                        <S.CardImage>
                            <Link to={`/article/${item.id}`}>
                                <S.Image
                                    src={`http://localhost:8090/${item.images[0]?.url}`}
                                    alt={item.title}
                                />
                            </Link>
                        </S.CardImage>
                    )}
                    <div>
                        <Link to={`/article/${item.id}`}>
                            <S.CardTitle>{item.title}</S.CardTitle>
                        </Link>
                        <S.CardPrice>{item.price} ₽</S.CardPrice>
                        <S.CardPlace>{item.user.city}</S.CardPlace>
                        <S.CardDate>{formatDate(item.created_on)}</S.CardDate>
                    </div>
                </div>
            </S.CardsCard>
        </S.CardsItem>
    );
}
