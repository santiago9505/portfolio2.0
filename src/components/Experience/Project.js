import React from "react";
import "../../assets/styles/Experience.css";

class Project extends React.Component {
  render() {
    return (
      <a href={this.props.link} className="project__container">
        <div className="project__flip--container">
          <div className="project__flip--front">
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
          </div>
          <div className="project__flip--back">
            <h1>{this.props.project}</h1>
            <p>{this.props.description}</p>
          </div>
        </div>
      </a>
    );
  }
}

export default Project;
