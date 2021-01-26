import React, { Component } from 'react'


import ModalStyle from './style'



export default class Modal extends Component {



    constructor(props) {
        super(props)

        this.state = {
            hidden: ((props.hidden != undefined) ? props.hidden : true)
        }

        this.handleShowHide = this.handleShowHide.bind(this)
        this.show = this.show.bind(this)
        this.hide = this.hide.bind(this)
    }



    handleShowHide(e) {
        e.preventDefault()
        this.setState({ hidden: !this.state.hidden })
    }



    show(e) {
        e.preventDefault()
        this.setState({ hidden: false })
    }



    hide(e) {
        e.preventDefault()
        this.setState({ hidden: true })
    }



    render() {
        return ((this.state.hidden) ? null :
            <ModalStyle onClick={ this.hide }>
                <section>
                    { this.props.children }
                </section>
            </ModalStyle>
        )
    }
}
