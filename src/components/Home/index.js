// STYLES
import {
  HomeContainerBanners,
  HomeCategoryContainer,
  HomeBannerContainer,
} from "./styles";

import Hero from "./hero";
import HomeBanner from "./homeBanner";
import Card from "./categoryCard";

const Home = () => {
  return (
    <>
      <Hero />

      <HomeContainerBanners
        templateareas={`"a1 a2"`}
        templatecolumns="repeat(2, 1fr)"
      >
        <HomeBanner
          area="a1"
          bannerIMG="/images/HomeBanners/GamerDude.svg"
          topText="Feria del GAMER"
          bottomText="hasta 50% de descuento"
          title="Juega sin excusas"
          titleColor="#FFF"
          textColor="#FFF"
          textButtonColor="#5B19AE"
          BackgroundColorButton="#FFF"
        />
        <HomeBanner
          area="a2"
          bannerIMG="/images/HomeBanners/fashionGirlsBanner.png"
          topText="Sé única"
          bottomText="hasta 67% de descuento"
          title="Vive la vida"
          titleColor="#5B19AE"
          textColor="#071C1F"
          textButtonColor="#FFF"
          BackgroundColorButton="#5B19AE"
        />
      </HomeContainerBanners>

      <HomeCategoryContainer>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </HomeCategoryContainer>

      <HomeContainerBanners
        templateareas={`"a1 a1 a2 a3"`}
        templatecolumns="repeat(4, 1fr)"
      >
        <HomeBanner
          area="a1"
          bannerIMG="/images/HomeBanners/makeup.png"
          topText="Descúbrete"
          bottomText="hasta 63% de descuento"
          title="Empodera tu belleza"
          titleColor="#5B19AE"
          textColor="#071C1F"
          textButtonColor="#FFF"
          BackgroundColorButton="#5B19AE"
        />
        <HomeBanner
          area="a2"
          bannerIMG="/images/HomeBanners/manClothes.png"
          topText=""
          bottomText=""
          title="Ropa de hombre"
          titleColor="#071C1F"
          textColor=""
          textButtonColor="#FFF"
          BackgroundColorButton="#5B19AE"
        />
        <HomeBanner
          area="a3"
          bannerIMG="/images/HomeBanners/babyClothes.png"
          topText=""
          bottomText=""
          title="Ropa de bebé"
          titleColor="#071C1F"
          textColor=""
          textButtonColor="#FFF"
          BackgroundColorButton="#5B19AE"
        />
      </HomeContainerBanners>

      <HomeBannerContainer>
        <img src="/images/HomeBanners/banner1.png" alt="banner1" />
      </HomeBannerContainer>

      <HomeContainerBanners
        templateareas={`"a1 a2 a3 a3"`}
        templatecolumns="repeat(4, 1fr)"
      >
        <HomeBanner
          area="a1"
          bannerIMG="/images/HomeBanners/watch.png"
          topText=""
          bottomText=""
          title="Smart y clásicos"
          titleColor="#071C1F"
          textColor=""
          textButtonColor="#FFF"
          BackgroundColorButton="#5B19AE"
        />
        <HomeBanner
          area="a2"
          bannerIMG="/images/HomeBanners/tvControl.png"
          topText=""
          bottomText=""
          title="Ropa de hombre"
          titleColor="#071C1F"
          textColor=""
          textButtonColor="#FFF"
          BackgroundColorButton="#5B19AE"
        />
        <HomeBanner
          area="a3"
          bannerIMG="/images/HomeBanners/cellphone.png"
          topText="Celulares"
          bottomText="hasta 49% de descuento"
          title="Tv sin pausas"
          titleColor="#5B19AE"
          textColor="#071C1F"
          textButtonColor="#FFF"
          BackgroundColorButton="#5B19AE"
        />
      </HomeContainerBanners>

      <HomeCategoryContainer>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </HomeCategoryContainer>

      <HomeContainerBanners
        templateareas={`"a1 a2"`}
        templatecolumns="repeat(2, 1fr)"
      >
        <HomeBanner
          area="a1"
          bannerIMG="/images/HomeBanners/shoes.png"
          topText="Confianza audaz"
          bottomText="hasta 57% de descuento"
          title="Tendencia y calidad"
          titleColor="#5B19AE"
          textColor="#071C1F"
          textButtonColor="#FFF"
          BackgroundColorButton="#5B19AE"
        />
        <HomeBanner
          area="a2"
          bannerIMG="/images/HomeBanners/excerciseMaterials.png"
          topText="Deporte"
          bottomText="hasta 82% de descuento"
          title="Nada de detiene"
          titleColor="#5B19AE"
          textColor="#071C1F"
          textButtonColor="#FFF"
          BackgroundColorButton="#5B19AE"
        />
      </HomeContainerBanners>

      <HomeCategoryContainer>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </HomeCategoryContainer>

      <HomeContainerBanners
        templateareas={`"a1 a1 a2 a3"`}
        templatecolumns="repeat(4, 1fr)"
      >
        <HomeBanner
          area="a1"
          bannerIMG="/images/HomeBanners/pets.png"
          topText="Mascotas"
          bottomText="hasta 64% de descuento"
          title="Todo para ellos"
          titleColor="#5B19AE"
          textColor="#071C1F"
          textButtonColor="#FFF"
          BackgroundColorButton="#5B19AE"
        />
        <HomeBanner
          area="a2"
          bannerIMG="/images/HomeBanners/wheel.png"
          topText=""
          bottomText=""
          title="Auto partes"
          titleColor="#071C1F"
          textColor=""
          textButtonColor="#FFF"
          BackgroundColorButton="#5B19AE"
        />
        <HomeBanner
          area="a3"
          bannerIMG="/images/HomeBanners/blender.png"
          topText=""
          bottomText=""
          title="Línea blanca"
          titleColor="#071C1F"
          textColor=""
          textButtonColor="#FFF"
          BackgroundColorButton="#5B19AE"
        />
      </HomeContainerBanners>

      <HomeBannerContainer>
        <img src="/images/HomeBanners/banner2.png" alt="banner2" />
      </HomeBannerContainer>
    </>
  );
};

export default Home;
