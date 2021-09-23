//QUESTIONS AND INFO
import NavHeader from '../../components/NavHeader'
import NavBottom from '../../components/NavBottom'
import CardDirectory from '../../components/CardDirectory'
import Accordion from '../../elements/Accordion'

export default function Faqs() {

  return (

    <>

      <NavHeader />

      <div className="faqs__content">

        <h2 className="title__h3 faqs__title">Faqs</h2>


        <CardDirectory />



        <Accordion />
        <Accordion />

      </div>

      <NavBottom />

    </>


  );
}
