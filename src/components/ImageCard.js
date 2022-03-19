import React from "react";


class ImageCard extends React.Component {

    constructor(props) {
        super(props);
        this.state = { span: 0 }

        //passing React.createRef() will cerate ref for that eliament

        this.imageRef = React.createRef();

    }

    componentDidMount() {
        this.imageRef.current.addEventListener('load', this.setSpans)


    }

    setSpans = () => {
        const height = this.imageRef.current.clienHeight;
        const spans = Math.ceil(height / 10);
        this.setState({ spans: spans });

    }

    render() {

        const { description, urls } = this.props.image;
        return (
            <div style={{ gridRowEnd: 'span ${this.state.span}' }}>
                <img
                    ref={this.imageRef}
                    src={urls.regular}
                    alt={description}
                />
            </div>
        );
    }

}

export default ImageCard;