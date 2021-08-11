import React from "react";
import "../../assets/styles/Experience.css";

import ApeWebsite from "../../assets/static/ape-website.png";

class Project extends React.Component {
  render() {
    return (
      <figure className="project__container">
        <img
          className="project__img"
          src={this.props.img}
          alt="imagen-proyecto"
        />
        <div className="project__paragraph--container">
          <h3 className="project__title">{this.props.project}</h3>
          <article>
            <h4 className="project__stack--title">Stack</h4>
            <p className="project__stack">{this.props.stack}</p>
          </article>
        </div>
      </figure>
    );
  }
}

export default Project;
