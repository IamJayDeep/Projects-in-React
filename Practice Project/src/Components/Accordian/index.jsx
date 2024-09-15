import React, { useState } from "react";
import data from "./data";
import "./style.css";

// single selection accordian
// function Accordian() {
//   const [selected, setSelected] = useState(null);

//   const handleSingleSelection = (Id) => {
//     setSelected(Id === selected ? null : Id);
//   };
//   console.log(selected);
//   return (
//     <div className="wrapper">
//       <div className="accordian">
//         {data && data.length > 0 ? (
//           data.map((item) => (
//             <div className="item" key={item.id}>
//               <div
//                 onClick={() => handleSingleSelection(item.id)}
//                 className="title"
//               >
//                 <h3>{item.question}</h3>
//                 <span>+</span>
//               </div>
//               {selected === item.id ? (
//                 <div className="content">
//                   <h4>{item.answer}</h4>
//                 </div>
//               ) : null}
//             </div>
//           ))
//         ) : (
//           <div>No data available</div>
//         )}
//       </div>
//     </div>
//   );
// }

// export default Accordian;

//multi selection accordian
function Accordian() {
  const [selected, setSelected] = useState([]);

  const handleMultiSelection = (Id) => {
    setSelected((prev) =>
      prev.includes(Id) ? prev.filter((item) => item !== Id) : [...prev, Id]
    );
  };

  return (
    <div className="wrapper">
      <div className="accordian">
        {data && data.length > 0 ? (
          data.map((item) => (
            <div className="item" key={item.id}>
              <div className="title">
                <h3>{item.question}</h3>
                <span onClick={() => handleMultiSelection(item.id)}>+</span>
              </div>
              {selected.includes(item.id) && (
                <div className="content">
                  <p>{item.answer}</p>
                </div>
              )}
            </div>
          ))
        ) : (
          <div>No data available</div>
        )}
      </div>
    </div>
  );
}

export default Accordian;
