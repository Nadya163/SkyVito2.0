import { useState } from "react";
import * as S from "./ImgBar.style";

export default function ImgBar({ item }) {
    const [selectImg, setSelectImg] = useState(item.images[0]?.url);

    const handleImgClikc = (imgUrl) => {
        setSelectImg(imgUrl);
    };

    return (
        <S.ArticleLeft key={item.id}>
            <S.ArticleFillImg>
                <S.ArticleImg>
                    <img
                        src={`http://localhost:8090/${selectImg}`}
                        alt={item.title}
                    />
                </S.ArticleImg>
                <S.ArticleImgBar>
                    {item.images.slice(0, 5).map((image) => (
                        <S.ArticleImgBarDiv
                            key={image.id}
                            onClick={() => handleImgClikc(image.url)}
                        >
                            <img
                                src={`http://localhost:8090/${image?.url}`}
                                alt={item.title}
                                style={{
                                    opacity: selectImg === image.url ? 1 : 0.5,
                                }}
                            />
                        </S.ArticleImgBarDiv>
                    ))}
                </S.ArticleImgBar>
                {/* <div class="article__img-bar-mob img-bar-mob">
//                         <div class="img-bar-mob__circle circle-active"></div>
//                         <div class="img-bar-mob__circle"></div>
//                         <div class="img-bar-mob__circle"></div>
//                         <div class="img-bar-mob__circle"></div>
//                         <div class="img-bar-mob__circle"></div>
//                     </div> */}
            </S.ArticleFillImg>
        </S.ArticleLeft>
    );
}
