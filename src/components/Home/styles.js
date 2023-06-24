import styled from "styled-components";

// HERO
export const MainImageHeroContainer = styled.div`
  width: 100%;

  & > img {
    width: 100%;
  }
`;
export const BannersContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  padding: 40px;
  align-items: center;
  justify-content: center;
  border: 1px solid #ffffff;
  border-radius: 8px;

  background-color: #ffffff;
  margin: 20px 0 0 0;
`;
export const BannersHeroContentContainer = styled.div`
  width: 20%;
  height: 100%;
  display: flex;
  color: #071c1f;
  align-items: center;

  & > p {
    margin-left: 10px;
    font-size: 14px;
    font-weight: 300;
  }
`;
export const BannerHerContainer = styled.div`
  width: 30.4px;
  display: flex;
  align-items: center;

  & > img {
    width: 100%;
  }
`;

// HOME BANNERS
export const HomeContainerBanners = styled.div`
  display: grid;
  grid-template-columns: ${({ templatecolumns }) => templatecolumns};
  grid-template-areas: ${({ templateareas }) => templateareas};
  grid-gap: 20px;
`;

export const BannerCardContainer = styled.div`
  grid-area: ${({ gridareaname }) => gridareaname};
  display: flex;
  width: 100%;
  position: relative;
  margin: 50px 0;
`;
export const BannerImageContainer = styled.div`
  width: 100%;

  & > img {
    width: 100%;
  }
`;
export const BannerCardContentContainer = styled.div`
  display: flex;
  position: absolute;
  justify-content: center;
  flex-direction: column;
  top: 0;
  right: 0px;
  bottom: 0;
  left: 0;
`;
export const HomeBannerContainer = styled.div`
  width: 100%;

  & > img {
    width: 100%;
  }
`;

// HOME CATEGORY CARD
export const HomeCategoryContainer = styled.div`
  display: flex;
`;
export const CategoryCardContainer = styled.div`
  width: 20%;
  height: 20%;
  justify-content: center;
  margin: 15px;

  background: #fff;

  border: 1px solid #ccc;
  border-radius: 8px;

  box-shadow: 0px 1px 1px 0px rgba(0, 0, 0, 0.1);
`;
export const CardIMGContainer = styled.div`
  display: flex;
  height: 194px;
  justify-content: center;

  border-bottom: 1px solid #ccc;
`;
export const CardContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;

  font-weight: 300;

  color: #071c1f;
`;
export const CardTag = styled.div`
  display: flex;
  width: 58px;
  height: 15px;
  font-size: 10px;
  border-radius: 4px;
  text-align: center;
  align-items: center;
  justify-content: center;

  color: #5b19ae;
  background: rgba(91, 25, 174, 0.4);
  letter-spacing: 0.5px;
`;
export const CardHead = styled.div`
  font-size: 14px;
  display: flex;
  height: 82px;
  width: 100%;
  justify-content: center;
  align-items: center;
`;
export const CardContent = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  jusitify-content: center;

  font-size: 18px;
`;
export const CardPrice = styled.div`
  font-size: 18px;
  width: 100%;
  align-items: center;
  font-weight: 500;
`;
export const CardOfferTag = styled.div`
  padding: 5px;
  border-radius: 3px;
  border: 1px solid rgba(255, 0, 0, 0.7);

  color: rgba(255, 0, 0, 0.7);

  font-size: 12px;
`;
