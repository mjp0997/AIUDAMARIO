// Styles
import {
  MainImageHeroContainer,
  BannersContainer,
  BannersHeroContentContainer,
  BannerHerContainer,
} from "./styles";

const Hero = () => {
    return (
    <>
      <MainImageHeroContainer>
        <img src={"/images/Hero/HeroIMG.svg"} alt="HeroIMG" />
      </MainImageHeroContainer>

      <BannersContainer>
        <BannersHeroContentContainer>
          <BannerHerContainer>
            <img
              src="/images/Hero/unitedStatesFlagHero.png"
              alt="unitedStatesFlagHero"
            />
          </BannerHerContainer>
          <p>Directo de USA sin intermediarios</p>
        </BannersHeroContentContainer>

        <BannersHeroContentContainer>
          <BannerHerContainer>
            <img src="/images/Hero/HeroShield.png" alt="unitedStatesFlagHero" />
          </BannerHerContainer>
          <p>Compra asegurada</p>
        </BannersHeroContentContainer>

        <BannersHeroContentContainer>
          <BannerHerContainer>
            <img src="/images/Hero/AirplaneHero.png" alt="unitedStatesFlagHero" />
          </BannerHerContainer>
          <p>Envíos aéreos y marítimos</p>
        </BannersHeroContentContainer>

        <BannersHeroContentContainer>
          <BannerHerContainer>
            <img
              src="/images/Hero/CallCenterWorkerHero.png"
              alt="unitedStatesFlagHero"
            />
          </BannerHerContainer>
          <p>Ayuda y seguimiento en todo momento</p>
        </BannersHeroContentContainer>
      </BannersContainer>
    </>
  );
};

export default Hero;
