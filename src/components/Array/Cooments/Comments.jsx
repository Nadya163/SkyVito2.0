import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import * as S from "./Comments.styled";
import { setAllComments } from "../../../Store/Redux/AdsSlice";
import { selectTimestamp } from "../../../Store/Selector/Selector";
import { formatDate } from "../../../Store/Redux/DataSlise";
import { useGetAllCommentsAdsQuery } from "../../../ApiService/ApiAds";

export default function Comments({ itemId }) {
    const dispatch = useDispatch();
    const timestamp = useSelector(selectTimestamp);
    const { data } = useGetAllCommentsAdsQuery({ id: itemId });
    formatDate(timestamp);

    // console.log("data comments", data);

    useEffect(() => {
        dispatch(setAllComments(data));
    }, [data, dispatch]);

    return (
        <S.ModalReviews>
            <S.ReviewsReview>
                {data?.map((comment) => (
                    <S.ReviewItem key={comment.id}>
                        <S.ReviewLeft>
                            <S.ReviewAvatarBox>
                                <S.ReviewImg>
                                    <img
                                        src={`http://localhost:8090/${comment.author.avatar}`}
                                        alt=""
                                    />
                                </S.ReviewImg>
                                <S.ReviewName>
                                    {comment.name}
                                    <span>
                                        {formatDate(comment.created_on)}
                                    </span>
                                </S.ReviewName>
                            </S.ReviewAvatarBox>
                        </S.ReviewLeft>
                        <S.ReviewRight>
                            <S.ReviewTitle>Комментарий</S.ReviewTitle>
                            <S.ReviewText>{comment.text}</S.ReviewText>
                        </S.ReviewRight>
                    </S.ReviewItem>
                ))}
            </S.ReviewsReview>
        </S.ModalReviews>
    );
}
