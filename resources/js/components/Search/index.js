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

                focusWithin='fill|shadow'
                background='background'
                direction='column'
                align='stretch'

                width={ this.props.width }
                height={ this.props.height }
                justify={ this.props.justify }
                focus={ this.props.focus }

                rounded={ this.props.rounded }>

                <Content grow={1}>
                    <Container width='100%' align='center'>
                        <Content>
                            <Icon name='search' size='small'/>
                        </Content>
                        <Content grow={1}>
                            <Input size={ this.props.size } placeholder={ this.props.placeholder } onChange={ this.props.onChange } />
                        </Content>
                    </Container>
                </Content>

                <Content grow={1}>
                    { this.props.children }
                </Content>

            </Container>
        )
    }
}
