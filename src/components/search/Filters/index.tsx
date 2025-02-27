import { useRef } from '../../../store/Store';
import { store } from '../../../pages/index';

//Filters is the component under the search bar sectioon of the home page and other pages. It consist of several items all with btn-fillter class, and its parts can be altered by the btn templates of the selected network.
//if the filters are too many, it ddisplays a "more filters" option at the end that brings the PopupExtraFilters
export default function Filters() {
  const paths = useRef(store, (state) => state.backTest.openApi?.paths);

  return (
    <div className="filters">

        <div className="checkbox-filter__container">
          <label className="checkbox__filter-label">
            <input type="checkbox" className="checkbox-filter__checkbox" id="input-tos"></input>
            <div className="checkbox-filter__content btn-filter-with-icon">
              <div className="btn-filter__icon red"></div>

              <div className="checkbox__text">
                Necesitan
              </div>
            </div>
          </label>
        </div>


        {
          paths &&
          <div className="checkbox-filter__container">
            <label className="checkbox__filter-label">
              <input type="checkbox" className="checkbox-filter__checkbox" id="input-tos"></input>
              <div className="checkbox-filter__content btn-filter-with-icon">
                <div className="btn-filter__icon red"></div>
                <div className="checkbox__text">
                  Necesitan { Object.keys(paths).length }
                </div>
              </div>
            </label>
          </div>
        }

        <select className="dropdown__filter">
          <option value="volvo" className="dropdown-select__option">Volvo</option>
          <option value="volvo" className="dropdown-select__option">Option1</option>
          <option value="volvo" className="dropdown-select__option">Option2</option>
          <option value="volvo" className="dropdown-select__option">Option3</option>
          <option value="volvo" className="dropdown-select__option">Option4</option>
          <option value="volvo" className="dropdown-select__option">Option5</option>
          <option value="volvo" className="dropdown-select__option">Option6</option>
        </select>

    </div>
  );
}
