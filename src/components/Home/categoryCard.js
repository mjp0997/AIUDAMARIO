// STYLES
import {
  CategoryCardContainer,
  CardContentContainer,
  CardIMGContainer,
  CardTag,
  CardHead,
  CardContent,
  CardPrice,
  CardOfferTag,
} from "./styles";


const CategoryCard = () => {
  return (
    <CategoryCardContainer>
      <CardIMGContainer>
        <img src="/images/xampleCardIMG.png"/>
      </CardIMGContainer>
      <CardContentContainer>
        <CardTag>ORIGINAL</CardTag>
        <CardHead>
          AMD Ryzen 5 5600X 6 núcleos y 12 hilos desbloqueados procesador de
          escritorio
        </CardHead>
        <CardContent>
            <CardPrice>
                US$ 199.98
            </CardPrice>
            <CardOfferTag>
                Rebajado
            </CardOfferTag>
        </CardContent>
      </CardContentContainer>
    </CategoryCardContainer>
  );
};

export default CategoryCard;
