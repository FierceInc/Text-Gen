import React, { useEffect, useState } from "react";
import CategoryList from "../data/categories";
import Types from "../data/types";
import Text from "./Text";


const Categories = () => {
  const [hovered, setHovered] = useState(false);
  const [Index, setIndex] = useState(-1);
  const [Checked, setChecked] = useState("");
  const [Cat, setCat] = useState("");
  const [showTypes, setShowTypes] = useState(false);

  useEffect(() => {
    setChecked("");
    setShowTypes(false);
  }, [Index]);

  return (
    <>
      <div className="Categories">
        {CategoryList.map((category, i) => (
          <div
            className="Category"
            key={category.name}
            style={{ background: category.background }}
            onClick={() => {
              setIndex(i);
              setCat(category.name);
            }}
            onMouseOver={() => {
              Index === i ? setHovered(true) : setHovered(false);
            }}
            onMouseLeave={() => {
              setHovered(false);
            }}
          >
            <h3>{category.name}</h3>
            <input
              className="inputs"
              type="radio"
              name="category"
              id="selector"
              checked={Index === i ? true : false}
            />
            <span className="checkmark"></span>
            <form
              className="cat"
              style={
                Index === i && hovered
                  ? { height: "150px", background: category.background }
                  : { height: "0", background: category.background }
              }
            >
              {Types.map((type, i) => (
                <React.Fragment key={type}>
                  <input
                    type="radio"
                    name="types"
                    value={type}
                    className="types"
                    onChange={(e) => {
                      setChecked(e.target.value);
                      setShowTypes(false);
                    }}
                    checked={Checked === type ? true : false}
                  />
                  <label htmlFor="titles">{type}</label> <br />
                </React.Fragment>
              ))}
            </form>
          </div>
        ))}
      </div>

      <div className="numberOfwords">
        {Checked !== "" ? (
          <button onClick={() => setShowTypes(true)}>Generate</button>
        ) : (
          <button disabled>Generate</button>
        )}
        <div action="" className="numWords">
          <div>
            <span>
              <i className="bi bi-tags"></i>
            </span>
            <h3>
              {Index >= 0
                ? CategoryList[Index].name + " website"
                : "Select a category above"}{" "}
            </h3>
          </div>

          <div>
            <span>
              <i className="bi bi-check2-circle"></i>
            </span>
            <h3>{Checked === "" ? "Select a type" : Checked}</h3>
          </div>
        </div>
      </div>
      {showTypes ? <Text category={Cat} type={Checked} /> : ""}
    </>
  );
};

export default Categories;
