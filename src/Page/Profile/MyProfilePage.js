import React from 'react';
import './MyProfilePage.style.scss'
import TextInputField from "../../Component/TextInput/TextInputField";
import ProfilePicture from "../../Component/ProfilePicture/ProfilePicture";
import {Grid} from "@material-ui/core";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardActionArea from "@material-ui/core/CardActionArea";
import {Button} from "@material-ui/core";
import {Alert} from "@material-ui/lab";


class  MyProfilePage extends React.Component{
    constructor(props) {
        super(props);
        this.state={
            gender:'',
            isFieldDisable: true
        }

    }

    handleChange = event => {
        this.setState({gender: event.target.value})
    };
    handleFieldChange = (event) => {
        event.preventDefault()
        this.setState({ isFieldDisable: false})

    }
    handleCancel = event =>{
        event.preventDefault();
        this.setState({isFieldDisable: true})
    }
    render() {
        return (
            <div>
                <Alert className={'profile-title'} icon={false} severity={"success"}>
                    <h2>My Profile</h2>
                </Alert>
                <Grid alignItems={'stretch'} container={true} spacing={2}>
                    <Grid item={true} xs={12} sm={7}>
                        <Card className={'card-container'} elevation={1} variant={"outlined"}>
                            <CardActionArea>
                                <div className={'section-1'}>
                                    <div className={'field-container'}>
                                        <TextInputField label={'Employee ID:'} type={'text'} disable={true}  value={'EMP-159K12'}/>
                                    </div>
                                    <div className={'field-container'}>
                                        <TextInputField label={'First Name: '} type={'text'} disable={this.state.isFieldDisable}/>
                                        <TextInputField label={'Middle Name:'} type={'text'} disable={this.state.isFieldDisable}/>
                                        <TextInputField label={'Last Name'} type={'text'} disable={this.state.isFieldDisable}/>
                                    </div>
                                    <div className={'field-container'}>
                                        <TextInputField label={'Email'} type={'email'} disable={this.state.isFieldDisable}/>
                                        <TextInputField label={'Phone Number: '} type={'text'} disable={this.state.isFieldDisable}/>
                                        <TextInputField label={'ID'} type={'text'} disable={this.state.isFieldDisable}/>
                                    </div>

                                    <div className={'field-container'}>
                                        <TextInputField label={'ID Issue Date'} type={'text'} disable={this.state.isFieldDisable}/>
                                        <TextInputField label={'ID expire Date: '} type={'text'} disable={this.state.isFieldDisable}/>
                                        <TextInputField label={'Nationality'} type={'text'} disable={this.state.isFieldDisable}/>
                                    </div>
                                    <div>

                                            <RadioGroup row={true} aria-label={'gender'} >
                                                <FormControlLabel labelPlacement={'end'} control={<Radio name={'gender'} onChange={this.handleChange} value={'Male'} color={"primary"}/>} label={'Male'} disable={this.state.isFieldDisable}/>
                                                <FormControlLabel labelPlacement={'end'} control={<Radio name={'gender'} onChange={this.handleChange} value={'Female'} color={"primary"}/>} label={'Female'} disable={this.state.isFieldDisable}/>
                                            </RadioGroup>

                                    </div>
                                    <div className={'field-container'}>
                                        <TextInputField label={'Department: '} type={'text'} disable={this.state.isFieldDisable}/>
                                        <TextInputField label={'Role:'} type={'text'} disable={this.state.isFieldDisable}/>
                                        <TextInputField label={'Status'} type={'text'} disable={this.state.isFieldDisable}/>
                                    </div>

                                    <div className={'field-container'}>
                                        <TextInputField label={'Street Name: '} type={'text'} disable={this.state.isFieldDisable}/>
                                        <TextInputField label={'City:'} type={'text'} disable={this.state.isFieldDisable}/>
                                        <TextInputField label={'Province: '} type={'text'} disable={this.state.isFieldDisable}/>
                                    </div>
                                    <div className={'field-container'}>
                                        <TextInputField label={'Zip Code: '} type={'text'} disable={this.state.isFieldDisable}/>
                                        <TextInputField label={'Country:'} type={'text'} disable={this.state.isFieldDisable}/>

                                    </div>
                                    <CardActions>
                                        <div className={'button-container'}>
                                            <div className={'button-1'}>
                                                <Button fullWidth={true} variant={'outlined'} color={'primary'} onClick={this.handleFieldChange}>Update</Button>
                                            </div>
                                            <div className={'button-1'}>
                                            {
                                                !this.state.isFieldDisable ? <Button fullWidth={true} variant={'outlined'} color={'primary'}>Save</Button>: null
                                            }
                                            </div>
                                            <div className={'button-1'}>
                                            {
                                                !this.state.isFieldDisable ? <Button fullWidth={true} variant={'outlined'} color={'secondary'} onClick={this.handleCancel}>Cancel</Button>: null
                                            }
                                            </div>

                                        </div>
                                    </CardActions>
                                </div>
                            </CardActionArea>
                        </Card>

                    </Grid>

                    <Grid item={true} xs={12} sm={4}>
                        <ProfilePicture/>
                    </Grid>
                </Grid>
            </div>
        );
    }

}

export default MyProfilePage;

