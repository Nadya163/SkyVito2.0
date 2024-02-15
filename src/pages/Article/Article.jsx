import { useParams } from "react-router-dom";
import * as S from "./Article.style";
import ImgBar from "../../components/ArticleComponents/ImgBar/ImgBar";
import ArticleInfo from "../../components/ArticleComponents/ArticleInfo/ArticleInfo";
import LogoButton from "../../components/LogoButton/LogoButton";
import { useGetAllAdsQuery } from "../../ApiService/ApiAds";

export default function Article() {
    const params = useParams();
    const { data } = useGetAllAdsQuery();
    const chosenItems = data?.filter((item) => item.id === Number(params.id));

    // console.log(userSeller);

    // console.log('id', chosenItems);
    // console.log('user', data);

    return (
        <main>
            <LogoButton />
            {chosenItems?.map((item) => (
                <div key={item.title}>
                    <S.MainArtic>
                        <S.ArticContent>
                            <ImgBar key={item.id} item={item} />
                            <ArticleInfo
                                key={item.id}
                                item={item}
                                itemId={item.id}
                            />
                        </S.ArticContent>
                    </S.MainArtic>
                    <S.MainContainerText>
                        <S.MainTitle>Описание товара</S.MainTitle>
                        <S.MainContent>
                            <S.MainText>{item.description}</S.MainText>
                        </S.MainContent>
                    </S.MainContainerText>
                </div>
            ))}
        </main>
    );
}
