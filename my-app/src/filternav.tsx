import React from "react";
import { store, updateGenreFilter } from "../store/store";
import { Provider, useDispatch } from "react-redux";
import { Checkbox } from "react-native-paper";

function Filternav() {
  const dispatch = useDispatch();

  return (
    <table className="filternav ">
      <tr>
        <td>
          <p>
            <label>
              <input
                type="checkbox"
                onChange={() => dispatch(updateGenreFilter("Action"))}
              />
              <span>Action</span>
            </label>
          </p>
        </td>
        <td>
          <p>
            <label>
              <input
                type="checkbox"
                onChange={() => dispatch(updateGenreFilter("Adventure"))}
              />
              <span>Adventure</span>
            </label>
          </p>
        </td>
        <td>
          <p>
            <label>
              <input
                type="checkbox"
                onChange={() => dispatch(updateGenreFilter("Animation"))}
              />
              <span>Animation</span>
            </label>
          </p>
        </td>
        <td>
          <p>
            <label>
              <input
                type="checkbox"
                onChange={() => dispatch(updateGenreFilter("Drama"))}
              />
              <span>Drama</span>
            </label>
          </p>
        </td>
        <td>
          <p>
            <label>
              <input
                type="checkbox"
                onChange={() => dispatch(updateGenreFilter("Fantasy"))}
              />
              <span>Fantasy</span>
            </label>
          </p>
        </td>
      </tr>
      <tr>
        <td>
          <p>
            <label>
              <input
                type="checkbox"
                onChange={() => dispatch(updateGenreFilter("Thriller"))}
              />
              <span>Thriller</span>
            </label>
          </p>
        </td>
        <td>
          <p>
            <label>
              <input
                type="checkbox"
                onChange={() => dispatch(updateGenreFilter("Family"))}
              />
              <span>Family</span>
            </label>
          </p>
        </td>
        <td>
          <p>
            <label>
              <input
                type="checkbox"
                onChange={() => dispatch(updateGenreFilter("Romance"))}
              />
              <span>Romance</span>
            </label>
          </p>
        </td>
        <td>
          <p>
            <label>
              <input
                type="checkbox"
                onChange={() => dispatch(updateGenreFilter("Crime"))}
              />
              <span>Crime</span>
            </label>
          </p>
        </td>
        <td>
          <p>
            <label>
              <input
                type="checkbox"
                onChange={() => dispatch(updateGenreFilter("Comedy"))}
              />
              <span>Comedy</span>
            </label>
          </p>
        </td>
      </tr>
      <tr>
        <td>
          <p>
            <label>
              <input
                type="checkbox"
                onChange={() => dispatch(updateGenreFilter("Biography"))}
              />
              <span>Biography</span>
            </label>
          </p>
        </td>
        <td>
          <p>
            <label>
              <input
                type="checkbox"
                onChange={() => dispatch(updateGenreFilter("Sci-fi"))}
              />
              <span>Sci-fi</span>
            </label>
          </p>
        </td>
        <td>
          <p>
            <label>
              <input
                type="checkbox"
                onChange={() => dispatch(updateGenreFilter("Sport"))}
              />
              <span>Sport</span>
            </label>
          </p>
        </td>
        <td>
          <p>
            <label>
              <input
                type="checkbox"
                onChange={() => dispatch(updateGenreFilter("Music"))}
              />
              <span>Music</span>
            </label>
          </p>
        </td>
        <td>
          <p>
            <label>
              <input
                type="checkbox"
                onChange={() => dispatch(updateGenreFilter("Horror"))}
              />
              <span>Horror</span>
            </label>
          </p>
        </td>
      </tr>
    </table>
  );
}

export default Filternav;
