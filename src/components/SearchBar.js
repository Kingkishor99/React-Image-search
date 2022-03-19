import React from "react";

class SearchBar extends React.Component {

    state = { term: '' };

    //preventing refreshing behaviour of searchbar
    onFormSubmit = (event) => {
        event.preventDefault();
        //passed prpp to collect the terms & go back to main fuction
        { this.props.onSubmit(this.state.term) };
    }

    //rendering searchbar
    render() {

        return (

            <div className="ui segment container">
                <form onSubmit={this.onFormSubmit} className="ui form">
                    <div className="field">

                        <label>Image search</label>

                        <input
                            type="text"
                            value={this.state.value}
                            onChange={e => this.setState({ term: e.target.value })
                            } />
                    </div>
                </form>
            </div>
        )
    }
}

export default SearchBar;