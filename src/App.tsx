import MoveAnimations from "./components/animations/MoveAnimations/MoveAnimations";
import ReboteAnimation from "./components/animations/ReboteAnimation/ReboteAnimation";
import Header from "./components/Base/Header/Header";
import Section from "./components/Base/Section/Section";
import Card from "./components/General/Card/Card";
import Title from "./components/General/Title/Title";
import Grid from "./components/layout-components/Grid/Grid";
import CallToAction from "./components/UI/CallToAction/CallToAction";
import myImage from "./assets/bonsai1.png"
import bonsai2 from "./assets/bonsai2.png"
import bonsai3 from "./assets/bonsai3.png"
import bonsai4 from "./assets/bonsai4.png"
import bosque from "./assets/bosque.png"
import Center from "./components/layout-components/Center/Center";

function App() {
  return (
    <>
      <Header /> 
      <Section paddingTop="50px">

        <CallToAction />
        <MoveAnimations>
          <img src={myImage} height="380px" alt="Descripción de la imagen" />
        </MoveAnimations>

      </Section>
        <h2>Algunos ejemplares</h2>
      <Section>

        <Grid className="gid-copies">

          <ReboteAnimation>
            <Card
              title={{ text: 'Currencies', color: 'var(--primary-color)' }}
              paragraph={{ text: 'Buganvilla - Deyby', color: 'white' }}
              background={'var(--secondary-color)'}
              h={'300px'}
              w={'280px'}
            >
              <img src={bonsai2} height="200px" alt="Descripción de la imagen" />
            </Card>
          </ReboteAnimation>
          <ReboteAnimation>
            <Card
              title={{ text: 'jun', color: 'var(--primary-color)' }}
              paragraph={{ text: 'junipero - itobonsai', color: 'white' }}
              background={'var(--secondary-color)'}
              h={'300px'}
              w={'280px'}
            >
              <img src={bonsai3} height="200px" alt="Descripción de la imagen" />
            </Card>
          </ReboteAnimation>
          <ReboteAnimation>
            <Card
              title={{ text: 'Currencies', color: 'var(--primary-color)' }}
              paragraph={{ text: 'junipero san jose - Marcelo', color: 'white' }}
              background={'var(--secondary-color)'}
              h={'300px'}
              w={'280px'}
            >
              <img src={bonsai4} height="200px" alt="Descripción de la imagen" />
            </Card>
          </ReboteAnimation>
        </Grid>
      </Section>

      <Section>
        <Grid>
          <Title title={'El bonsai es mas que un arbol en una maceta'} className="title--total-width" />
          <p style={{ color: 'var(--text-color)' }}>Es una representación viva de la conexión entre el ser humano y la naturaleza. Cada bonsái encarna años de cuidado, paciencia y dedicación, convirtiéndose en una obra de arte que evoluciona con el tiempo. Más que una planta, es una expresión de equilibrio, armonía y respeto por la vida.</p>
        </Grid>
      </Section>

      <Section>
        <Center>
          <img src={bosque} className="main-section-image" alt="Descripción de la imagen" />
        </Center>
      </Section>
    </>
  );
}

export default App;
