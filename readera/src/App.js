import "./index.css";
import { useState } from "react";

let books = {
  Technology: [
    { name: "softwares", rating: "4.5k", author: "ak krishnan" },
    { name: "hackers and painters", rating: "3.4k", author: "paul grahm" },
    { name: "Crispr ", rating: "1.4k", author: "genasts willer" },
    { name: "javascript the world", rating: "4.5k", author: "saxen luthra" },
    { name: "functional programming", rating: "3.4k", author: "jons karpil" },
    { name: "pcb brothers", rating: "1.4k", author: "kx saxena" }
  ],
  "Yogic books": [
    { name: "death", rating: "70.5k", author: "sadhguru" },
    { name: "patanjali the yogi", rating: "80.4k", author: "swami rudraksh" },
    { name: "autobiography of a yogi", rating: "70.5k", author: "yogananda" },
    { name: "krama yoga", rating: "80.4k", author: "shri b.g" },
    { name: "yoga sutras", rating: "70.5k", author: "patanjali" },
    { name: "sankya yoga", rating: "80.4k", author: "kapil" }
  ],
  "Acupressure Guide": [
    { name: "acupunture learning", rating: "7.5k", author: "joy ardon" },
    { name: "li-4 the mystery", rating: "8.4k", author: "hawell pixar" },
    { name: "pressure the body", rating: "7.5k", author: "preeti bhall" },
    { name: "healing points", rating: "8.4k", author: "james nester" }
  ]
};

export default function App() {
  var catogry = Object.keys(books);
  var [cato, setCato] = useState([]);

  function bookHead(item) {
    cato = books[item];
    setCato(cato);
  }
  return (
    <div className="App">
      <h1>📔ReadEra📔</h1>
      <h2>Read world's most popular books</h2>
      <br />
      <span>
        {catogry.map(function (item) {
          return (
            <span
              key={item}
              onClick={() => {
                bookHead(item);
              }}
            >
              <span style={{ margin: 50 }}>
                <span className="display">{item}</span>
              </span>
            </span>
          );
        })}
      </span>
      <br />
      <br />
      <br />

      <hr />

      <div>
        {cato.map(function (eachItem) {
          return (
            <span key={eachItem}>
              <span className="disp" style={{ margin: 50 }}>
                <div className="name">{eachItem.name}</div>
                <div className="rating">Rating:{eachItem.rating}</div>
                <div className="rating">Author:{eachItem.author}</div>
              </span>
            </span>
          );
        })}
      </div>
    </div>
  );
}
