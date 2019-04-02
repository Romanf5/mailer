import {Component} from 'react';
import ReactDOM from 'react-dom';

class Portal extends Component {

    modalRoot = document.querySelector('#root');
    el = document.createElement('div');

    componentDidMount() {
        this.modalRoot.append(this.el);
    }

    componentWillUnmount() {
        this.modalRoot.removeChild(this.el);
    }

    render() {
        return ReactDOM.createPortal(
            this.props.children,
            this.el,
        );
    }

}

export default Portal;
