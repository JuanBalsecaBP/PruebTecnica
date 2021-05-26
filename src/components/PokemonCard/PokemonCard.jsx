import React from 'react'
import PropTypes from 'prop-types'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Typography  from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'


const PokemonCard = ({urlImage, id, name}) => {
    return (
        <Card>
            <CardContent>
                <img src={urlImage} style={{width: 200}}/>
                <Typography># {id}</Typography>
                <Typography>{name}</Typography>
            </CardContent>
        </Card>
    )
}

PokemonCard.propTypes = {

}

export default PokemonCard
