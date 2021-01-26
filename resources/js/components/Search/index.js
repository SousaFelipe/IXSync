import React, { Component } from 'react'



import Container from '../Container'
import Content from '../Content'
import Icon from '../Icon'
import Input from '../Input'



export default class Search extends Component {



    constructor(props) {
        super(props)
    }



    render() {
        return (
            <Container
                focusWithin='fill|shadow|border'
                background='background'
                direction='column'
                align='stretch'
                width={ this.props.width }
                height={ this.props.height }
                justify={ this.props.justify }
                rounded={ this.props.rounded }
                bordered={ this.props.bordered != undefined }>

                <Content grow={1}>
                    <Container width='100%' align='center' pandded='thin'>
                        <Content>
                            <Icon name='search' size='small'/>
                        </Content>
                        <Content grow={1}>
                            <Input size={ this.props.size } placeholder={ this.props.placeholder } onChange={ this.props.onChange } padding='12px'/>
                        </Content>
                    </Container>
                </Content>

                <Content grow={1}>
                    <Container width='100%' direction='column' align='stretch'>
                        { this.props.children }
                    </Container>
                </Content>

            </Container>
        )
    }
}
