import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators} from 'redux'

import { requestApiData } from './actions'

class Home extends React.Component{


    componentDidMount(){
        this.props.requestApiData();
    }

    render() {
        return(
            <h1>
                {this.props.requestApiData}
            </h1>
        );
    }
}

const mapStateToProps = state => ({helloWorld: state.helloWorld });

const mapDispatchToProps = dispatch => ( bindActionCreators( {requestApiData}, dispatch) );


export default connect(mapStateToProps, mapDispatchToProps)(Home)
