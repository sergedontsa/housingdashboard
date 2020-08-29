import React from 'react';
import './ProfilePicture.style.scss'
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardMedia from "@material-ui/core/CardMedia";

import CardActions from "@material-ui/core/CardActions";
import {makeStyles} from "@material-ui/core/styles";
import profile from '../../asset/picture.jpg'
import Button from "@material-ui/core/Button";
import EditIcon from '@material-ui/icons/Edit';

const useStyle = makeStyles(() =>({
    root:{
        maxWidth:345,
        marginTop:20
    },
    cardArea:{
        borderBottom:'1px solid red',
        paddingBottom:0,
    },
    media:{
        marginBottom:10,
        paddingBottom:0
    }
}))

const ProfilePicture = () =>{
    const classes = useStyle()

        return (
            <div>
                <Card className={classes.root} variant={'outlined'}>
                    <CardActionArea className={classes.cardArea}>
                        <CardMedia className={classes.media} component={"img"} alt={'MyAccount Picture'} image={profile} title={'Picture'}/>
                    </CardActionArea>
                    <CardActions>
                        <Button endIcon={<EditIcon/>} >Edit Profile</Button>
                    </CardActions>
                </Card>
            </div>
        );

}

export default ProfilePicture;