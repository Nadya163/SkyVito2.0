import styled from "styled-components";

export const ModalReviews = styled.div`
    width: 652px;
    height: 495px;
`;

export const ReviewsReview = styled.div`
    display: flex;
    margin: 15px 0;
    flex-direction: column;
`;

export const ReviewItem = styled.div`
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    -ms-flex-direction: row;
    flex-direction: row;
    -webkit-box-align: start;
    -ms-flex-align: start;
    align-items: flex-start;
    -webkit-box-pack: start;
    -ms-flex-pack: start;
    justify-content: flex-start;
    flex-direction: column;
    gap: 12px;
    margin-top: 30px;
`;

export const ReviewLeft = styled.div`
    margin-right: 12px;
`;

export const ReviewAvatarBox = styled.div`
    display: flex;
    gap: 12px;
`;

export const ReviewImg = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: #f0f0f0;
    & img {
        display: block;
        width: 100%;
        height: auto;
        border-radius: 50%;
    }
`;

export const ReviewRight = styled.div`
    display: block;
    margin-left: 52px;
`;

export const ReviewName = styled.p`
    margin-bottom: 12px;
    font-weight: 600;
    font-size: 16px;
    line-height: 32px;
    color: #000000;
`;

export const ReviewTitle = styled.h5`
    font-weight: 600;
    font-size: 16px;
    line-height: 32px;
    color: #000000;
`;

export const ReviewText = styled.p`
    font-size: 16px;
    line-height: 32px;
    color: #000000;
`;
