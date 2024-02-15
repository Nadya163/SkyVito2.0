import { useState } from "react";
import { useSelector } from "react-redux";
import * as S from "./SellerProfileInfo.style";
import { selectDateString } from "../../../Store/Selector/Selector";
import { formatDateSeller } from "../../../Store/Redux/DataSlise";

export default function SellerProfileInfo({ user }) {
    const [showPhone, setShowPhone] = useState(false);
    const dateString = useSelector(selectDateString);
    formatDateSeller(dateString);

    const handleShowPhone = () => {
        setShowPhone(true);
    };

    return (
        <S.MainProfileSell>
            <S.ProfileSellContent key={user.id}>
                <S.ProfileSellSeller>
                    <S.SellerLeft>
                        <S.SellerImg>
                            {user.avatar ? (
                                <S.SellerImges
                                    src={`http://localhost:8090/${user.avatar}`}
                                    alt=""
                                />
                            ) : (
                                <S.SellerImges
                                    src="..//img/Ellipse 1.svg"
                                    alt=""
                                />
                            )}
                        </S.SellerImg>
                    </S.SellerLeft>
                    <S.SellerRight>
                        <S.SellerTitle>{user.name}</S.SellerTitle>
                        <S.SellerCity>{user.city}</S.SellerCity>
                        <S.SellerInf>
                            {formatDateSeller(user.sells_from)}
                        </S.SellerInf>
                        {/* <div class="seller__img-mob-block">
                                            <div class="seller__img-mob">
                                                <a href="" target="_self">
                                                    <img src="#" alt="">
                                                </a>
                                            </div>
                                        </div> */}
                        <S.SellerBtn type="button" onClick={handleShowPhone}>
                            Показать&nbsp;телефон
                            {showPhone ? (
                                <span>{user.phone}</span>
                            ) : (
                                <span>
                                    {user.phone.slice(0, 3)}
                                    ХХХ&nbsp;ХХ&nbsp;ХХ
                                </span>
                            )}
                        </S.SellerBtn>
                    </S.SellerRight>
                </S.ProfileSellSeller>
            </S.ProfileSellContent>
        </S.MainProfileSell>
    );
}
