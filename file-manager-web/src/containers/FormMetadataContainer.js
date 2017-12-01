import React from "react";
import { FormMetadata } from "../components/FormMetadata/FormMetadata";
import { AuthService } from "../services/AuthService";
import { metadataRoute } from "../env";
import {MetadataService} from "../services/MetadataService";
import { toast } from "react-toastify";


export class FormMetadataContainer extends React.Component {

    constructor(props){
        super(props);

        this.state = {
            uniqueId: 0,
            originalName: '',
            contentType: '',
            size: '',
            expiry: '',
            isUpdate: this.props.match.params.id || false
        }
    }

    componentWillMount(){
        AuthService.checkAuthentication();
    }

    componentDidMount(){
        if (this.state.isUpdate) {
            MetadataService.getMetadata(this.props.match.params.id)
                .then((response) => {
                    this.setState(response.data)
                })
                .catch(error=>console.log(error));
        }
    }

    onCancel = () => {
        this.props.history.push(metadataRoute);
    }

    onDelete(){
        console.log('delete');
    }

    onSave = ()=>{
        if (this.state.isUpdate){
            MetadataService.updateWholeMetadata(this.state)
                .then(response=>toast.success('Metadata updated'))
                .catch(error=>toast.error('Error on metadata update'));
        }else{
            MetadataService.saveMetadata(this.state)
                .then(toast.success('Metadata created'))
                .catch(error=>toast.error('Error on create metadata'));
        }
    }

    onChanged = (event)=> {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    render(){
        return <FormMetadata onCancel={this.onCancel} onDelete={this.onDelete} onSave={this.onSave} onChange={this.onChanged} state={this.state} />
    }
}