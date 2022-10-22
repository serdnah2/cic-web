import Carousel from "@components/carousel/Carousel";
import Information from "@components/information/Information";
import MainLayout from "@components/layouts/MainLayout";
import OurAllies from "@components/our-allies/OurAllies";
import OurServices from "@components/our-services/OurServices";
import SlideDown from "@components/slide-down/SlideDown";

export default function Home(props) {
  return (
    <MainLayout navLinks={props.navLinks} mobileNavLinks={props.mobileNavLinks}>
      <Information data={props.informationData}></Information>
      <SlideDown></SlideDown>
      <OurServices ourServices={props.ourServices}></OurServices>
      <Information data={props.informationData2}></Information>
      <Information data={props.informationData3}></Information>
      <Carousel carouselData={props.carouselData}></Carousel>
      <OurAllies ourAllies={props.ourAllies}></OurAllies>
    </MainLayout>
  );
}

export async function getServerSideProps() {
  const api = process?.env?.API_PATH;
  const res = await fetch(`${api}api/home`);
  const data = await res.json();

  return {
    props: {
      ...data,
    },
  };
}
