import React from 'react';

class FormMovie extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      globalTitle: '',
    }
    this.onChange = this.onChange.bind(this);
    this.submitForm = this.submitForm.bind(this);
  }

  onChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  componentDidMount() {
    console.log("formulaire rendu")
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.globalTitle !== this.state.globalTitle) {
      console.log("Titre changé")
    }
  }

  submitForm(e) {
    e.preventDefault();
    this.setState({
      globalTitle: `Mon formulaire : ${this.state.title}`
    })
  }

  render() {
    return (
      <div className="FormMovie">
        <h1>{this.state.globalTitle}</h1>

        <form onSubmit={this.submitForm}>
          <fieldset>
            <legend>Informations</legend>
            <div className="form-data">
              <label htmlFor="title">Title</label>
              <input
                type="text"
                id="title"
                name="title"
                onChange={this.onChange}
                value={this.state.title}
              />
            </div>
            <hr />
            <div className="form-data">
              <input type="submit" value="Envoyer" />
            </div>
          </fieldset>
        </form>
      </div >
    )
  }
}

export default FormMovie;