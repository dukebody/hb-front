// this is the sharing social section menu options that uses popup classNamees. It can be isplayed at the end of buttonNew Process but also directly in ButtonFile from the options menu.
import NavHeader from '../../components/nav/NavHeader'


export default function ButtonShare() {

  return (

    <>

        <div className="popup__section">

              <p className="popup__paragraph">
                ¡Compártelo para que lo vea más gente!
              </p>
              <div className="popup__options-h popup__options-medium">
                <button
                  type="button"
                  name="button"
                  className="btn-circle"
                >
                f
                </button>
                <button
                  type="button"
                  name="button"
                  className="btn-circle"

                >
                  t
                </button>

                <button
                  type="button"
                  name="button"
                  className="btn-circle"

                >
                  w
                </button>
              </div>
              <button
                className="btn-with-icon"
                type="button"
                name="button"

              >
                Copiar enlace
              </button>
              <button
                className="btn-with-icon"
                type="button"
                name="button"

              >
                Insertar en web
              </button>

        </div>


    </>


  );
}
