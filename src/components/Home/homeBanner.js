// STYLES
import {
  BannerCardContainer,
  BannerImageContainer,
  BannerCardContentContainer,
} from "./styles";
import { P, H1, HomBannersButton } from "../generalStyles/styles.js";

const HomeBanner = ({
  bannerIMG,
  topText,
  bottomText,
  title,
  textColor,
  titleColor,
  textButtonColor,
  BackgroundColorButton,
  area,
}) => {
  return (
    <BannerCardContainer gridareaname={area}>
      <BannerImageContainer>
        <img src={bannerIMG} alt="backgroundCard" />
      </BannerImageContainer>

      <BannerCardContentContainer>
        <P color={textColor}>{topText}</P>

        <H1 margin="10px 0" color={titleColor}>
          {title}
        </H1>

        <P color={textColor}>{bottomText}</P>

        <HomBannersButton
          margin="10px 0 0 0"
          background={BackgroundColorButton}
          color={textButtonColor}
        >
          Ver ofertas
        </HomBannersButton>
      </BannerCardContentContainer>
    </BannerCardContainer>
  );
};

export default HomeBanner;
