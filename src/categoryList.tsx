import React, { Component } from "react";
interface Props {
  selected: string;
  categories: string[];
  selectCategory: (category: string) => void;
}
export class CategoryList extends Component<Props> {
  render() {
    return (
      <div className="row p-2 m-2">
        {["All", ...this.props.categories].map((c) => {
          let btnClass =
            this.props.selected === c ? "btn-primary" : "btn-secondary";
          return (
            <button
              key={c}
              className={`btn btn-block ${btnClass} m-2`}
              onClick={() => this.props.selectCategory(c)}
            >
              {c}
            </button>
          );
        })}
      </div>
    );
  }
}
